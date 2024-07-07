document.addEventListener('DOMContentLoaded', (event) => {
    const clickButton = document.getElementById('click-button');
    const clickCountDisplay = document.getElementById('click-count');
    let clickCount = localStorage.getItem('clickCount') || 0;
    
    clickCountDisplay.textContent = clickCount;
    
    clickButton.addEventListener('click', () => {
        clickCount++;
        clickCountDisplay.textContent = clickCount;
        localStorage.setItem('clickCount', clickCount);
    });
});
