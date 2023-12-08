function playVideo() {
    document.getElementById('image').style.display = 'none';
    document.getElementById('videoOverlay').style.display = 'block';
    document.querySelector('.video-overlay video').play();
  }

  function pauseVideo() {
    document.getElementById('image').style.display = 'block';
    document.getElementById('videoOverlay').style.display = 'none';
    document.querySelector('.video-overlay video').pause();
  }