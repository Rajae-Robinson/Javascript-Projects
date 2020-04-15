function playAudio(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return;  // stops function
    audio.currentTime = 0; // starts over audio
    audio.play();
    key.classList.add('highlight');
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('highlight');
}

const keys = Array.from(document.querySelectorAll('.key'));
window.addEventListener('keydown', playAudio);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));