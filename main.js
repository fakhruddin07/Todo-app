let form = document.getElementById("form");
let input = document.getElementById("input")
let msg = document.getElementById("msg");
let date = document.getElementById("date");
let textarea = document.getElementById("textarea");
let tasks = document.getElementById("tasks");
let showForm = document.getElementById("showForm");




form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidation();
})


let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "task title can not be blank"
        msg.style.color = "red";
    }
    else {
        msg.innerHTML = "";
        msg.style.color = "green";
        acceptData();
    }
}


let data = {};


let acceptData = () => {
    data["text"] = input.value;
    data["date"] = date.value;
    data["description"] = textarea.value;

    createTask();
}


let createTask = () => {
    tasks.innerHTML += `
    <div class="task">
        <span>${data.text}</span>
        <span>${data.date}</span>
        <p>${data.description}</p>
        <span class="options">
            <i onClick="editTask(this)" class="fa-solid fa-pen-to-square"></i>
            <i onClick="deleteTask(this)" class="fa-solid fa-trash-can"></i>
        </span>
    </div>
    `
}


let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
}


let editTask = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.previousElementSibling.remove();
}

let openForm = () => {
    showForm.style.display = 'block';
}

let closeForm = () => {
    showForm.style.display = "none"
}