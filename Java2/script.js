const add = document.querySelector('.add');
const ul = document.querySelector('.ul');

let counter = 0;

const generateListItem = val => {
    const li = document.createElement('li');
    const div = document.createElement('div');
    li.classList.add(`li-${counter++}`);
    li.innerHTML = `${val}`;
    ul.appendChild(li);
    div.innerHTML = `<input type="checkbox" class="input-1"/></button> <button class="btn-1" onclick="Delete(this)"></button>`;
    li.appendChild(div);
}

add.addEventListener('click', () => {
    const input = document.querySelector('input');
    generateListItem (input.value);

})


function Delete(btn) {
    const listItem = btn.closest('li');
    if (listItem) {
        ul.removeChild(listItem); // Remove the found 'li' element
    }
}

setInterval(() => {
    document.getElementById('time').innerText = new Date().toLocaleTimeString();
}, 1000);