function playSound(file) {

    const audio = new Audio(file);
    audio.play();
}
function animateKey(keyChar) {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        if (key.innerText.trim().toLowerCase() === keyChar.toLowerCase()) {
            key.classList.add('pressed');
            setTimeout(() => {
                key.classList.remove('pressed');
            }, 150);
        }
    });
}

function Asound() { playSound('assets/sounds/1.mp3'); animateKey('A'); }
function Ssound() { playSound('assets/sounds/2.mp3'); animateKey('S'); }
function Dsound() { playSound('assets/sounds/3.mp3'); animateKey('D'); }
function Fsound() { playSound('assets/sounds/4.mp3'); animateKey('F'); }
function Gsound() { playSound('assets/sounds/5.mp3'); animateKey('G'); }
function Hsound() { playSound('assets/sounds/6.mp3'); animateKey('H'); }
function Jsound() { playSound('assets/sounds/7.mp3'); animateKey('J'); }
function Ksound() { playSound('assets/sounds/8.mp3'); animateKey('K'); }
function Lsound() { playSound('assets/sounds/9.mp3'); animateKey('L'); }

// Add event listeners for keydown events
document.addEventListener('keydown', function (e) {
    switch (e.key.toLowerCase()) {
        case 'a': Asound(); break;
        case 's': Ssound(); break;
        case 'd': Dsound(); break;
        case 'f': Fsound(); break;
        case 'g': Gsound(); break;
        case 'h': Hsound(); break;
        case 'j': Jsound(); break;
        case 'k': Ksound(); break;
        case 'l': Lsound(); break;
    }
});