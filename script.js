const startBtn = document.querySelector('.startBtn');
const stopBtn = document.querySelector('.stopBtn');
const result = document.querySelector('.result');
const recognition = new window.webkitSpeechRecognition();

recognition.lang = 'ru-RU';
recognition.continuous = true;
recognition.interimResults = true;

startBtn.addEventListener('click', () => {
     recognition.start();
     console.log('started');
 });

stopBtn.addEventListener('click', () => {
     recognition.stop();
     console.log('stopped');
});

// Обработка результатов распознавания
recognition.onresult = (event) => {
     let transcript = '';
     
     // Перебор результатов распознавания
     for (let i = event.resultIndex; i < event.results.length; i++) {
         if (event.results[i].isFinal) {
             transcript += event.results[i][0].transcript;
         } else {
             transcript += event.results[i][0].transcript;
         }
     }

     // Проверка распознанного текста
     if (transcript.includes('Яна я тебя люблю очень сильно')) {
         console.log('yes');
         transcript = '❤️❤️❤️';
         result.textContent = transcript;  // Обновляем содержимое result.textContent
     } else {
         result.textContent = transcript;  // Обновляем содержимое result.textContent
     }
};

 
 // Обработчик ошибок распознавания
 recognition.onerror = (event) => {
     console.error('Error occurred in recognition: ', event.error);
 };
 