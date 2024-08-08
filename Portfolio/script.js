window.addEventListener('load', () => {
    const intro = document.getElementById('welcomeScreen');
    const content = document.getElementById('container');
    setTimeout(() => {
        intro.classList.add('hidden');
        content.classList.add('visible');
    }, 2500);
});

// const burger = document.querySelector('.burger');
//         const nav = document.querySelector('#nav-links');

//         burger.addEventListener('click', () => {
//             nav.classList.toggle('active');
//             burger.classList.toggle('active');
//         });