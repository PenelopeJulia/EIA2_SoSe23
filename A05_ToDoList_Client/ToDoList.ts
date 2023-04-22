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

        let response: Response = await fetch("https://penelopejulia.github.io/EIA2_SoSe23/A05_ToDoList_Client/Data.json");
        let offer: string = await response.text();
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

        let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        await fetch("https://penelopejulia.github.io/EIA2_SoSe23/A05_ToDoList_Client/ToDoList.html" + query.toString());
        alert("Input received");

    }

    // Function generate Content loads Data stored in Array in Data.ts
    // Data from User is caught and pushed into Array Task[] 
    // New Elements are created, Data from Task[] is pushed into new Elements 
    // New Elements are pushed into HTML for User to see on page
    function generateContent(_data: Data): void {
        
        // Finding Task-Characteristics ->  Predefining them for me to use in this namespace
        let name: string;
        let task: string;
        let comment: string;
        let date: string;
        let time: string;

        for (let tasks in _data) {

            let data: Task[] = _data[tasks];

            // For-Loop -> Counting up from 0 in Array
            for (let index: number = 0; index < data.length; index++) {

                // Attributes from Array assigned to according Variables
                // 
                name = data[index].name;
                task = data[index].task;
                comment = data[index].comment;
                date = data[index].date;
                time = data[index].time;

                let createDiv: HTMLElement = document.createElement("div");

                createDiv.innerHTML = name + " " + task + " " + comment + " " + date + " " + time + " ";
                createDiv.classList.add("dataList");
                document.body.appendChild(createDiv);

             }
        }

    }

    // Function addTask 
    function addTask(_event: Event): void {

        // Declare variables and get input and textarea by ID from DOM
        let nameInput: HTMLInputElement = <HTMLInputElement>document.getElementById("name");
        let taskInput: HTMLInputElement = <HTMLInputElement>document.getElementById("task");
        let dateInput: HTMLInputElement = <HTMLInputElement>document.getElementById("date");
        let timeInput: HTMLInputElement = <HTMLInputElement>document.getElementById("time");
        let commentInput: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById("comment");

        let i: Task = {

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

    function addInput(_data: Task): void {
        console.log("Add Item")

        // Declare new Div locally -> will contain all elements with value from User-Input
        let newTaskDiv: HTMLElement = document.createElement("div");
        // Give newTaskDiv a Class for CSS
        newTaskDiv.classList.add("newTaskDiv");
       
        let label: HTMLElement = document.createElement("label");
        let date: HTMLElement = document.createElement("p");

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

        label.innerHTML += _data.name + ", " + _data.task + ", " + _data.comment +", " + _data.date + ", " + _data.time + ", ";

        newTaskDiv.appendChild(statusList);
        newTaskDiv.appendChild(deleteIcon);
        newTaskDiv.appendChild(date);
        newTaskDiv.appendChild(label);
       
        let list: HTMLElement = <HTMLElement>document.querySelector(".list");
        list.appendChild(newTaskDiv);
    }
}