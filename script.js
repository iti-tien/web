document.addEventListener("DOMContentLoaded", function () {
    const taskList = document.getElementById("task-list");
    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");

    // Lấy danh sách công việc từ Local Storage khi trang web tải lại
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Hiển thị danh sách công việc đã lưu
    savedTasks.forEach(taskText => {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete">Xóa</button>
            <button class="done">Done</button>
        `;

        taskList.appendChild(taskItem);

        const deleteButton = taskItem.querySelector(".delete");
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(taskItem);
            updateLocalStorage();
        });

        const doneButton = taskItem.querySelector(".done");
        doneButton.addEventListener("click", function () {
            taskItem.classList.toggle("done");
            updateLocalStorage();
        });
    });

    // Xử lý sự kiện khi người dùng thêm công việc
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
            updateLocalStorage();
        });

        const doneButton = taskItem.querySelector(".done");
        doneButton.addEventListener("click", function () {
            taskItem.classList.toggle("done");
            updateLocalStorage();
        });

        // Lưu công việc mới vào Local Storage
        savedTasks.push(taskText);
        updateLocalStorage();
    });

    // Hàm cập nhật Local Storage
    function updateLocalStorage() {
        localStorage.setItem("tasks", JSON.stringify(savedTasks));
    }
});
