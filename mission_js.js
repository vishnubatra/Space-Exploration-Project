// Function to expand mission details
function expandMission(element) {
    const content = element.querySelector('.expanded-content');
    content.style.display = 'block';
}

// Function to collapse mission details
function collapseMission(element) {
    const content = element.querySelector('.expanded-content');
    content.style.display = 'none';
}

function createSlideshow(missionBox) {
    let currentImageIndex = 0;
    const slideshow = missionBox.querySelector('.slideshow');
    const images = slideshow.querySelectorAll('.slide-image');
    const totalImages = images.length;
    let interval;

    function showNextImage() {
        images[currentImageIndex].style.display = 'none';
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        images[currentImageIndex].style.display = 'block';
    }

    function startSlideshow() {
        interval = setInterval(showNextImage, 1700); // Change image every 1500 milliseconds
    }

    function stopSlideshow() {
        clearInterval(interval);
        images.forEach(image => image.style.display = 'none');
        images[0].style.display = 'block'; // Reset to first image
    }

    missionBox.addEventListener('mouseenter', startSlideshow);
    missionBox.addEventListener('mouseleave', stopSlideshow);
}

function initSlideshow() {
    const missionBoxes = document.querySelectorAll('.mission');
    missionBoxes.forEach(createSlideshow);
}

// Initialize the slideshow when the window loads
window.onload = () => {
    initSlideshow();
};
