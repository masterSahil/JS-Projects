let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const form = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const editingId = document.getElementById('editing-id');
const submitText = document.getElementById('submit-text');
let currentFilter = 'all';

const saveTasks = () => localStorage.setItem('tasks', JSON.stringify(tasks));

const priorityColor = (p) => ({
    high: 'from-rose-400 to-pink-500',
    medium: 'from-amber-300 to-yellow-400',
    low: 'from-green-300 to-emerald-400'
}[p] || 'from-cyan-300 to-sky-400');

function updateProgress() {
    const completed = tasks.filter(t => t.completed).length;
    const pending = tasks.length - completed;
    const progressDiv = document.getElementById('task-progress');
    progressDiv.textContent = `Completed: ${completed} | Pending: ${pending} 🌱`;
}

function taskManagment() {
    taskList.innerHTML = '';
    const filtered = currentFilter === 'all' ? tasks : tasks.filter(t => t.priority === currentFilter);

    if (filtered.length === 0) {
        taskList.innerHTML = `<p class="text-center text-emerald-700 italic fade-in">No ${currentFilter !== 'all' ? currentFilter + ' priority' : ''} tasks found 🌱</p>`;
        updateProgress();
        return;
    }

    filtered.forEach(t => {
        const card = document.createElement('div');
        card.className = `glass p-5 rounded-xl relative overflow-hidden shadow-lg transition-all duration-300 fade-in`;
        card.innerHTML = `
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${priorityColor(t.priority)}"></div>
          <div class="flex justify-between items-center mb-2">
            <h3 class="font-bold text-xl text-emerald-900 ${t.completed ? 'line-through text-gray-500' : ''}">${t.title}</h3>
            <div class="space-x-3">
              <button onclick="editTask(${t.id})" class="text-teal-700 hover:underline text-sm">Edit</button>
              <button onclick="deleteTask(${t.id})" class="text-rose-500 hover:underline text-sm">Delete</button>
              <button onclick="toggleComplete(${t.id})" class="text-green-600 hover:underline text-sm">
                ${t.completed ? 'Undo' : 'Done'}
              </button>
            </div>
          </div>
          <p class="text-emerald-800/90 mb-3 ${t.completed ? 'line-through text-gray-500' : ''}">${t.description}</p>
          <div class="flex justify-between text-sm text-emerald-700">
            <span>📅 ${t.dueDate}</span>
            <span>${t.priority === 'high' ? '🔴' : t.priority === 'medium' ? '🟡' : '🟢'} ${t.priority}</span>
          </div>
        `;
        taskList.appendChild(card);
    });
    updateProgress();
}

function setActiveFilterButton() {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.filter-btn[onclick="filterTasks('${currentFilter}')"]`).classList.add('active');
}

function filterTasks(filter) {
    currentFilter = filter;
    setActiveFilterButton();
    taskManagment();
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const dueDate = document.getElementById('due_date').value;
    const priority = document.getElementById('priority').value;
    if (!title || !description || !dueDate || !priority) {
        alert('All fields required!');
        return;
    }

    if (editingId.value) {
        const task = tasks.find(t => t.id == editingId.value);
        task.title = title;
        task.description = description;
        task.dueDate = dueDate;
        task.priority = priority;
        editingId.value = '';
        submitText.textContent = 'Add Task';
    } else {
        tasks.push({ id: Date.now(), title, description, dueDate, priority, completed: false });
    }

    saveTasks();
    form.reset();
    taskManagment();
});

function deleteTask(id) {
    if (!confirm('Delete this task?')) return;
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
    taskManagment();
}

function editTask(id) {
    const t = tasks.find(t => t.id === id);
    document.getElementById('title').value = t.title;
    document.getElementById('description').value = t.description;
    document.getElementById('due_date').value = t.dueDate;
    document.getElementById('priority').value = t.priority;
    editingId.value = id;
    submitText.textContent = 'Update Task';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleComplete(id) {
    const task = tasks.find(t => t.id === id);
    task.completed = !task.completed;
    saveTasks();
    taskManagment();
}

taskManagment();
