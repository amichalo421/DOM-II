// Your code goes here

const card = document.querySelector('.card');
const trade = document.querySelector('button');
const create = document.querySelector('.form-submit');
// console.log(trade);
// console.log(card);

card.addEventListener('dblclick', (e) => {
  e.target.style.backgroundColor = 'red';
});

trade.addEventListener('dblclick', (e) => {
  e.target.style.backgroundColor = 'blue';
  e.stopPropagation();
});

// create.addEventListener('click', (e)=> {
//   default behavior happens here
//   then your code happens
//   console.log('clicked create');
//   e.preventDefault();
// });

// card.addEventListener('click', (e)=> {
//   put whatever we want to happen on the click
//   console.log(e);
// });

// const firstName = document.querySelector('.first-name');
// console.log(firstName);
// firstName.addEventListener('mouseover', (e) => {
//   console.log(e.target.value);
//   alert('Hello!');
// });

// firstName.addEventListener('mouseenter', (e) => {
//   e.target.style.backgroundColor = 'blue';
//   e.target.style.color = 'white';
//   setTimeout(() => { 
//     alert("Hello"); 
//   }, 3000);
// });

// firstName.addEventListener('mouseleave', (e) => {
//   if (e.target.style.backgroundColor === 'white') {
//     e.target.style.backgroundColor = 'red';
//   } else {
//     e.target.style.backgroundColor = 'black';
//   }
//   e.target.style.backgroundColor = 'white';
//   e.target.style.color = 'black';
//   firstName.classList.toggle('red');
// });

// firstName.addEventListener('keypress', (e) => {
//   console.log(e);
//   console.log(e.code);
// });

// someFunc() {
//   console.log('clicked button');
// }
