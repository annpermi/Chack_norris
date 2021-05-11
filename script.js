const button = document.querySelector('.jokeBtn');
const text = document.querySelector('.jokeText');
const name = document.querySelector('#name');
const lastName = document.querySelector('#lastName');
const image = document.querySelector('#image');

button.addEventListener('click', ()=>{
    renderData()
    image.classList.add("apply-shake");
});

image.addEventListener("animationend", () => {
    image.classList.remove("apply-shake");
});

async function renderData(){
    //ternary operator
    // const first = name.value==='' ? 'Chuck' : name.value;
    // const last = lastName.value==='' ? 'Norris' : lastName.value;
    //with or statement 
    const first = name.value || 'Chuck';
    const last = lastName.value || 'Norris';
    const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${first}&lastName=${last}`)
    const data = await response.json();
    text.innerHTML = data.value.joke;
    //  .then(response=>response.json())
    // .then(data=>{
    //      text.innerHTML = data.value.joke;
    // })
}


// button.addEventListener('click', ()=>{
//     if(name.value==='' && lastName.value===''){
//         renderData('Chuck', 'Norris')
//     } else if(name.value==='' && lastName.value!==''){
//         renderData('Chuck', lastName.value)
//     } else if(name.value!=='' && lastName.value===''){
//         renderData(name.value, 'Norris')
//     } else{
//         renderData(name.value, lastName.value)
//     }
// });
// function renderData(first, last){
//     fetch(`http://api.icndb.com/jokes/random?firstName=${first}&lastName=${last}`)
//     .then(response=>response.json())
//     .then(data=>{
//          text.innerHTML = data.value.joke;
//     })
// }