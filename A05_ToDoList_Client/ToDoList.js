"use strict";
var L05_ToDoList;
(function (L05_ToDoList) {
    // Load-Listener is installed -> when page loads function handleLoad is triggered
    window.addEventListener("load", handleLoad);
    // Function handleLoad calls Function generateContent and grabs Button from DOM
    async function handleLoad(_event) {
        console.log("handeLoad triggered");
        let response = await fetch("https://penelopejulia.github.io/EIA2_SoSe23/A05_ToDoList_Client/Data.json");
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
        await fetch("https://penelopejulia.github.io/EIA2_SoSe23/A05_ToDoList_Client/ToDoList.html" + query.toString());
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
            let data = _data[tasks];
            // For-Loop -> Counting up from 0 in Array
            for (let index = 0; index < data.length; index++) {
                // Attributes from Array assigned to according Variables
                // 
                name = data[index].name;
                task = data[index].task;
                comment = data[index].comment;
                date = data[index].date;
                time = data[index].time;
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
        nameInput.value = "";
        taskInput.value = "";
        commentInput.value = "";
        dateInput.value = "";
        timeInput.value = "";
    }
    function addInput(_data) {
        console.log("Add Item");
        // Declare new Div locally -> will contain all elements with value from User-Input
        let newTaskDiv = document.createElement("div");
        // Give newTaskDiv a Class for CSS
        newTaskDiv.classList.add("newTaskDiv");
        let label = document.createElement("label");
        let date = document.createElement("p");
        // Create new Icon -> Delete-Icon
        let deleteIcon = document.createElement("i");
        // Give it a class for CSS
        deleteIcon.className = "fa-solid fa-x";
        // Append deleteIcon to newTaskDiv
        newTaskDiv.append(deleteIcon);
        // Install an addEventListener on Delete-icon 
        // When clicked function deleteTask is triggered
        deleteIcon.addEventListener("click", deleteTask);
        function deleteTask(_event) {
            list.removeChild(newTaskDiv);
        }
        ;
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
        label.innerHTML += _data.name + " " + _data.task + " " + _data.comment + " " + _data.date + " " + _data.time + " ";
        newTaskDiv.appendChild(statusList);
        newTaskDiv.appendChild(deleteIcon);
        newTaskDiv.appendChild(date);
        newTaskDiv.appendChild(label);
        let list = document.querySelector(".list");
        list.appendChild(newTaskDiv);
    }
})(L05_ToDoList || (L05_ToDoList = {}));
//# sourceMappingURL=ToDoList.js.map