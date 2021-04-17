import "./styles.css";
document.getElementById("app").innerHTML = `
<h1 class="title" id="title">Hello Vanilla!</h1>
<div class='divs' id='div-1'>AAAAA</div>
<div class='divs' id='div-2'>BBBBB</div>
<div class='divs' id='div-3'>CCCCC</div>
<div class='divs' id='div-4'>DDDDD</div>
<div class='divs' id='div-5'>EEEEE</div>
<p id='para-1'>77777</p>
<p class='paras'>88888</p>
<p class='paras'>99999</p>
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
<br>
<br>
<div id='box' style='width: 400px; height: 200px; background: #c5c5c5'></div>
<div id='output'></div>
<br>
<input type='text'></input>
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

// document.getElementsByClassName('title')[0].innerHTML = 'Hey Man1'
// document.getElementsByClassName('title')[0].innerHTML = 'Hey Man2'
// document.getElementsByClassName('title')[0].textContent = 'Hey Man3'

// console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
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
// const p2 = document.querySelector('.paras');
// console.log(p2);
// const submitButton = document.querySelector('input[type="submit"]');
// submitButton.value = 'CLICKITTY-ROO';
// const lastPara = document.querySelector('p:last-child');
// const secondPara = document.querySelector('p:nth-child(2)');
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

// console.log(newDiv);

// const container = document.querySelector('.container');
// const ul = document.querySelector('ul');
// container.insertBefore(newDiv, ul);

// EVENTS
// document.getElementById('button').addEventListener('click', buttonClick);
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

// Other Event Listeners
const button = document.getElementById("button");
const box = document.getElementById("box");
const output = document.getElementById("output");
const selectBox = document.querySelector("select");
const form = document.querySelector("form");

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);
// button.addEventListener("mouseup", runEvent);

// box.addEventListener('mouseenter', runEvent); // only fires when going in parent element
// box.addEventListener('mouseleave', runEvent); // similar to above

// box.addEventListener('mouseover', runEvent); // fires off when goes over parent and any children elements
// box.addEventListener('mouseout', runEvent); // similar to above

// box.addEventListener('mousemove', runEvent);
// box.addEventListener('mousemove', runEvent);

const inputBox = document.querySelector('input[type="text"]');
// inputBox.addEventListener('keydown', runEvent);
// inputBox.addEventListener('keyup', runEvent);
// inputBox.addEventListener('keypress', runEvent);
// inputBox.addEventListener('focus', runEvent);
// inputBox.addEventListener('blur', runEvent);
// inputBox.addEventListener('cut', runEvent);
// inputBox.addEventListener('paste', runEvent);
// inputBox.addEventListener('input', runEvent);

selectBox.addEventListener("change", runEvent);
selectBox.addEventListener("input", runEvent);

form.addEventListener("submit", runEvent);

function runEvent(e) {
  e.preventDefault();
  console.log("EVENT TYPE: ", e.type);
  // console.log('X-COORD: ', e.offsetX, 'Y-COORD: ', e.offsetY);
  // let outputContent = `<h3>MouseX: ${e.offsetX}</h3><h3>MouseY: ${e.offsetY}</h3>`;
  // output.innerHTML = outputContent;
  // box.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;

  console.log(e.target.value);
  // document.getElementById('output').innerHTML = `<h3>${e.target.value}</h3>1`;
}

// comment
