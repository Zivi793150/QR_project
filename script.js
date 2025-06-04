// Функция для генерации QR-кода
function generateQR() {
    const textInput = document.getElementById('qr-text');
    const text = textInput.value.trim();
    
    if (!text) {
        alert('Пожалуйста, введите текст для QR-кода');
        textInput.focus();
        return;
    }

    const qrContainer = document.querySelector('.qr-container');
    qrContainer.innerHTML = ''; // Очищаем предыдущий QR-код

    // Создаем QR-код
    const qr = new QRCode(qrContainer, {
        text: text,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    // Обновляем aria-label для доступности
    qrContainer.setAttribute('aria-label', `QR-код для текста: ${text}`);
}

// Функция для скачивания QR-кода
function downloadQR() {
    const canvas = document.querySelector('.qr-container canvas');
    if (!canvas) {
        alert('Сначала сгенерируйте QR-код');
        return;
    }

    const link = document.createElement('a');
    link.download = 'qr-code.png';
    link.href = canvas.toDataURL();
    link.click();
}

// Добавляем обработчик клавиатуры для поля ввода
document.getElementById('qr-text').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        generateQR();
    }
}); 