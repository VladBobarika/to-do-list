'use strict';

const root = document.querySelector('#root');

const todos = [
  {
    title: 'Уборка',
    desc: 'Убраться в квартире',
    time: '19:00',
    label: 'Нажми на меня'
  },
  {
    title: 'Уборка',
    desc: 'Убраться в квартире',
    time: '19:00',
    label: 'Нажми на меня'
  },
  {
    title: 'Уборка',
    desc: 'Убраться в квартире',
    time: '19:00',
    label: 'Нажми на меня'
  }
]

function createForm() {
    const containerForm = document.createElement('form');
    const form = document.createElement('form');
    const formLabel = document.createElement('label');
    const formInput = document.createElement('input');
    const formButton = document.createElement('button');

    containerForm.className = 'sticky top-0 flex justify-between w-1/2 m-auto mb-16 p-6 bg-blue-500';
    form.className = '';
    formLabel.className = 'text-xl';
    formInput.className = 'h-10 p-2 bg-blue-100';
    formButton.className = 'w-24 h-10 bg-blue-700';

    formLabel.textContent = 'Напиши себе задачу';
    formButton.textContent = 'Добавить';

    containerForm.append(form, formLabel, formInput, formButton);
    root.append(containerForm)
  }

  createForm();

function createCard(obj) {
  const card = document.createElement('div');
  const cardTitle = document.createElement('h2');
  const cardDesc = document.createElement('p');
  const cardTime = document.createElement('p');
  const cardCheckbox = document.createElement('div');
  const cardCheckboxLabel = document.createElement('div');
  const cardCheckboxInput = document.createElement('input');
  cardCheckboxInput.setAttribute('type', 'checkbox');

  root.className = 'relative flex flex-col justify-between max-w-7xl min-h-screen m-auto p-10 pt-0 bg-blue-100';
  card.className = 'flex flex-col w-64 h-72 m-auto p-5 mb-10 border-2 bg-gray-100 hover:bg-gray-200 shadow-2xl';
  cardTitle.className = 'text-3xl font-bold mb-2';
  cardDesc.className = 'text-xl';
  cardTime.className = 'text-xl flex-1 italic';
  cardCheckbox.className = 'flex-shrink inline-flex items-center mt-3 h-10';
  cardCheckboxInput.className = 'form-checkbox h-5 w-5 text-gray-600';
  cardCheckboxLabel.className = 'ml-2 text-gray-700';

  cardTitle.textContent = obj.title;
  cardDesc.textContent = obj.desc;
  cardTime.textContent = obj.time;
  cardCheckboxLabel.textContent = obj.label;

  cardCheckbox.append(cardCheckboxInput, cardCheckboxLabel);
  card.append(cardTitle, cardDesc, cardTime, cardCheckbox);
  root.append(card);
}

function render(model) {
    todos.forEach(obj => {
        createCard(obj);

    })
}

render(todos);


