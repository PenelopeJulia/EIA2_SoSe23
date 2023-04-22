"use strict";
var L04_ToDoList;
(function (L04_ToDoList) {
    // Load-Listener is installed -> when page loads function handleLoad is triggered
    window.addEventListener("load", handleLoad);
    // Function handleLoad calls Function generateContent and grabs Button from DOM
    async function handleLoad(_event) {
        console.log("handeLoad triggered");
        let response = await fetch("");
        let offer = await response.text();
        let data = JSON.parse(offer);
        // Accesing Button from DOM with ID
        // <HTMLBodyElement> -> Forces TS to accept Button as HTMLElement -> resolve Error
        let button = document.querySelector("#addTaskButton");
        // Event-Listener gets installed on Button, if Button is clicked by User Function addTask gets triggered
        button.addEventListener("click", addTask);
        button.addEventListener("click", sendTask);
        // Function generateContent loads Data
        generateContent(data);
    }
    async function sendTask(_event) {
        console.log("Input sent");
        let form = document.querySelector("form");
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        await fetch("" + query.toString());
        alert("Input received");
    }
    // Function generate Content loads Data stored in Array in Data.ts
    // Data from User is caught and pushed into Array Task[] 
    // New Elements are created, Data from Task[] is pushed into new Elements 
    // New Elements are pushed into HTML for User to see on page
    function generateContent(_data) {
        // Finding Task-Characteristics ->  Predefining them for me to use in this namespace
        let name;
        let task;
        let comment;
        let date;
        let time;
        for (let tasks in _data) {
            // For-Loop -> Counting up from 0 in Array
            for (let index = 0; index < L04_ToDoList.data.length; index++) {
                // Attributes from Array assigned to according Variables
                // 
                name = L04_ToDoList.data[index].name;
                task = L04_ToDoList.data[index].task;
                comment = L04_ToDoList.data[index].comment;
                date = L04_ToDoList.data[index].date;
                time = L04_ToDoList.data[index].time;
                let createDiv = document.createElement("div");
                createDiv.innerHTML = name + " " + task + " " + comment + " " + date + " " + time + " ";
                createDiv.classList.add("dataList");
                document.body.appendChild(createDiv);
            }
        }
    }
    // Function addTask 
    function addTask(_event) {
        // Declare variables and get input and textarea by ID from DOM
        let nameInput = document.getElementById("name");
        let taskInput = document.getElementById("task");
        let dateInput = document.getElementById("date");
        let timeInput = document.getElementById("time");
        let commentInput = document.getElementById("comment");
        let i = {
            name: nameInput.value,
            task: taskInput.value,
            comment: commentInput.value,
            date: dateInput.value,
            time: timeInput.value,
        };
        addInput(i);
        console.log(nameInput.value);
        console.log(taskInput.value);
        console.log(commentInput.value);
        console.log(dateInput.value);
        console.log(timeInput.value);
        nameInput.value = "";
        taskInput.value = "";
        commentInput.value = "";
        dateInput.value = "";
        timeInput.value = "";
    }
    function addInput(_element) {
        console.log("Add Item");
        // Declare new Div locally -> will contain all elements with value from User-Input
        let newTaskDiv = document.createElement("div");
        // Give newTaskDiv a Class for CSS
        newTaskDiv.classList.add("newTaskDiv");
        //Create new P-Elements and assign it value from Input
        let nameNewTaskDiv = document.createElement("p");
        nameNewTaskDiv.innerHTML += _element.name;
        nameNewTaskDiv.classList.add("nameNewTaskDiv");
        let taskNewTaskDiv = document.createElement("p");
        taskNewTaskDiv.innerHTML += _element.task;
        taskNewTaskDiv.classList.add("taskNewTaskDiv");
        let commentNewTaskDiv = document.createElement("p");
        commentNewTaskDiv.innerHTML += _element.comment;
        commentNewTaskDiv.classList.add("commentNewTaskDiv");
        let dateNewTaskDiv = document.createElement("p");
        dateNewTaskDiv.innerHTML += _element.date;
        dateNewTaskDiv.classList.add("dateNewTaskDiv");
        let timeNewTaskDiv = document.createElement("p");
        timeNewTaskDiv.innerHTML += _element.time;
        timeNewTaskDiv.classList.add("timeNewTaskDiv");
        newTaskDiv.append(nameNewTaskDiv, taskNewTaskDiv, commentNewTaskDiv, dateNewTaskDiv, timeNewTaskDiv);
        // Create new Icon -> Delete-Icon
        let deleteIcon = document.createElement("i");
        // Give it a class for CSS
        deleteIcon.className = "fa-solid fa-x";
        // Append deleteIcon to newTaskDiv
        newTaskDiv.append(deleteIcon);
        // Install an addEventListener on Delete-icon 
        // When clicked function deleteTask is triggered
        deleteIcon.addEventListener("click", deleteTask);
        // Add Select-Element with three options: in progress, done and incomplete
        let statusList = document.createElement("select");
        let option1 = document.createElement("option");
        option1.text = "in progress";
        statusList.add(option1);
        let option2 = document.createElement("option");
        option2.text = "done";
        statusList.add(option2);
        let option3 = document.createElement("option");
        option3.text = "incomplete";
        statusList.add(option3);
        statusList.id = ("statusList");
        //append Select-List to newTaskDiv
        newTaskDiv.append(statusList);
        let list = document.querySelector(".list");
        list.append(newTaskDiv);
    }
    function deleteTask() {
        console.log("Deleted Task");
        this.parentElement.remove();
    }
    ;
})(L04_ToDoList || (L04_ToDoList = {}));
//# sourceMappingURL=ToDoList.js.map