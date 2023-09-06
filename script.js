document.addEventListener("DOMContentLoaded", function () {
    const taskList = document.getElementById("task-list");
    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");

    taskForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete">Xóa</button>
            <button class="done">Done</button>
        `;

        taskList.appendChild(taskItem);

        taskInput.value = "";

        const deleteButton = taskItem.querySelector(".delete");
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(taskItem);
        });

        const doneButton = taskItem.querySelector(".done");
        doneButton.addEventListener("click", function () {
            taskItem.classList.toggle("done");
        });
    });
});
