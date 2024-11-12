const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Declare the image filenames and alternative text
const imageFilenames = ['pic1.JPG', 'pic2.JPG', 'pic3.JPG', 'pic4.JPG', 'pic5.JPG'];
const altText = {
  'pic1.JPG': 'Friends',
  'pic2.JPG': 'Utah',
  'pic3.JPG': 'Me and Dog',
  'pic4.JPG': 'Fall Foliage',
  'pic5.JPG': 'Autumn In Boulder'
};

// Loop through images to create thumbnails and add click functionality
imageFilenames.forEach(filename => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${filename}`); // Use backticks here
  newImage.setAttribute('alt', altText[filename]);
  thumbBar.appendChild(newImage);


  // Add a click event listener to each thumbnail
  newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', `images/${filename}`);
    displayedImage.setAttribute('alt', altText[filename]);
  });
});

// Wiring up the Darken/Lighten button
btn.addEventListener('click', () => {
  const isDark = btn.getAttribute('class') === 'dark';
  
  if (isDark) {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
});
