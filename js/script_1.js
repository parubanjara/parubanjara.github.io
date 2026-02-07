window.addEventListener('DOMContentLoaded', () => {
    let header = document.querySelector('header');
    let menuButton = document.querySelector('.nav_bar');
    let menu = document.querySelector('header nav ul');
    let printer_text = document.querySelector('#print li');

    if (menuButton && menu && header) {
        menuButton.addEventListener('mousedown', (event) => {
            event.preventDefault();
            let style = window.getComputedStyle(menu);
            if (style.display == 'none') {
                menu.style.position = 'absolute';
                menu.style.right = 0;
                menu.style.top = header.offsetHeight + 'px';
                menu.style.display = 'flex';
            } else {
                menu.style.display = 'none';
            }
        }, true);

        menuButton.addEventListener('focus', () => {
            let style = window.getComputedStyle(menu);
            if (style.display == 'none') {
                menu.style.position = 'absolute';
                menu.style.right = 0;
                menu.style.top = header.offsetHeight + 'px';
                menu.style.display = 'flex';
            }
        }, true);

        menuButton.addEventListener('blur', () => {
            let style = window.getComputedStyle(menu);
            if (style.display != 'none') {
                menu.style.display = 'none';
            }
        }, true);

        window.addEventListener('resize', () => {
            if (window.innerWidth > 1024) {
                menu.style.position = 'relative';
                menu.style.top = 0;
                menu.style.display = 'flex';
            } else {
                menu.style.display = 'none';
            }
        });
    }

    if (printer_text) {
        printer_text.addEventListener('click', () => {
            window.print();
        });
    }
});
