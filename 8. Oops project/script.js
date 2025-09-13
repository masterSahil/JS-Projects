const tasks = [];
let activeStatus = "all";

class Task {
  constructor({ title, description = "", category = "", dueDate = null, status = "Pending" }) {
    this.id = Task.uid();
    this.title = title;
    this.description = description;
    this.category = category;
    this.dueDate = dueDate ? new Date(dueDate) : null;
    this.status = status;
  }
  static uid() { Task._id = (Task._id || 0) + 1; return Task._id; }

  getStatus() {
    if (this.status === "Completed") return "Completed";
    if (this.dueDate && this.dueDate < new Date()) return "Overdue";
    return "Pending";
  }
}

function showAlert(msg) {
  const alert = document.getElementById("alert");
  alert.classList.remove("hidden"); alert.classList.add("flex");
  document.getElementById("alertMsg").innerText = msg;
  setTimeout(() => hideAlert(), 2000);
}
const hideAlert = () => document.getElementById("alert").classList.replace("flex","hidden");

function addTask(e) {
  e.preventDefault();
  const title = val("title"), desc = val("description"), cat = val("category"), date = val("date"), status = val("status");
  if (!title || !desc || !cat || !date || !status) return showAlert("All fields required!");
  tasks.push(new Task({ title, description: desc, category: cat, dueDate: date, status }));
  ["title","description","category","date"].forEach(id => document.getElementById(id).value = "");
  showAlert("Task added!");
  renderTasks();
}
const val = id => document.getElementById(id).value;

function updateDashboard() {
  const counts = { Completed:0, Pending:0, Overdue:0 };
  tasks.forEach(t => counts[t.getStatus()]++);
  document.getElementById("totalTasks").innerText = tasks.length;
  ["Completed","Pending","Overdue"].forEach(k => document.getElementById(k.toLowerCase()+"Tasks").innerText = counts[k]);
}

function renderTasks() {
  const search = val("searchInput").toLowerCase();
  const container = document.getElementById("renderTasks");
  container.innerHTML = "";
  const filtered = tasks.filter(t => {
    const s = t.getStatus();
    return (activeStatus==="all" || s.toLowerCase()===activeStatus) &&
      [t.title,t.description,t.category].some(x => x.toLowerCase().includes(search));
  });
  if (!filtered.length) return container.innerHTML = `<div class="text-center text-gray-500 py-10">No tasks found!</div>`;
  
  filtered.forEach(t => {
    const s = t.getStatus();
    const color = s==="Completed"?"text-green-600":s==="Overdue"?"text-red-600":"text-gray-500";
    container.innerHTML += `
      <div class="flex justify-between bg-white shadow-sm p-3 rounded-md mb-2">
        <div class="w-10/12">
          <div class="text-sm text-gray-500">${t.dueDate?t.dueDate.toLocaleDateString():"-"}</div>
          <div class="font-semibold text-gray-800">${t.title}</div>
          <div class="text-sm font-medium ${color}">Status: ${s}</div>
          <div class="text-sm text-gray-600">${t.description}</div>
          <div class="text-xs text-slate-500">${t.category}</div>
        </div>
        <div class="flex items-center space-x-2">
          <div onclick="completeTask(${t.id})" class="bg-emerald-600 hover:bg-emerald-700 text-white px-2 py-1 rounded-full cursor-pointer">
            <i class="fa-solid fa-check"></i>
          </div>
          <div onclick="deleteTask(${t.id})" class="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-full cursor-pointer">
            <i class="fa-solid fa-trash"></i>
          </div>
        </div>
      </div>`;
  });
  updateDashboard();
}

function completeTask(id){ const t=tasks.find(x=>x.id===id); if(t) t.status="Completed"; renderTasks(); }
function deleteTask(id){ const i=tasks.findIndex(x=>x.id===id); if(i>-1) tasks.splice(i,1); renderTasks(); }

function changeTab(btn){
  activeStatus = btn.dataset.status;
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("border-2","border-orange-400","bg-orange-200","text-white"));
  btn.classList.add("border-2","border-orange-400","bg-orange-200","text-white");
  renderTasks();
}