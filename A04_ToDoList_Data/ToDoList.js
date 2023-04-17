"use strict";
var L04_ToDoList;
(function (L04_ToDoList) {
    // Load-Listener is installed -> when page loads function handleLoad is triggered
    window.addEventListener("load", handleLoad);
    // Function handleLoad calls Function generateContent and grabs Button from DOM
    function handleLoad(_event) {
        console.log(L04_ToDoList.data);
        // Function generateContent loads Data
        generateContent(L04_ToDoList.data);
        // Accesing Button from DOM with ID
        // <HTMLBodyElement> -> Forces TS to accept Button as HTMLElement -> resolve Error
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
        // For-Loop -> Counting up from 0 in Array
        for (let index = 0; index < L04_ToDoList.data.length; index++) {
            // Attributes from Array assigned to according Variables
            // 
            name = L04_ToDoList.data[index].name;
            task = L04_ToDoList.data[index].task;
            comment = L04_ToDoList.data[index].comment;
            date = L04_ToDoList.data[index].date;
            time = L04_ToDoList.data[index].time;
            // Creating new Div-Element
            let exampleTaskDiv = document.createElement("div");
            let addTaskTitleDiv = document.getElementById("addTaskTitleDiv");
            // Manipulating HTML by adding new DIV to DOM
            exampleTaskDiv.innerHTML = name + "" + task + "" + comment + "" + date + "" + time + "";
            // Give newTaskDiv a Class for CSS
            exampleTaskDiv.classList.add("exampleTaskDiv");
            //append newTaskDiv to addTaskTitleDiv
            addTaskTitleDiv.appendChild(exampleTaskDiv);
            console.log("generate Content");
        }
    }
    // Function addTask 
    function addTask(_event) {
        // Declare new Div locally -> will contain all elements with value from User-Input
        let newTaskDiv = document.createElement("div");
        // Give newTaskDiv a Class for CSS
        newTaskDiv.id = ("newTaskDiv");
        let addTaskTitleDiv = document.getElementById("addTaskTitleDiv");
        let bigContainer = document.createElement("div");
        // Append bigContainer to addTaskTitleDiv so I can position it under it
        addTaskTitleDiv.appendChild(bigContainer);
        // Append newTaskDiv to addTaskTitleDiv
        bigContainer.appendChild(newTaskDiv);
        // Declare variables
        // Get input and textarea by ID from DOM
        let nameInput = document.getElementById("name");
        let taskInput = document.getElementById("task");
        let dateInput = document.getElementById("date");
        let timeInput = document.getElementById("time");
        let commentInput = document.getElementById("comment");
        // Create new "input"-Elements so one can edit task afterwards 
        //Create new Input-Element and assign it value from nameInput (#name from HTML)
        let nameNewTaskDiv = document.createElement("div");
        nameNewTaskDiv.innerHTML = nameInput.value;
        nameNewTaskDiv.classList.add("nameNewTaskDiv");
        let taskNewTaskDiv = document.createElement("div");
        taskNewTaskDiv.innerHTML = taskInput.value;
        taskNewTaskDiv.classList.add("taskNewTaskDiv");
        let commentNewTaskDiv = document.createElement("div");
        commentNewTaskDiv.innerHTML = commentInput.value;
        commentNewTaskDiv.classList.add("commentNewTaskDiv");
        let dateNewTaskDiv = document.createElement("div");
        dateNewTaskDiv.innerHTML = dateInput.value;
        dateNewTaskDiv.classList.add("dateNewTaskDiv");
        let timeNewTaskDiv = document.createElement("div");
        timeNewTaskDiv.innerHTML = timeInput.value;
        timeNewTaskDiv.classList.add("timeNewTaskDiv");
        console.log(nameInput.value);
        //console.log(taskInput.value);
        //console.log(commentInput.value);
        //console.log(dateInput.value);
        //console.log(timeInput.value);
        nameInput.value = "";
        taskInput.value = "";
        commentInput.value = "";
        dateInput.value = "";
        timeInput.value = "";
        newTaskDiv.appendChild(nameNewTaskDiv);
        newTaskDiv.appendChild(taskNewTaskDiv);
        newTaskDiv.appendChild(commentNewTaskDiv);
        newTaskDiv.appendChild(dateNewTaskDiv);
        newTaskDiv.appendChild(timeNewTaskDiv);
        // Create new Icon -> Edit-Icon
        //let editIcon: HTMLElement = document.createElement("i");
        // Give it a class -> CSS
        //editIcon.className = "fa-solid fa-pen-to-square";
        // append editIcon to newTaskDiv
        //newTaskDiv.appendChild(editIcon);
        // Install an addEventListener on Edit-icon 
        // When clicked function editTask is triggered
        //editIcon.addEventListener("click", editTask);
        //function editTask(_event: Event): void {
        //    console.log("editTask");
        //  }
        // Create new Icon -> Delete-Icon
        let deleteIcon = document.createElement("i");
        // Give it a class for CSS
        deleteIcon.className = "fa-solid fa-x";
        // Append deleteIcon to newTaskDiv
        newTaskDiv.appendChild(deleteIcon);
        // Install an addEventListener on Delete-icon 
        // When clicked function deleteTask is triggered
        deleteIcon.addEventListener("click", deleteTask);
        // Function deleteTask removes newTaskDiv from Parent bigContainer
        function deleteTask() {
            //console.log("Delete");
            bigContainer.removeChild(newTaskDiv);
        }
        ;
        // add Select-Element with three options: in progress, done and incomplete
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
        newTaskDiv.appendChild(statusList);
    }
})(L04_ToDoList || (L04_ToDoList = {}));
//# sourceMappingURL=ToDoList.js.map