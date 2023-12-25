

// const initData = async () => {
//     try {
//         const data = await fetch('./info.json').then(response => response.json());

//         const placeholder = document.querySelector("#whole-data");
//         let out = "";

//         const { title, date, numbers, amount } = data;

//         for (let i = 0; i < title.length; i++) {
//             out += `
//                 <tr>
//                     <td>${title[i].data}</td>
//                     <td>${date[i].data}</td>
//                     <td>${numbers[i].data}</td>
//                     <td>${amount[i].data}</td>
//                     <td><div class="danger">${getStatus()}</div></td>
//                 </tr>
//             `;
//         }

//         placeholder.innerHTML = out; // Insert generated HTML into the element with ID 'whole-data'
//     } catch (error) {
//         console.error('Error fetching or parsing data:', error);
//     }
// }


// function getStatus() {
    
//     return 'Danger';
// }

// initData();



// const initData = async () => {
//     try {
//         const data = await fetch('./info.json').then(response => response.json());
//         const placeholder = document.querySelector("#whole-data");
//         let out = "";

//         for (let item of data.data) {
//             out += `
//                 <tr>
//                     <td>${item.name}</td>
//                     <td>${item.date}</td>
//                     <td>${item.title}</td>
//                     <td>${item.amount}</td>
//                     <td><div class="danger">${getStatus()}</div></td>
//                 </tr>
//             `;
//         }

//         placeholder.innerHTML = out; 
//         sort.addEventListener('click', rotateSortButton);
//     } catch (error) {
//         console.error('Error fetching or parsing data:', error);
//     }
// }

// function getStatus() {
//     return 'Danger'; 
// }

// function rotateSortButton() {
//     const sort = document.getElementById('sort');
//     sort.classList.toggle('rotate');
// }

// initData();






let ascendingOrder = true; 

const initData = async () => {
    try {
        const response = await fetch('./info.json');
        const data = await response.json();
        const sortButton = document.getElementById('sort');
        const placeholder = document.querySelector("#whole-data");

        let tableData = data.data;

        sortButton.addEventListener('click', () => {
            tableData = sortTable(tableData, 'name');
            renderTable(tableData);
            ascendingOrder = !ascendingOrder; 
            rotateSortButton();
        });

        renderTable(tableData);
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}

function sortTable(data, column) {
    const sortedData = [...data].sort((a, b) => {
        const nameA = a[column].toLowerCase();
        const nameB = b[column].toLowerCase();

        if (nameA < nameB) {
            return ascendingOrder ? -1 : 1;
        }
        if (nameA > nameB) {
            return ascendingOrder ? 1 : -1;
        }
        return 0;
    });

    return sortedData;
}

function renderTable(data) {
    const placeholder = document.querySelector("#whole-data");
    let out = "";

    for (let item of data) {
        out += `
            <tr>
                <td>${item.name}</td>
                <td>${item.date}</td>
                <td>${item.title}</td>
                <td>${item.amount}</td>
                <td><div class="danger">${getStatus()}</div></td>
            </tr>
        `;
    }

    placeholder.innerHTML = out;
}

function getStatus() {
    return 'Danger';
}

function rotateSortButton() {
    const sortButton = document.getElementById('sort');
    sortButton.classList.toggle('rotate');
}

initData();
