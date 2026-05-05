// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose > img');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const audio = document.querySelector('audio');
  const playButton = document.querySelector('button');

  // Confetti instance
  const jsConfetti = new JSConfetti();

  // Horn selection 
  hornSelect.addEventListener('change', () => {
    const value = hornSelect.value;
    if (value === 'select') return;

    hornImage.src = `assets/images/${value}.svg`;
    hornImage.alt = value.replace('-', ' ');
    audio.src = `assets/audio/${value}.mp3`;
  });

  // Volume changes 
  volumeSlider.addEventListener('input', () => {
    const volume = Number(volumeSlider.value);

    // Audio element volume is 0.0 to 1.0
    audio.volume = volume / 100;

    let iconLevel;
    if (volume === 0) {
      iconLevel = 0;
    } else if (volume < 33) {
      iconLevel = 1;
    } else if (volume < 67) {
      iconLevel = 2;
    } else {
      iconLevel = 3;
    }

    volumeIcon.src = `assets/icons/volume-level-${iconLevel}.svg`;
    volumeIcon.alt = `Volume level ${iconLevel}`;
  });

  // Play button 
  playButton.addEventListener('click', () => {
    if (!audio.src || hornSelect.value === 'select') return;

    audio.play();

    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
