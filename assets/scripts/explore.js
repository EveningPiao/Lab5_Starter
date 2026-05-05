// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const textArea = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('button');
  const faceImage = document.querySelector('#explore > img');

  const synth = window.speechSynthesis;
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    // keep the placeholder
    voiceSelect.querySelectorAll('option:not([disabled])').forEach((opt) => opt.remove());

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      if (voice.default) {
        option.textContent += ' -- DEFAULT';
      }
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }

  populateVoiceList();
  if (typeof synth.onvoiceschanged !== 'undefined') {
    synth.onvoiceschanged = populateVoiceList;
  }

  // Handle the "Press to Talk" button
  talkButton.addEventListener('click', () => {
    const text = textArea.value;
    if (!text || voiceSelect.value === 'select') return;

    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoice = voices[Number(voiceSelect.value)];
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    // Swap to open-mouth face while speaking
    utterance.addEventListener('start', () => {
      faceImage.src = 'assets/images/smiling-open.png';
      faceImage.alt = 'Smiling face with open mouth';
    });

    utterance.addEventListener('end', () => {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    });

    synth.speak(utterance);
  });
}
