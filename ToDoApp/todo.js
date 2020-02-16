var ul = document.getElementById('list'),
  add = document.getElementById('add')

add.onclick = () => {
  addTodo(ul);
};

function addTodo(targetUl) {
  var inputText = document.getElementById('text').value,
    li = document.createElement('li'),
    textNode = document.createTextNode(inputText + ' '),
    doneButton = document.createElement('button');
    removeButton = document.createElement('button');
    document.getElementById('text').value = '';

  if (inputText.split(' ').join('').length === 0) {
    alert('no input');
    return false;
  }

  doneButton.className = 'doneButton';
  doneButton.innerHTML = '✔';
  doneButton.setAttribute('onclick', 'completeTodo(this);');
  removeButton.className = 'removeTodo';
  removeButton.innerHTML = 'X';
  removeButton.setAttribute('onclick', 'removeTodo(this);');

  li.appendChild(textNode);
  li.appendChild(removeButton);
  li.appendChild(doneButton);

  targetUl.appendChild(li);
}

function completeTodo(item) {
  var parent = item.parentElement;
  var str = document.getElementById('text').value.strike();
  parent.parentElement.innerHTML = str;
}

function removeTodo(item) {
  var parent = item.parentElement;
  parent.parentElement.removeChild(parent);
}
