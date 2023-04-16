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
        let newTask;
        let comment;
        let date;
        let time;
        // For/In-Loop -> Looking for Data in Categories
        for (let category in _data) {
            // Defining task as an Array
            // Using key: category to access array in _data
            let task = _data[category];
            // For-Loop -> Counting up from 0 in Array
            for (let index = 0; index < task.length; index++) {
                // Variables getting assigned value from Array that stores the User-Information
                name = task[index].name;
                newTask = task[index].newTask;
                comment = task[index].comment;
                date = task[index].date;
                time = task[index].time;
                // Creating new Div-Element
                let newTaskDiv = document.createElement("div");
                // Manipulating HTML by adding new DIV to DOM
                newTaskDiv.innerHTML = name + "" + newTask + "" + comment + "" + date + "" + time + "";
                newTaskDiv.classList.add("generateContent");
                document.body.appendChild(newTaskDiv);
                console.log("generate Content");
            }
        }
    }
    // Function addTask 
    function addTask(_event) {
        console.log("addTask");
        let inputValue = document.getElementById("input");
        let;
    }
    function editTask(_event) {
        console.log("editTask");
        let edit = document.querySelector("#edit");
        edit.addEventListener("click", editTask);
    }
    function deleteTask(_event) {
        console.log("deleteTask");
        // let delete: Element = document.querySelector("#delete");
        //delete.addEventListener("click", deleteTask);
    }
})(L04_ToDoList || (L04_ToDoList = {}));
//# sourceMappingURL=ToDoList.js.map