// get all media-btns
const mediaButtons = document.querySelectorAll(".media-btn");
// set up a const to load imgcontainer
const imageContainers = {
  imageContainer1: { currentIndex: 0, shuffledImages: [], jsonPath: 'img/illustration.json' },
  imageContainer2: { currentIndex: 0, shuffledImages: [], jsonPath: 'img/typography.json' },
  imageContainer3: { currentIndex: 0, shuffledImages: [], jsonPath: 'img/3d.json' },
  imageContainer4: { currentIndex: 0, shuffledImages: [], jsonPath: 'img/sketchbook.json' },
};

const batchSize = 10; 

document.addEventListener('DOMContentLoaded', (event) => {
    // after the page loaded, set all btn to default: off
    mediaButtons.forEach(btn => {
        btn.classList.add('mb-off');
    });
  });

mediaButtons.forEach(button => {

  button.addEventListener("click", function() {
      // set all btns as off
      mediaButtons.forEach(btn => {
          btn.classList.add('mb-off');
          btn.classList.remove('mb-on');
      });

      // if btn is clicked then turn it to "on"
      this.classList.add('mb-on');
      this.classList.remove('mb-off');

      // get clicked-btn's data-target
      const targetContainerId = this.dataset.target;

      // navigate
      const mediaSelection = document.getElementById('work');
        mediaSelection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

      // clean up all img container
      document.querySelectorAll('.image-container').forEach(container => {
          container.innerHTML = ''; // clean up container
      });

      // load linked
      const containerInfo = imageContainers[targetContainerId];

      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // swap elements
        }
        return array;
      }

      if (containerInfo.shuffledImages.length === 0) { // if not loaded
          fetch(containerInfo.jsonPath)
          .then(response => response.json())
          .then(images => {
              containerInfo.shuffledImages = shuffleArray(images);
              // load img to container
              loadImages(containerInfo, targetContainerId);
          })
          .catch(error => console.error('Error loading the JSON file:', error));
      } else {
          // if loaded then display
          loadImages(containerInfo, targetContainerId);
      }
  });
});

function loadImages(containerInfo, containerId) {
  // load img based on current containerInfo
  const batch = containerInfo.shuffledImages.slice(containerInfo.currentIndex, containerInfo.currentIndex + batchSize);
  batch.forEach(imageUrl => {
      const imgElement = document.createElement('img');
      imgElement.src = imageUrl;
      document.getElementById(containerId).appendChild(imgElement);
  });
  containerInfo.currentIndex += batchSize; // renew index
}