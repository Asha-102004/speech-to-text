
// Check if SpeechRecognition is available in the browser
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

const startButton = document.getElementById('startButton');
const output = document.getElementById('output');

recognition.continuous = true;
recognition.interimResults = true;

startButton.addEventListener('click', () => {
recognition.start();
startButton.textContent = 'Listening...';
});

recognition.addEventListener('result', (event) => {
const transcript = Array.from(event.results)
    .map((result) => result[0].transcript)
    .join('');

output.textContent = transcript;
});

recognition.addEventListener('end', () => {
startButton.textContent = 'Start Listening';
});

recognition.addEventListener('error', (event) => {
console.error('Speech recognition error:', event.error);
});
} else {
// If the SpeechRecognition API is not available
output.textContent = "Speech recognition is not supported in this browser.";
startButton.disabled = true;
}
