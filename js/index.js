window.addEventListener('DOMContentLoaded', () => {
    const introText = document.querySelector('.intro p');
    const introSection = document.querySelector('.intro');

    if (!introText || !introSection) return;

    let revealThreshold = introSection.offsetTop + 20;
    let ticking = false;

    const updateIntroVisibility = () => {
        introText.classList.toggle('is-visible', window.scrollY > revealThreshold);
        ticking = false;
    };

    const requestVisibilityUpdate = () => {
        if (!ticking) {
            window.requestAnimationFrame(updateIntroVisibility);
            ticking = true;
        }
    };

    window.addEventListener('scroll', requestVisibilityUpdate);
    window.addEventListener('resize', () => {
        revealThreshold = introSection.offsetTop + 20;
        requestVisibilityUpdate();
    });

    updateIntroVisibility();
});
