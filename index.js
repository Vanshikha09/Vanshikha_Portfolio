document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll('.project-card');
    let currentPageIndex = 0;

    function toggleContent() {
        pages[currentPageIndex].classList.remove('show');
        currentPageIndex = (currentPageIndex + 1) % pages.length;
        pages[currentPageIndex].classList.add('show');
    }

    // function performSearch(searchTerm) {
    //     // Iterate through the content of project cards and check for the search term
    //     pages.forEach(projectCard => {
    //         const content = projectCard.textContent.toLowerCase();
    //         if (content.includes(searchTerm)) {
    //             // Do something when a match is found, e.g., highlight the project card
    //             projectCard.style.backgroundColor = '#ffe4b5'; // LightSalmon color
    //         } else {
    //             // Reset styles for project cards without a match
    //             projectCard.style.backgroundColor = '';
    //         }
    //     });

        // Call the toggleContent function to reset the displayed project card
        toggleContent();
    }

    const cards = document.querySelectorAll('.card');
    let currentCardIndex = 0;

    function toggleCard() {
        cards[currentCardIndex].classList.remove('show');
        currentCardIndex = (currentCardIndex + 1) % cards.length;
        cards[currentCardIndex].classList.add('show');
    }

    // Initial display
    toggleContent();
    toggleCard();

