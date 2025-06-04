// Функция для генерации QR-кода
function generateQR() {
    const text = document.getElementById('qr-text').value;
    if (!text) {
        alert('Пожалуйста, введите текст для QR-кода');
        return;
    }

    const qrContainer = document.getElementById('qr-code');
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
}

// Функция для скачивания QR-кода
function downloadQR() {
    const canvas = document.querySelector('#qr-code canvas');
    if (!canvas) {
        alert('Сначала сгенерируйте QR-код');
        return;
    }

    const link = document.createElement('a');
    link.download = 'qr-code.png';
    link.href = canvas.toDataURL();
    link.click();
} 