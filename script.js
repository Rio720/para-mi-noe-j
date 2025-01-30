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

    // Función para intentar reproducir el audio
    const playAudio = () => {
        audio.play().catch(() => {
            console.log("El navegador bloqueó la reproducción automática.");
        });
    };

    // Detectar interacción del usuario para iniciar el audio en móviles y PC
    const enableAudio = () => {
        playAudio();
        document.removeEventListener("click", enableAudio);
        document.removeEventListener("touchstart", enableAudio);
    };

    // Intentar reproducir automáticamente
    playAudio();

    // Si es bloqueado, esperar interacción del usuario
    document.addEventListener("click", enableAudio, { once: true });
    document.addEventListener("touchstart", enableAudio, { once: true });
});
