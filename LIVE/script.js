const initData = async () => { 
    const data = await fetch ('./data.json').then(response => response.json());
    const h1 = document.querySelector('h1')
    const descr = document.querySelector('.descr')
    

    h1.innerText = data.title;
    descr.innerHTML = data.descr;

    const ul = document.querySelector('ul')



    for(const course of data.data) {
        const li = document.createElement('li')
        li.innerText = course.title;
        ul.appendChild(li)
        console.log(course.title);        
    }
}

initData();




// const initData = async () => {
//     const data = await fetch('./data.json').then(response => response.json());
//     const h1 = document.querySelector('h1')
//     const descr = document.querySelector('.descr')

//     h1.innerText = data.title;
//     descr.innerHTML = data.descr;
    
//     const ul = document.querySelector('ul')

//     for(const course of data.data) {
//         const li = document.createElement('li')
//         li.innerText = course.title;
//         ul.appendChild(li)
//         console.log(course.title)
//     }
// }
// initData();