window.addEventListener('DOMContentLoaded', () => {
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

    window.addEventListener('scroll', () => {
        if (!introText) return;
        if (window.scrollY > revealThreshold) {
            introText.style.display = "flex"
            introText.style.opacity = '1';
            introText.style.pointerEvents = 'auto';
            introText.classList.add("fade-in-box");
        } else {
            introText.style.opacity = '0';
            introText.style.pointerEvents = 'none';
            introText.style.display = "none";
            // introText.classList.remove("fade-in-box");
        }
    });

});
