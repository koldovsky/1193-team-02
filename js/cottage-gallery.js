document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.cottage-gallery-image-column img');
  
    images.forEach(img => {
      img.addEventListener('click', () => {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          if (img.requestFullscreen) {
            img.requestFullscreen();
          } else if (img.mozRequestFullScreen) { // Firefox
            img.mozRequestFullScreen();
          } else if (img.webkitRequestFullscreen) { // Chrome, Safari and Opera
            img.webkitRequestFullscreen();
          } else if (img.msRequestFullscreen) { // IE/Edge
            img.msRequestFullscreen();
          }
        }
      });
    });
  
    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement) {
        images.forEach(img => {
          img.style.width = ''; // Reset width when exiting fullscreen
          img.style.height = ''; // Reset height when exiting fullscreen
        });
      }
    });
  });