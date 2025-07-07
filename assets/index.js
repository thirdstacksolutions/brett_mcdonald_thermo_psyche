// Gamification section

document.addEventListener('DOMContentLoaded', () => {
    // Select all list items in the gamification section
    const buttons = document.querySelectorAll('.game-buttons li');
    const titleElement = document.querySelector('.gamification-title');
    const textElement = document.querySelector('.gamification-text');
    const imageElement = document.querySelector('.game-grid-image img');

    console.log(buttons);

    // Fetch JSON data
    fetch('assets/gamification.json')
        .then((response) => response.json())
        .then((data) => {
            // Store JSON data for easy access
            const gamificationData = data.reduce((acc, item) => {
                acc[item.id] = item;
                return acc;
            }, {});

            buttons.forEach((button) => {
                button.addEventListener('click', () => {
                    // Remove gamificaiton-current class from all buttons and add gamification-inactive class
                    buttons.forEach((btn) => {
                        btn.classList.remove('gamification-current');
                        btn.classList.add('gamification-inactive');
                    });

                    // Add gamification-current class to the clicked button
                    button.classList.remove('gamification-inactive');
                    button.classList.add('gamification-current');

                    // Update content based on button's id
                    const id = button.id;
                    const item = gamificationData[id];

                    // If item and button has gamification-current class, update the content
                    if (
                        item &&
                        button.classList.contains('gamification-current')
                    ) {
                        titleElement.textContent = item.title;
                        textElement.textContent = item.description;
                        imageElement.src = item.image_location;
                        imageElement.alt = item.title;
                    }
                });
            });
        })
        .catch((error) => {
            console.error('Error fetching gamification data:', error);
        });
});
