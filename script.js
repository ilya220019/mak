document.addEventListener('DOMContentLoaded', (event) => {
    const clickCircle = document.getElementById('click-circle');
    const clickCountDisplay = document.getElementById('click-count');
    let clickCount = localStorage.getItem('clickCount') || 0;

    clickCountDisplay.textContent = clickCount;

    clickCircle.addEventListener('click', () => {
        clickCount++;
        clickCountDisplay.textContent = clickCount;
        localStorage.setItem('clickCount', clickCount);
        saveClickData(clickCount);
    });

    function saveClickData(clickCount) {
        const userCode = generateUniqueCode();
        fetch('YOUR_WEB_APP_URL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userCode, clickCount })
        })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Ошибка:', error));
    }

    function generateUniqueCode() {
        let code = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < 8; i++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return code;
    }
});

