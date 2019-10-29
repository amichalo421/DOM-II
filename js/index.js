// --------- QuerySelectors and Event's --------------

// * [ ] `mouseover`
    const firstName = document.querySelector('.first-name');
    console.log(firstName);
        firstName.addEventListener('mouseover', (e) => {
            console.log(e.target.value);
            alert('Hello!');
        });

// * [ ] `keydown`
    const navLink = document.querySelector('.nav-link');
    console.log(navLink);
        firstName.addEventListener('keydown', (e) => {
            console.log(e.target.value);
            alert('Hello!');
        });

// * [ ] `wheel`
    const button = document.querySelector('button');
    console.log(navLink);
        firstName.addEventListener('wheel', (e) => {
            console.log(e.target.value);
            alert('Hello!');
        });

// * [ ] `drag / drop`
    const create = document.querySelector('.form-submit');
    console.log(navLink);
        firstName.addEventListener('drag / drop', (e) => {
            console.log(e.target.value);
            alert('Hello!');
        });

// * [ ] `load`
    const button = document.querySelector('button');
    console.log(navLink);
        firstName.addEventListener('load', (e) => {
            console.log(e.target.value);
            alert('Hello!');
        });
    
// * [ ] `focus`
    const button = document.querySelector('button');
    console.log(navLink);
        firstName.addEventListener('focus', (e) => {
            console.log(e.target.value);
            alert('Hello!');
        });

// * [ ] `resize`
    const button = document.querySelector('button');
    console.log(navLink);
        firstName.addEventListener('resize', (e) => {
            console.log(e.target.value);
            alert('Hello!');
        });

// * [ ] `scroll`
    const button = document.querySelector('button');
    console.log(navLink);
        firstName.addEventListener('scroll', (e) => {
            console.log(e.target.value);
            alert('Hello!');
        });

// * [ ] `select`
    const button = document.querySelector('button');
    console.log(navLink);
        firstName.addEventListener('select', (e) => {
            console.log(e.target.value);
            alert('Hello!');
        });

// * [ ] `dblclick`
    const button = document.querySelector('button');
    console.log(navLink);
      trade.addEventListener('dblclick', (e) => {
        e.target.style.backgroundColor = 'blue';
        e.stopPropagation();
      });






      






// ---------- Extra Event's from Previous Cohort Lesson - ----------
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
