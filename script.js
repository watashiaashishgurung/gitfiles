// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const changeTextButton = document.querySelector('#changeTextButton');
    const revertTextButton = document.querySelector('#revertTextButton');

    changeTextButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});