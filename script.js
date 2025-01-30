const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
  'Estas segurx?',
  'Piensalo bien',
  'Piensalo muy bien',
  'Piensalo',
  'Mira el otro botón'
]

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("background-music");

  // Intenta reproducir el audio automáticamente
  const playAudio = () => {
      audio.play().catch(() => {
          console.log("El navegador bloqueó la reproducción automática.");
      });
  };

  
  document.addEventListener("click", playAudio, { once: true });


  playAudio();
});