"use strict";
var L04_ToDoList;
(function (L04_ToDoList) {
    // Load-Listener is installed -> when page loads function handleLoad is triggered
    window.addEventListener("load", handleLoad);
    // Function handleLoad calls Function generateContent and grabs Button from DOM
    function handleLoad(_event) {
        // Function generateContent loads Data
        generateContent(L04_ToDoList.data);
        // Accesing Button from DOM with ID
        let button = document.querySelector("#createTaskButton");
        // Event-Listener gets installed on Button, if Button is clicked by User Function addTask gets triggered
        button.addEventListener("click", addTask);
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
        // For/In-Loop -> Looking for Data in Categories
        for (let category in _data) {
            // Defining task as an Array
            // Using key: category to access array in _data
            let tasks = _data[category];
            // For-Loop -> Counting up from 0 in Array
            for (let index = 0; index < tasks.length; index++) {
                // Variables getting assigned value from Array that stores the User-Information
                name = tasks[index].name;
                task = tasks[index].task;
                comment = tasks[index].comment;
                date = tasks[index].date;
                time = tasks[index].time;
                // Creating new Div-Element
                let newTaskDiv = document.createElement("div");
                // Manipulating HTML by adding new DIV to DOM
                newTaskDiv.innerHTML = name + "" + task + "" + comment + "" + date + "" + time + "";
                newTaskDiv.classList.add("generateContent");
                document.body.appendChild(newTaskDiv);
                console.log("generate Content");
            }
        }
    }
    // Function addTask 
    function addTask(_event) {
        console.log("addTask");
        // Declare variables
        // Get input and textarea by ID from DOM
        let nameValue = document.getElementById("name");
        let taskValue = document.getElementById("task");
        let dateValue = document.getElementById("date");
        let timeValue = document.getElementById("time");
        let commentValue = document.getElementById("comment");
        // Array
        let i = {
            // Assign value to name, task, date, time and comment 
            name: nameValue.value,
            task: taskValue.value,
            date: dateValue.value,
            time: timeValue.value,
            comment: commentValue.value,
        };
        // create new "p"-Elements
        let name = document.createElement("p");
        let task = document.createElement("p");
        let comment = document.createElement("p");
        let date = document.createElement("p");
        let time = document.createElement("p");
        // Create new HTML-Element -> Edit-Icon
        let editIcon = document.createElement("i");
        editIcon.classList.add("edit");
        // Manipulate HTML through innerHTML and create specific Icon 
        editIcon.innerHTML = '<i "fa-solid fa-pen-to-square"> </i>';
        // install an addEventListener on Edit-icon 
        // When clicked function editTask is triggered
        editIcon.addEventListener("click", editTask);
        // Create new Icon -> delete-Icon
        let deleteIcon = document.createElement("i");
        deleteIcon.classList.add("delete");
        // Manipulate HTML through innerHTML and create specific Icon 
        deleteIcon.innerHTML = '<i "fa-solid fa-x>" <i/>';
        // Install an addEventListener on Delete-icon 
        // When clicked function deleteTask is triggered
        deleteIcon.addEventListener("click", deleteTask);
    }
    function editTask(_event) {
        console.log("editTask");
    }
    function deleteTask(_event) {
        console.log("deleteTask");
    }
})(L04_ToDoList || (L04_ToDoList = {}));
//# sourceMappingURL=ToDoList.js.map