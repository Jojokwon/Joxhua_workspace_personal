const form =document.querySelector('form');
const input = document.querySelector('input'); //querySelector css에서 변수를 선택하는 수행?문
const ul = document.querySelector('ul');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    

    if (input.value !== ''){
        const li = document.createElement('li');
        li.innerText = input.value;
        ul.appendChild(li);
        input.value = '';

    }
})