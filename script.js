window.addEventListener('load', () => {
    const intro = document.getElementById('welcomeScreen');
    const content = document.getElementById('container');
    setTimeout(() => {
        intro.classList.add('hidden');
        content.classList.add('visible');
    }, 1500);
});