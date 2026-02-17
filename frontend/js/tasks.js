if (!localStorage.getItem("access")) {
    window.location.href = "index.html";
}

const BASE = "http://127.0.0.1:8000/api/v1/tasks/";

async function loadTasks() {
    const res = await fetch(BASE, {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("access")
        }
    });
    const tasks = await res.json();
    taskList.innerHTML = "";
    tasks.forEach(t => {
        const li = document.createElement("li");
        li.className = "task-item";
        li.innerHTML = `
        <span>${t.title} - ${t.status}</span>
        <button onclick="deleteTask(${t.id})">Delete</button>
    `;
        taskList.appendChild(li);
    });
}

async function createTask() {
    await fetch(BASE, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("access")
        },
        body: JSON.stringify({
            title: title.value,
            description: description.value
        })
    });
    loadTasks();
}

async function deleteTask(id) {
    await fetch(BASE + id + "/", {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("access")
        }
    });
    loadTasks();
}

loadTasks();
