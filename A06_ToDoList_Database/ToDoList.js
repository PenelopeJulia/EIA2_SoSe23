"use strict";
var L06_ToDoList;
(function (L06_ToDoList) {
    // Load-Listener is installed -> when page loads function handleLoad is triggered
    window.addEventListener("load", handleLoad);
    let json = {};
    // Function handleLoad calls Function generateContent and grabs Button from DOM
    async function handleLoad(_event) {
        console.log("handeLoad triggered");
        // Fetching JSON and 
        let response = await fetch("https://webuser.hs-furtwangen.de/~vogelpen/Database/?command=find&collection=Data");
        // Assign Result of text() to offer
        let offer = await response.text();
        // Assigns result of calling JSON on offer so we can use it
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
        for (let key of formData.keys())
            if (!json[key]) {
                let values = formData.getAll(key);
                json[key] = values.length > 1 ? values : values[0];
            }
        let query = new URLSearchParams();
        query.set("command", "insert");
        query.set("collection", "Data");
        query.set("data", JSON.stringify(json));
        console.log(JSON.stringify(json));
        let response = await fetch("https://webuser.hs-furtwangen.de/~vogelpen/Database/?" + query.toString());
        console.log(response);
        alert("Input received");
    }
    async function generateContent(_data) {
        // Finding Task-Characteristics ->  Predefining them for me to use
        let name;
        let task;
        let comment;
        let date;
        let time;
        let query = new URLSearchParams();
        query.set("command", "find");
        query.set("collection", "Tasks");
        query.toString();
        let response = await fetch("https://webuser.hs-furtwangen.de/~vogelpen/Database/?" + query.toString());
        let offer = await response.text();
        let newTask = response.json;
        // Go through Data
        for (let tasks in _data) {
            // Create new Variable of Type Array Task[] 
            let data = _data[tasks];
            // For-Loop -> Counting up from 0 in Array
            for (let index = 0; index < data.length; index++) {
                // Attributes from Array assigned to according Variables
                name = data[index].name;
                task = data[index].task;
                comment = data[index].comment;
                date = data[index].date;
                time = data[index].time;
                // Example Text from Data.json
                let createDiv = document.createElement("div");
                createDiv.innerHTML = name + " " + task + " " + comment + " " + date + " " + time + " ";
                createDiv.classList.add("dataList");
                document.body.appendChild(createDiv);
            }
        }
    }
    function addTask(_event) {
        // Declare variables and get input and textarea by ID from DOM
        let nameInput = document.getElementById("name");
        let taskInput = document.getElementById("task");
        let dateInput = document.getElementById("date");
        let timeInput = document.getElementById("time");
        let commentInput = document.getElementById("comment");
        //Assign Values to Attributes from Array
        let i = {
            name: nameInput.value,
            task: taskInput.value,
            comment: commentInput.value,
            date: dateInput.value,
            time: timeInput.value,
        };
        // Function addInput gets data from i where we assigned input-value to elements of array
        addInput(i);
        // Remove Input-Value
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
        // Create new P where we Input-Value-Text
        let label = document.createElement("label");
        // Create new Icon -> Delete-Icon
        let deleteIcon = document.createElement("i");
        // Give it a class for CSS
        deleteIcon.className = "fa-solid fa-x";
        // Append deleteIcon to newTaskDiv
        newTaskDiv.append(deleteIcon);
        // Install an addEventListener on Delete-icon 
        // When clicked function deleteTask is triggered
        deleteIcon.addEventListener("click", deleteTask);
        async function deleteTask(_event) {
            list.removeChild(newTaskDiv);
            let query = new URLSearchParams();
            query.set("command", "delete");
            query.set("collection", "Tasks");
            query.set("data", JSON.stringify(json));
            let response = await fetch("https://webuser.hs-furtwangen.de/~vogelpen/Database/index.php?" + query.toString());
            console.log(response);
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
        // Assign Value to new P-Element in newTaskDiv
        label.innerHTML += _data.name + " " + _data.task + " " + _data.comment + " " + _data.date + " " + _data.time + " ";
        // Append new Items to newTaskDiv
        newTaskDiv.appendChild(statusList);
        newTaskDiv.appendChild(deleteIcon);
        newTaskDiv.appendChild(label);
        // Get List Element and append newTaskDiv to list
        let list = document.querySelector(".list");
        list.appendChild(newTaskDiv);
    }
})(L06_ToDoList || (L06_ToDoList = {}));
//# sourceMappingURL=ToDoList.js.map