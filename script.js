function displayMessage() {
    const nameInput = document.getElementById('nameInput').value;
    const messageDiv = document.getElementById('message');
    const questionDiv = document.getElementById('question');
    
    if (nameInput) {
        messageDiv.textContent = `I love you ${nameInput}.`;
        messageDiv.classList.remove('hidden');
        setTimeout(() => {
            messageDiv.style.opacity = 1;
            messageDiv.style.transform = 'scale(1)';
        }, 100);
        questionDiv.classList.remove('hidden');
        setTimeout(() => {
            document.getElementById('doYouLoveMessage').style.opacity = 1;
            document.getElementById('doYouLoveMessage').style.transform = 'scale(1)';
        }, 500);
    } else {
        alert("Please enter your name.");
    }
}

function showLoveMessage() {
    const loveMessageDiv = document.getElementById('loveMessage');
    loveMessageDiv.textContent = "I’m so happy you said yes. Can’t wait for all the amazing moments we’ll share together.";
    loveMessageDiv.classList.remove('hidden');
    setTimeout(() => {
        loveMessageDiv.style.opacity = 1;
        loveMessageDiv.style.transform = 'scale(1)';
    }, 100);
}

const noButton = document.getElementById('noButton');
noButton.addEventListener('mouseover', () => {
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 100);
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});
