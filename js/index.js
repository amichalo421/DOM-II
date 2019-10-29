// --------- QuerySelectors and Event's --------------

// * [ ] `click`
    const home = document.querySelectorAll('a')[0];
        console.log(home);
            home.addEventListener('click', event => {
                console.log(`Input detected ${event.target}`);   
                alert('click'); 
            });

// // * [ ] `mouseover`
    const about = document.querySelectorAll('a')[1];
    console.log(about);
        about.addEventListener('mouseover', event => {
            console.log(`Input detected for about`);   
            alert('mouseover'); 
        });

// // * [ ] `keydown`
    const blog = document.querySelectorAll('a')[2];
    console.log(blog);
        blog.addEventListener('keydown', event => {
            console.log(`Input detected for keydown ${event.target}`);   
            alert('keydown'); 
        });

// // * [ ] `wheel`
    const contact = document.querySelectorAll('a')[3];
        console.log(contact);
            contact.addEventListener('wheel', event => {
                console.log(`Input detected for ${event.target}`);   
                alert('wheel'); 
            });

// // * [ ] `drag / drop`
//     const create = document.querySelector('.form-submit');
//     console.log(navLink);
//         firstName.addEventListener('drag / drop', (e) => {
//             console.log(e.target.value);
//             alert('Hello!');
//         });

// // * [ ] `load`
//     const button = document.querySelector('button');
//     console.log(navLink);
//         firstName.addEventListener('load', (e) => {
//             console.log(e.target.value);
//             alert('Hello!');
//         });
    
// // * [ ] `focus`
//     const button = document.querySelector('button');
//     console.log(navLink);
//         firstName.addEventListener('focus', (e) => {
//             console.log(e.target.value);
//             alert('Hello!');
//         });

// // * [ ] `resize`
//     const button = document.querySelector('button');
//     console.log(navLink);
//         firstName.addEventListener('resize', (e) => {
//             console.log(e.target.value);
//             alert('Hello!');
//         });

// // * [ ] `scroll`
//     const funBus = document.querySelectorAll('img')[0];
        funBus.addEventListener('dblclick', event => {
            console.log(`Input detected ${event.target}`);   
            alert('dblclick the secret funbus'); 
        });

// // * [ ] `select`
//     const button = document.querySelector('button');
//     console.log(navLink);
//         firstName.addEventListener('select', (e) => {
//             console.log(e.target.value);
//             alert('Hello!');
//         });

// // * [ ] `dblclick
    const funBus = document.querySelectorAll('img')[0];
        funBus.addEventListener('dblclick', event => {
            console.log(`Input detected ${event.target}`);   
            alert('dblclick the secret funbus'); 
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

// const button = document.querySelector(".lambda-button").addEventListener('click', (event) => {
// 	console.log(event);
// 	const rand = Math.floor(Math.random() * 100);
// ​
// 	// Easter Egg :)
// 	if (rand === 42 || rand === 31) {
// 		setInterval(() => {
// 			document.body.style.backgroundColor = getRandomColor();
// 		}, 100);
// 	}
// });
// ​
// getRandomColor = () => {
// 	var letters = '0123456789ABCDEF';
// 	var color = '#';
// 	for (var i = 0; i < 6; i++) {
// 		color += letters[Math.floor(Math.random() * 16)];
// 	}
// 	return color;
// }

//----LAST NAME INPUT BOX FROM LECTURE

// const lastName = document.getElementsByName('lastname')[0];
// lastName.addEventListener('keydown', event=>{
//     console.log(`Input detected ${event.key}`);    
// });

// const lastNameInput = document.querySelector('input[name="lastname"]');
// ​
// lastNameInput.addEventListener('keydown', (event) => {
// 	console.log(`Input detected keypress: ${event.key}`);
// });