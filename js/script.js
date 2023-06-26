const input = document.querySelector('#to-do');
const btnAdd = document.querySelector('.btn-add');
const downContainer = document.querySelector('.down-container');
const noTask = document.querySelector('.no-task');


const add = () => {

	let inputValue = input.value;

	const newParagraph = document.createElement('p');
	newParagraph.textContent = `${inputValue}`
	downContainer.append(newParagraph);
    noTask.remove()

};

btnAdd.addEventListener('click', add);
