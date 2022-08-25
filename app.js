const textarea = document.querySelector('.textarea');
const count = document.querySelector('.count');

textarea.addEventListener('keyup', ()=> {
    count.textContent = textarea.value.length
})