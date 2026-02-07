
window.addEventListener('DOMContentLoaded', () => {
    let header = document.querySelector('header');
    let menuButton = document.querySelector('.nav_bar');
    let menu = document.querySelector('header nav ul');
    let introText = document.querySelector('.intro p');
    let introSection = document.querySelector('.intro');
    let revealThreshold = 20;

    if (introSection) {
        revealThreshold = introSection.offsetTop + 20;
    }

    if (introText) {
        introText.style.opacity = '0';
        introText.style.pointerEvents = 'none';
        introText.style.transition = 'opacity 0.4s ease';
    }

    menuButton.addEventListener('mousedown', (event) => {
        event.preventDefault();
        let style = window.getComputedStyle(menu);
        if (style.display == 'none') {
            menu.style.position = 'absolute';
            menu.style.right = 0;
            menu.style.top = header.offsetHeight + 'px';
            menu.style.display = 'flex';
        }
        else if (style.display != 'none') {
            menu.style.display = 'none';
        }
    }, true);

    menuButton.addEventListener('focus', (event) => {
        let style = window.getComputedStyle(menu);
        if (style.display == 'none') {
            menu.style.position = 'absolute';
            menu.style.right = 0;
            menu.style.top = header.offsetHeight + 'px';
            menu.style.display = 'flex';
        }
    }, true)

    menuButton.addEventListener('blur', () => {
        let style = window.getComputedStyle(menu);
        if (style.display != 'none') {
            menu.style.display = 'none';
        }
    }, true);

    window.addEventListener("resize", () => {
        if (window.innerWidth > 1024) {
            menu.style.position = 'relative';
            menu.style.top = 0;
            menu.style.display = 'flex';
        }
        else {
            menu.style.display = 'none';
        }
    });


    window.addEventListener('scroll', () => {
        if (!introText) return;
        if (window.scrollY > revealThreshold) {
            introText.style.opacity = '1';
            introText.style.pointerEvents = 'auto';
        } else {
            introText.style.opacity = '0';
            introText.style.pointerEvents = 'none';
        }
    });

});


