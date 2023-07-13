const input = document.querySelector('#to-do');
const btnAdd = document.querySelector('.btn-add');
const downContainer = document.querySelector('.down-container');
const noTask = document.querySelector('.no-task');

let newLi;
let btnCorrect;

const ulList = document.querySelector('.task');

const createToolsArea = () => {
	const toolsPanel = document.createElement('div');
	toolsPanel.classList.add('tools-area');

	btnCorrect = document.createElement('button');
	btnCorrect.innerHTML = '<i class="fa-solid fa-check" style="color: #05c736;"></i>';
	btnCorrect.classList.add('complete');

	const btnDelete = document.createElement('button');
	btnDelete.innerHTML = '<i class="fa-solid fa-x" style="color: #e10e0e;"></i>';
	btnDelete.classList.add('delete');

	const btnEdit = document.createElement('button');
	btnEdit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
	btnEdit.classList.add('edit');

	toolsPanel.append(btnCorrect, btnDelete, btnEdit);
	newLi.append(toolsPanel);
};

const createTask = () => {
	let inputValue = input.value;
	newLi = document.createElement('li');
	newLi.textContent = `${inputValue}`;
	ulList.append(newLi);
	noTask.remove();

	createToolsArea();
};

const checkClick = e => {
	if (e.target.matches('.complete')) {
		e.target.closest('li').classList.toggle('completed');
	} else if (e.target.matches('.delete')) {
		console.log('delete');
	} else if (e.target.matches('.edit')) {
		console.log('edit');
	}
};

btnAdd.addEventListener('click', createTask);

ulList.addEventListener('click', checkClick);
