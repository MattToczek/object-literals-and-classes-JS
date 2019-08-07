const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const lis = listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

// firstListItem.style.backgroundColor = 'lightSkyBlue';
// lastListItem.style.backgroundColor = 'grey';

// function not working - allLiButtons is not a function
// function displayListItemButtons(li){
//   let allLiButtons = li.querySelectorAll('button');
//   for (var i = 0; i < allLiButtons.length; i++) {
//     allLiButtons[i].style.display = 'block' ;
//   }
// }

console.log(lis.length);

function buttonCheck(lis){
  for (var i = 0; i < lis.length; i++) {
    if (lis[i] == listUl.firstElementChild) {
      lis[i].firstElementChild.style.display = "none";
      lis[i].children[1].style.marginLeft = 'auto';
    }
    else if (lis[i] == listUl.lastElementChild) {
      lis[i].lastElementChild.style.display = 'none';
    }
    else{
      for (var i = 0; i < lis[i].children.length; i++) {
        lis[i].children[i].display = 'block';
      }
    }
  }
}

function attachListItemButtons(li) {
//   if (li == listUl.firstElementChild){
//   let up = document.createElement('button');
//   up.className = 'up';
//   up.textContent = 'Up';
//   up.style.display = 'none';
//   li.appendChild(up);
// } else {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'Up';
  li.appendChild(up);
  // }


//   if (li == listUl.lastElementChild){
//   let down = document.createElement('button');
//   down.className = 'down';
//   down.textContent = 'Down';
//   down.style.display = 'none';
//   li.appendChild(down);
// }else {
  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'Down';
  li.appendChild(down);
// }

  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove);
}

for (let i = 0; i < lis.length; i += 1) {
  attachListItemButtons(lis[i]);
}

buttonCheck(lis);

// for (var i = 0; i < lis.length; i++){
// console.log(lis[i].children.);
// }

listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
      buttonCheck(lis);
    }
    if (event.target.className == 'up') {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
        buttonCheck(lis);
      }
      if (li == listUl.firstElementChild){
        li.firstElementChild.style.display = "none";
        li.children[1].style.marginLeft = 'auto';
      } else {
        li.firstElementChild.style.display = "block";
        li.children[1].style.display = "block";
        li.children[1].style.marginLeft = '0.5em';
      }
    }
    if (event.target.className == 'down') {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
        buttonCheck(lis);
      }
      if (li == listUl.lastElementChild){
        li.children[1].style.display = "none";
        li.children[1].style.marginLeft = 'auto';
      } else {
        li.children[1].style.display = "block";
        li.children[1].style.marginLeft = '0.5em';
        li.children[0].style.marginLeft = 'auto';
        li.firstElementChild.style.display = "block";
      }
    }
  }
});

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';
    listDiv.style.display = 'none';
  }
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  attachListItemButtons(li);
  addItemInput.value = '';
});

// function -> if li=last hide down else if li = first hide up else - normal attach
