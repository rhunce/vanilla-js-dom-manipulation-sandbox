import "./styles.css";
document.getElementById("app").innerHTML = `
<h1 class="title" id="title">Title 1</h1>
<h1 class="title" id="title">Title 2</h1>
<h1 class="title" id="title">Title 3</h1>
<br>
<div id='test-space'>TEST SPACE</div>
<br>
<br>
<div class='divs' id='div-1'>Div 1</div>
<div class='divs' id='div-2'>Div 2</div>
<div class='divs' id='div-3'>Div 3</div>
<div class='divs' id='div-4'>Div 4</div>
<div class='divs' id='div-5'>Div 5</div>
<p class='paras' id='para-1'>
  Para 1
  <section>1</section>
  <section>2</section>
  <section>3</section>
  <section>4</section>
</p>
<p class='paras' id='para-2'>Para 2</p>
<p class='paras' id='para-3'>Para 3</p>
<input type='submit' value='CLICK ME' />
<div class='container'>
  <h2>Items</h2>
  <ul id='items'>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
  </ul>
  <span></span>
</div>
<button class='btn' id='button'>Click Here</button>
<div id='output'></div>
<br>
<br>
<div id='box' style='width: 400px; height: 200px; background: #c5c5c5'></div>
<br>
<input type='text'></input>
<div id='output-2'></div>
<br>
<br>
<select>
  <option value='1'>1</option>
  <option value='2'>2</option>
  <option value='3'>3</option>
  <option value='4'>4</option>
  <option value='5'>5</option>
</select>
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
  <input type='submit' value='SUBMIT!' />
</form>
`;
// select.insertBefore( '<option value="777">777</option>', document.querySelectorAll('option')[0])

// document.getElementsByClassName('title')[0].innerHTML = 'Hey Man1'
// document.getElementsByClassName('title')[0].innerHTML = 'Hey Man2'
// document.getElementsByClassName('title')[0].textContent = 'Hey Man3'

// const test = document.getElementsByClassName('title')
// document.getElementById('test-space').innerText = test;
// console.log('test: ', test)
// for (let i = 0; i < test.length; i++) {
//   test[i].innerHTML = '<h4>Yo!</h4>';
// }

// console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype;
// console.log(document.head);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.all);
// console.log(document.images);

// Get Element By ID
// const myDiv1 = document.getElementById("div-1");
// console.log(myDiv1);
// myDiv1.textContent = 'XXXXX'
// myDiv1.innerText = 'YYYYY' // pays attention to styling
// myDiv1.style.borderBottom = 'solid 3px black';

// Get Element By Class Name
// const items = document.getElementsByClassName('divs')
// console.log(items);
// console.log(items[2]);
// items[2].textContent = 'words words words'
// items[2].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'yellow';
// for (let i = 0; i < items.length; i++) {
//   items[i].style.background = 'gray'
// }

// Get Element By Tag Name
// const tags = document.getElementsByTagName('p');
// console.log(tags);

// Query Selector
// const p1 = document.querySelector('#para-1');
// console.log(p1);
// const p2 = document.querySelector(".paras");
// console.log(p2);
// const submitButton = document.querySelector('input[type="submit"]');
// submitButton.value = "CLICKITTY-ROO";
// const lastPara = document.querySelector('p:last-child');
// const secondPara = document.querySelector('p:nth-child(odd)');
// console.log(lastPara);
// console.log(secondPara);

// Query Selector All
// const divs = document.querySelectorAll('div');
// console.log(divs);

// const odd = document.querySelectorAll('div:nth-child(odd)');
// console.log(odd);

// Traversing the DOM
// const itemList = document.querySelector('#items');

// parent node
// console.log(itemList);
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'gray';

// parent element
// console.log(itemList.parentElement);
// itemList.parentNode.style.backgroundColor = 'yellow';

// child nodes
// console.log(itemList.childNodes);
// console.log(itemList.children);

// first child
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// itemList.firstElementChild.textContent = 'HEYOOO!'

// next sibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// try {
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(data => {
//     const targetElement = document.getElementById('test-space');
//     for (let i = 0; i < data.length; i++) {
//       targetElement.innerHTML += (`<div>${data[i].name}</div>`)
//     }
//   })
// } catch (err) {
//   console.error(err);
// }

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(data => {
//     const targetElement = document.getElementById('test-space');
//     for (let i = 0; i < data.length; i++) {
//       targetElement.innerHTML += (`<div>${data[i].name}</div>`)
//     }
//   })

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(data => {
//     const targetElement = document.getElementById('test-space');
//     for (let i = 0; i < data.length; i++) {
//       targetElement.insertAdjacentHTML('beforeend', `<div>${data[i].name}</div>`);
//     }
//   })

// previous sibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);

// create element
// const newDiv = document.createElement('div');
// newDiv.className = 'hello';
// newDiv.id = 'hello1';
// newDiv.setAttribute('title', 'hello-div');

// const newDivText = document.createTextNode('yo son!');
// newDiv.appendChild(newDivText);

// newDiv.innerText = 'yo son!';

// console.log(newDiv);

// const container = document.querySelector('.container');
// const ul = document.querySelector('ul');
// container.insertBefore(newDiv, ul);

// const container = document.getElementsByClassName('container')[0];
// const h2 = document.getElementsByTagName('h2')[0]
// // const container = document.querySelector('.container');
// // const h2 = document.querySelector('h2')
// console.log(container)
// console.log(h2)

// let newNode = document.createElement('myPara');
// newNode.innerText = 'YO MAN'

// container.insertBefore(newNode, h2.nextSibling)

// EVENTS
// function buttonClick(e) {
//   console.log('Button clicked!');
//   // console.log('e: ', e);
//   const output = document.getElementById('output');
//   output.innerHTML = `<h4>${e.target.id}</h4>`;
//   console.log(e.type);
//   console.log(e.clientX);
//   console.log(e.clientY);
//   console.log(e.offsetX);
//   console.log(e.offsetY);
//   console.log(e.shiftKey); // hold down shift key when clicking
// };
// document.getElementById('button').addEventListener('click', buttonClick);

// Other Event Listeners
const button = document.getElementById("button");
const box = document.getElementById("box");
const output = document.getElementById("output-2");
const selectBox = document.querySelector("select");
const form = document.querySelector("form");
const inputBox = document.querySelector('input[type="text"]');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mouseup', runEvent);
// button.addEventListener('mousedown', runEvent);
// box.addEventListener('mouseenter', runEvent); // only fires when going in parent element
// box.addEventListener('mouseleave', runEvent); // similar to above
// box.addEventListener('mouseover', runEvent); // fires off when goes over parent and any children elements
// box.addEventListener('mouseout', runEvent); // similar to above
// box.addEventListener('mousemove', runEvent);

// inputBox.addEventListener('keydown', runEvent);
// inputBox.addEventListener('keyup', runEvent);
// inputBox.addEventListener('keypress', runEvent);
// inputBox.addEventListener('focus', runEvent);
// inputBox.addEventListener('blur', runEvent);
// inputBox.addEventListener('cut', runEvent);
// inputBox.addEventListener('paste', runEvent);
// inputBox.addEventListener('input', runEvent);
// selectBox.addEventListener("change", runEvent);
// selectBox.addEventListener("input", runEvent);

let fNameInput = document.getElementById("fname");
let lNameInput = document.getElementById("lname");
form.addEventListener("submit", logInputInfo);

// function runEvent(e) {
//   e.preventDefault();
//   console.log("EVENT TYPE: ", e.type);
//   // console.log('X-COORD: ', e.offsetX, 'Y-COORD: ', e.offsetY);
//   // let outputContent = `<h3>MouseX: ${e.offsetX}</h3><h3>MouseY: ${e.offsetY}</h3>`;
//   // output.innerHTML = outputContent;
//   // box.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;

//   console.log(e.target.value);
//   output.innerHTML = `<h3>${e.target.value}</h3>`;
// }

function logInputInfo(e) {
  e.preventDefault();
  console.log(fNameInput.value);
  console.log(lNameInput.value);
  fNameInput.value = "";
  lNameInput.value = "";
  return "Done";
}
