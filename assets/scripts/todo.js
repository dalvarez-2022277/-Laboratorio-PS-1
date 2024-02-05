let tasks = [];

function addTask() {
    const taskInput = document.getElementById('input-name');
    const priorityInput = document.getElementById('input-priority');
    const taskText = taskInput.value;
    const taskPriority = priorityInput.value;

    if (taskText.trim() === "" || taskPriority.trim() === "") {
        alert("Por favor, ingrese una tarea y prioridad válidas.");
        return;
    }

    const task = {
        text: taskText,
        priority: taskPriority
    };

    tasks.push(task); 
    updateTaskList();
    clearForm();
}

function updateTaskList() {
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = ''; 
    tasks.sort((a, b) => a.priority - b.priority);
    tasks.forEach((task, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${task.text}</td><td>${task.priority}</td><td>
            <button class="btn btn-warning btn-sm" onclick="editTask(${index})">Editar</button>
            <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">Eliminar</button>
        </td>`;
        tbody.appendChild(tr);
    });
}

function editTask(index) {
    const newTaskText = prompt('Editar tarea:', tasks[index].text);
    const newTaskPriority = prompt('Editar prioridad:', tasks[index].priority);

    if (newTaskText !== null && newTaskPriority !== null) {
        tasks[index].text = newTaskText;
        tasks[index].priority = newTaskPriority;
        updateTaskList();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}

function clearForm() {
    document.getElementById('input-name').value = '';
    document.getElementById('input-priority').value = '';
}
