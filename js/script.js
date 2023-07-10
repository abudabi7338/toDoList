const input = document.querySelector('#to-do');
const btnAdd = document.querySelector('.btn-add');
const downContainer = document.querySelector('.down-container');
const noTask = document.querySelector('.no-task');

let newLi

const ulList = document.querySelector('.task');

const createToolsArea = () => {
	 const toolsPanel = document.createElement('div');
	toolsPanel.classList.add('tools-area');

	const btnCorrect = document.createElement('button');
	btnCorrect.innerHTML = '<i class="fa-solid fa-check" style="color: #05c736;"></i>';

	const btnDelete = document.createElement('button');
	btnDelete.innerHTML = '<i class="fa-solid fa-x" style="color: #e10e0e;"></i>';

	const btnEdit = document.createElement('button');
	btnEdit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';

	toolsPanel.append(btnCorrect, btnDelete, btnEdit);
	newLi.append(toolsPanel)
};

const createTask = () => {
	let inputValue = input.value;
	newLi = document.createElement('li');
	newLi.textContent = `${inputValue}`;
	ulList.append(newLi);
	

	createToolsArea();
};

btnAdd.addEventListener('click', createTask);
