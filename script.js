document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const color = document.getElementById('color').value;
  
    displayGreeting(name, color);
  });

  function displayGreeting(name, color) {
    const greeting = document.createElement('p');
    greeting.innerHTML = `This is ${name}!`;
    greeting.style.color = color;
    document.getElementById('formContainer').appendChild(greeting);
  }

  const imageUrls = [
    '',
    '',
    '',
   
  ];
  
  function createGallery(images) {
    const galleryContainer = document.getElementById('gallery');
    
    images.forEach(url => {
      const image = document.createElement('img');
      image.src = url;
      galleryContainer.appendChild(image);
    });
  }
  
  createGallery(imageUrls);
  
  let currentIndex = 0;

  function showImage(index) {
    const images = document.querySelectorAll('#gallery img');
    if (index < 0) {
      index = images.length - 1;
    } else if (index >= images.length) {
      index = 0;
    }
    
    images.forEach(image => image.style.display = 'none');
    images[index].style.display = 'block';
    currentIndex = index;
  }
  
  document.getElementById('prevButton').addEventListener('click', () => {
    showImage(currentIndex - 1);
  });
  
  document.getElementById('nextButton').addEventListener('click', () => {
    showImage(currentIndex + 1);
  });
  
  // Show the first image initially
  showImage(currentIndex);

  const colorButton = document.getElementById('colorButton');
const body = document.body;

colorButton.addEventListener('click', () => {
  // Add the CSS class with the grey background color
  body.classList.add('grey-background');
  
  // Remove the CSS class after 1 second to reset the background color to black
  setTimeout(() => {
    body.classList.remove('grey-background');
  }, 1000);
});

    