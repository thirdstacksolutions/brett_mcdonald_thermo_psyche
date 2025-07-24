// Gamification section

document.addEventListener('DOMContentLoaded', () => {
  // Select all list items in the gamification section
  const buttons = document.querySelectorAll('.game-buttons li');
  const titleElement = document.querySelector('.gamification-title');
  const textElement = document.querySelector('.gamification-text');
  const imageElement = document.querySelector('.game-grid-image img');
  const textHighlightElement = document.querySelector(
    '.gamification-text-highlight'
  );
  const containerElement = document.querySelector('.game-grid-content');

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let touchStartX = 0;
  let touchEndX = 0;
  let currentIndex = -1;
  let gamificationData = {};

  console.log(buttons);

  // Fetch JSON data
  fetch('../assets/gamification.json')
    .then((response) => response.json())
    .then((data) => {
      // Store JSON data for easy access
      gamificationData = data.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {});

      initializeMobileItems();

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
          if (item && button.classList.contains('gamification-current')) {
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

  const initializeMobileItems = () => {
    setUpMobileListeners();
    mobileUpdateItems();
  };

  const mobileUpdateItems = () => {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled =
      currentIndex === Object.keys(gamificationData).length - 1;

    if (currentIndex >= 0) {
      textHighlightElement.style.display = 'none';
    }

    const currentItem =
      gamificationData[Object.keys(gamificationData)[currentIndex]];
    if (currentItem) {
      titleElement.textContent = currentItem.title;
      textElement.textContent = currentItem.description;
      imageElement.src = currentItem.image_location;
      imageElement.alt = currentItem.title;
    }
  };

  const setUpMobileListeners = () => {
    // Navigation buttons
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        mobileUpdateItems();
      }
    });

    nextBtn.addEventListener('click', () => {
      if (currentIndex < Object.keys(gamificationData).length - 1) {
        currentIndex++;
        mobileUpdateItems();
      }
    });

    // Swipe functionality
    containerElement.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    containerElement.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });
  };

  const handleSwipe = () => {
    const swipeDistance = touchEndX - touchStartX;
    const minSwipeDistance = 50;

    if (swipeDistance > minSwipeDistance && currentIndex > 0) {
      currentIndex--;
    } else if (
      swipeDistance < -minSwipeDistance &&
      currentIndex < Object.keys(gamificationData).length - 1
    ) {
      currentIndex++;
    }
    mobileUpdateItems();
  };
});
