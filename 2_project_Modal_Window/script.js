'use script';

const btnOpenWindow = document.querySelectorAll('.btn');
const btnModalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
console.log(btnOpenWindow.length);

overlay.addEventListener('click', function() {
    overlay.classList.add('hidden');
    btnModalWindow.classList.add('hidden');
});

for(let i = 0; i < btnOpenWindow.length; i++) {
    btnOpenWindow[i].addEventListener('click', function() {
        console.log(btnOpenWindow[i].textContent);
        btnModalWindow.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}
document.querySelector('.cross-btn').addEventListener('click', function() {
    btnModalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
});