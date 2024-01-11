// const add = document.querySelector('.add');
// const ul = document.querySelector('.ul');

// let counter = 0;

// const generateListItem = val => {
//     const li = document.createElement('li');
//     const div = document.createElement('div');
//     li.classList.add(`li-${counter++}`);
//     li.innerHTML = `${val}`;
//     ul.appendChild(li);
//     div.innerHTML = `<input type="checkbox" class="input-1"/></button> <button class="btn-1" onclick="Delete(this)"></button>`;
//     li.appendChild(div);
// }

// add.addEventListener('click', () => {
//     const input = document.querySelector('input');
//     generateListItem (input.value);

// })


// function Delete(btn) {
//     const listItem = btn.closest('li');
//     if (listItem) {
//         ul.removeChild(listItem); // Remove the found 'li' element
//     }
// }

// setInterval(() => {
//     document.getElementById('time').innerText = new Date().toLocaleTimeString();
//     document.getElementById('date').innerText = new Date().toLocaleDateString();
// }, 1000);






const add = document.querySelector('.add');
const ul = document.querySelector('.ul');

let counter = 0;

let list = [];

const generateListItem = (val, dateTime) => {
    const li = document.createElement('li');
    li.classList.add(`li-${counter++}`);
    li.innerHTML = `${val}`;
    ul.appendChild(li);

    const div = document.createElement('div');
    div.innerHTML = `<input type="checkbox"  onchange:"check(${i})" class="input-1"/> <button class="btn-1" onclick="Delete(this)"></button>`;
    li.appendChild(div);

    const timestampDiv = document.createElement('div');
    timestampDiv.classList.add('timestamp');
    timestampDiv.innerText = dateTime;
    ul.appendChild(timestampDiv); // Append timestamp underneath the li
}

add.addEventListener('click', () => {
    let { value } = document.querySelector('.text-box');
    const date = new Date();
    list.push({ value, date, isChecked: false });

    // document.querySelector('.text-box').value= '';
    updateStorage(list);

    const input = document.querySelector('input');
    const options = { weekday: 'long', hour: 'numeric', minute: 'numeric' };
    const dateTime = new Date().toLocaleString('en-US', options); // Get day and time
    generateListItem(input.value, dateTime);
})

function Delete(btn) {
    const listItem = btn.closest('li');
    if (listItem) {
        const timestamp = listItem.nextElementSibling; 
        if (timestamp.classList.contains('timestamp')) {
            ul.removeChild(timestamp); 
        }
        ul.removeChild(listItem); 
    }
}

setInterval(() => {
    document.getElementById('time').innerText = new Date().toLocaleTimeString();
    document.getElementById('date').innerText = new Date().toLocaleDateString();
}, 1000);

function updateStorage(list) {
    localStorage.setItem('data', JSON.stringify(list));
}

function check(i) {
    list[i].isChecked = !list[i].isChecked;

    console.log(list[i].isChecked);
}
