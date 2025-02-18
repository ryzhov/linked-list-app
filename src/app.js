import './style.css';
import { subscribe } from './form';
import { LinkedList } from './linkedList';

const linkedList = new LinkedList();

const render = list => {
  const inputField = document.getElementById('value');
  const listElement = document.getElementById('list');
  while (listElement.firstChild) listElement.removeChild(listElement.firstChild);

  list.forEach(value => {
    const listItemElement = document.createElement('li');
    listItemElement.textContent = value;
    listElement.appendChild(listItemElement);
  });

  inputField.focus();
};

document.addEventListener('DOMContentLoaded', () => {
  subscribe(({ action, value }) => {
    action === 'add' && linkedList.add(value);
    action === 'delete' && linkedList.delete(value);
    action === 'reverse' && linkedList.reverse();

    const list = linkedList.getAll();
    console.log('action =>', action, ', list => ', list);

    render(list);
  });
});
