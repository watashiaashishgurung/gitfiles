document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const homeButton = document.querySelector('#homebutton');
    const imagesDiv = document.querySelector('#images');

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    homeButton.addEventListener('click', scrollToTop);
    imagesDiv.addEventListener('click', scrollToTop);

    // Scroll to images section on page load
    imagesDiv.scrollIntoView({ behavior: 'smooth' });
});