
    // JavaScript code for todo list functionality

    // Function to generate unique ID for each todo item
    function generateUUID() {
      let d = new Date().getTime();
      if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now();
      }
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
    }

    // Function to create a new todo item
    function createTodoItem(id, title) {
      const todoItem = document.createElement('div');
      todoItem.classList.add('col');

      const card = document.createElement('div');
      card.classList.add('card');
      card.classList.add('animate-fade');

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const checkboxDiv = document.createElement('div');
      checkboxDiv.classList.add('form-check');

      const checkboxInput = document.createElement('input');
      checkboxInput.classList.add('form-check-input');
      checkboxInput.type = 'checkbox';
      checkboxInput.value = '';
      checkboxInput.id = `flexCheckChecked${id}`;
      checkboxInput.setAttribute('aria-label', '...');

      const titleElement = document.createElement('p');
      titleElement.classList.add('lead');
      titleElement.classList.add('fw-normal');
      titleElement.classList.add('mb-0');
      titleElement.textContent = title;

      const buttonDiv = document.createElement('div');
      buttonDiv.classList.add('d-flex');
      buttonDiv.classList.add('flex-row');
      buttonDiv.classList.add('justify-content-end');
      buttonDiv.classList.add('mb-1');

      const editButton = document.createElement('a');
      editButton.href = '#!';
      editButton.classList.add('text-info');
      editButton.dataset.mdbToggle = 'tooltip';
      editButton.title = 'Edit todo';

      const editIcon = document.createElement('i');
      editIcon.classList.add('fas');
      editIcon.classList.add('fa-pencil-alt');
      editIcon.classList.add('me-1');

      const deleteButton = document.createElement('a');
      deleteButton.href = '#!';
      deleteButton.classList.add('text-danger');
      deleteButton.classList.add('ms-2');
      deleteButton.dataset.mdbToggle = 'tooltip';
      deleteButton.title = 'Delete todo';

      const deleteIcon = document.createElement('i');
      deleteIcon.classList.add('fas');
      deleteIcon.classList.add('fa-trash-alt');

      editButton.appendChild(editIcon);
      deleteButton.appendChild(deleteIcon);

      buttonDiv.appendChild(editButton);
      buttonDiv.appendChild(deleteButton);

      checkboxDiv.appendChild(checkboxInput);
      checkboxDiv.appendChild(titleElement);

      cardBody.appendChild(checkboxDiv);
      cardBody.appendChild(buttonDiv);

      card.appendChild(cardBody);

      todoItem.appendChild(card);

      return todoItem;
    }

    // Function to add a new todo item to the list
    function addTodoItem(title) {
      const todoList = document.getElementById('todoList');
      const id = generateUUID();
      const todoItem = createTodoItem(id, title);

      todoList.appendChild(todoItem);
    }

    // Function to remove a todo item from the list
    function removeTodoItem(todoItem) {
      const todoList = document.getElementById('todoList');
      todoList.removeChild(todoItem);
    }

    // Function to handle the click event of the "Add" button
    function handleAddButtonClick(e) {
      e.preventDefault();
      const titleInput = document.getElementById('exampleFormControlInput1');
      const title = titleInput.value.trim();

      if (title !== '') {
        addTodoItem(title);
        titleInput.value = '';
      }
    }

    // Function to handle the click event of the "Edit" button
    function handleEditButtonClick(e) {
      e.preventDefault();
      const todoItem = e.target.closest('.col');
      const titleElement = todoItem.querySelector('.lead');

      const newTitle = prompt('Enter the new title:', titleElement.textContent.trim());
      if (newTitle !== null) {
        titleElement.textContent = newTitle;
      }
    }

    // Function to handle the click event of the "Delete" button
    function handleDeleteButtonClick(e) {
      e.preventDefault();
      const todoItem = e.target.closest('.col');
      removeTodoItem(todoItem);
    }

    // Add event listeners
    const addButton = document.getElementById('add');
    addButton.addEventListener('click', handleAddButtonClick);

    document.addEventListener('click', function (e) {
      if (e.target.matches('.fa-pencil-alt')) {
        handleEditButtonClick(e);
      } else if (e.target.matches('.fa-trash-alt')) {
        handleDeleteButtonClick(e);
      }
    });

