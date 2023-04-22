namespace L05_ToDoList {

    // Load-Listener is installed -> when page loads function handleLoad is triggered
    window.addEventListener("load", handleLoad);

    export interface Task {
        name: string;
        task: string;
        comment: string;
        date: string;
        time: string;
    }

    export interface Data {
        [tasks: string]: Task[];
    }


    // Function handleLoad calls Function generateContent and grabs Button from DOM
    async function handleLoad(_event: Event): Promise<void> {

        console.log("handeLoad triggered");

        // Fetching JSON and 
        let response: Response = await fetch("https://penelopejulia.github.io/EIA2_SoSe23/A05_ToDoList_Client/Data.json");
        // Assign Result of text() to offer
        let offer: string = await response.text();
        // Assigns result of calling JSON on offer so we can use it
        let data: Data = JSON.parse(offer);

       // Accesing Button from DOM with ID
       // <HTMLBodyElement> -> Forces TS to accept Button as HTMLElement -> resolve Error
        let button: Element = <HTMLBodyElement>document.querySelector("#addTaskButton");
       // Event-Listener gets installed on Button, if Button is clicked by User Function addTask gets triggered
        button.addEventListener("click", addTask);
        button.addEventListener("click", sendTask);
        
       // Function generateContent loads Data
        generateContent(data);
    }   


    async function sendTask(_event: Event): Promise<void> {
        console.log("Input sent");

        // Declare new Variable form and get from HTML
        let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
        // New Variable formData of Type FormData  -> form argument
        let formData: FormData = new FormData(form);
        // formData as argument contained in specified form
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        // Waiting for response from Server
        await fetch("https://penelopejulia.github.io/EIA2_SoSe23/A05_ToDoList_Client/ToDoList.html" + query.toString());
        alert("Input received");

    }

    function generateContent(_data: Data): void {
        
        // Finding Task-Characteristics ->  Predefining them for me to use
        let name: string;
        let task: string;
        let comment: string;
        let date: string;
        let time: string;

        // Go through Data
        for (let tasks in _data) {

            // Create new Variable of Type Array Task[] 
            let data: Task[] = _data[tasks];

            // For-Loop -> Counting up from 0 in Array
            for (let index: number = 0; index < data.length; index++) {

                // Attributes from Array assigned to according Variables
                name = data[index].name;
                task = data[index].task;
                comment = data[index].comment;
                date = data[index].date;
                time = data[index].time;

                // Example Text from Data.json
                let createDiv: HTMLElement = document.createElement("div");
                createDiv.innerHTML = name + " " + task + " " + comment + " " + date + " " + time + " ";
                createDiv.classList.add("dataList");
                document.body.appendChild(createDiv);

             }
        }

    }

    function addTask(_event: Event): void {

        // Declare variables and get input and textarea by ID from DOM
        let nameInput: HTMLInputElement = <HTMLInputElement>document.getElementById("name");
        let taskInput: HTMLInputElement = <HTMLInputElement>document.getElementById("task");
        let dateInput: HTMLInputElement = <HTMLInputElement>document.getElementById("date");
        let timeInput: HTMLInputElement = <HTMLInputElement>document.getElementById("time");
        let commentInput: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById("comment");

        //Assign Values to Attributes from Array
        let i: Task = {

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

    
    function addInput(_data: Task): void {
        console.log("Add Item")

        // Declare new Div locally -> will contain all elements with value from User-Input
        let newTaskDiv: HTMLElement = document.createElement("div");
        // Give newTaskDiv a Class for CSS
        newTaskDiv.classList.add("newTaskDiv");
       
        // Create new P where we Input-Value-Text
        let label: HTMLElement = document.createElement("label");

        // Create new Icon -> Delete-Icon
        let deleteIcon: HTMLElement = document.createElement("i");
        // Give it a class for CSS
        deleteIcon.className = "fa-solid fa-x";
        // Append deleteIcon to newTaskDiv
        newTaskDiv.append(deleteIcon);

        // Install an addEventListener on Delete-icon 
        // When clicked function deleteTask is triggered
        deleteIcon.addEventListener("click", deleteTask );

        function deleteTask(_event: Event) {
            list.removeChild(newTaskDiv)
        };
        
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
        label.innerHTML += _data.name + " " + _data.task + " " + _data.comment +" " + _data.date + " " + _data.time + " ";

        // Append new Items to newTaskDiv
        newTaskDiv.appendChild(statusList);
        newTaskDiv.appendChild(deleteIcon);
        newTaskDiv.appendChild(label);
       
        // Get List Element and append newTaskDiv to list
        let list: HTMLElement = <HTMLElement>document.querySelector(".list");
        list.appendChild(newTaskDiv);
    }
}