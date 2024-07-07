document.addEventListener('DOMContentLoaded', (event) => {
    const clickButton = document.getElementById('click-button');
    const saveButton = document.getElementById('save-button');
    const clickCountDisplay = document.getElementById('click-count');
    let clickCount = localStorage.getItem('clickCount') || 0;

    clickCountDisplay.textContent = clickCount;

    clickButton.addEventListener('click', () => {
        clickCount++;
        clickCountDisplay.textContent = clickCount;
        localStorage.setItem('clickCount', clickCount);
    });

    saveButton.addEventListener('click', () => {
        const userCode = generateUniqueCode();
        fetch('https://script.google.com/macros/s/AKfycbyQjf9lbZcMCcretYsg8WXrWXUfP7q9b3UTu9HRMz2RA3CahfHPa06oGWOC4Wq-nJQJ/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userCode, clickCount })
        })
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => console.error('Ошибка:', error));
    });

    function generateUniqueCode() {
        let code = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < 8; i++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return code;
    }
});

