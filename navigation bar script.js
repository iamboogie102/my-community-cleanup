document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function () {
            links.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Automatically set active class for the current page based on URL hash
    const currentHash = window.location.hash;
    if (currentHash) {
        const currentLink = document.querySelector(`a[href="${currentHash}"]`);
        if (currentLink) {
            currentLink.classList.add('active');
        }
    }
});

