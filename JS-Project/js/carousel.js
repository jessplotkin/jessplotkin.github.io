document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const images = [
      "../assets/sloth.jpg",
      "../assets/images/project1_img2.jpg"
    ];
  
    let currentIndex = 0;
  
    function displayImage(index) {
      carousel.style.backgroundImage = `url(${images[index]})`;
    }
  
    document.querySelector(".prev").addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      displayImage(currentIndex);
    });
  
    document.querySelector(".next").addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      displayImage(currentIndex);
    });
  
    displayImage(currentIndex);
  });
  