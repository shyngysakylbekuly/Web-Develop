
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList")
    const taskCounter=document.getElementById("taskCounter");

    let counter=0;
    function updateCounter(){

    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.textContent = taskText;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "DELETE";
        removeBtn.classList.add("remove-btn");
        removeBtn.addEventListener("click", () => {
            taskList.removeChild(li);
            counter--;
            updateCounter();
        });

        li.appendChild(removeBtn);
        taskList.appendChild(li);
        counter++;
        updateCounter();

        taskInput.value = "";
    }

    document.querySelector("button").addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }

    });
    taskInput.addEventListener("keydown", (event) => {
        if(event.key === "Control"){
            addTask();
        }
    })
});
