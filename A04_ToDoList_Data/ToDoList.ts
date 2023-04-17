namespace L04_ToDoList {

    // Load-Listener is installed -> when page loads function handleLoad is triggered
    window.addEventListener("load", handleLoad);

    // Function handleLoad calls Function generateContent and grabs Button from DOM
    function handleLoad(_event: Event):void {

        // Function generateContent loads Data
       generateContent(data);

       // Accesing Button from DOM with ID
       // <HTMLBodyElement> -> Forces TS to accept Button as HTMLElement -> resolve Error
        let button: Element = <HTMLBodyElement>document.querySelector("#createTaskButton");
        // Event-Listener gets installed on Button, if Button is clicked by User Function addTask gets triggered
        button.addEventListener("click", addTask);
        
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

        // For/In-Loop -> Looking for Data in Categories
        for (let category in _data) {

            // Defining task as an Array
            // Using key: category to access array in _data
            let tasks: Task[] = _data[category];

            // For-Loop -> Counting up from 0 in Array
            for (let index: number = 0; index < tasks.length; index++) {

            // Variables 
            name = tasks[index].name;
            task = tasks[index].task;
            comment = tasks[index].comment;
            date = tasks[index].date;
            time = tasks[index].time;

            // Creating new Div-Element
            let newTaskDiv: HTMLElement = document.createElement("div");
            let addTaskTitleDiv: HTMLElement = <HTMLBodyElement>document.getElementById("#addTaskTitleDiv");

            // Manipulating HTML by adding new DIV to DOM
            newTaskDiv.innerHTML = name + "" + task + "" + comment + "" + date + "" + time + "";
            newTaskDiv.classList.add("newTaskDiv");
            addTaskTitleDiv.appendChild(newTaskDiv);

        // create new "p"-Elements
        let nameNewTaskDiv: HTMLElement = document.createElement("p");

        let taskNewTaskDiv: HTMLElement = document.createElement("p");

        let commentNewTaskDiv: HTMLElement = document.createElement("p");

        let dateNewTaskDiv: HTMLElement = document.createElement("p");

        let timeNewTaskDiv: HTMLElement = document.createElement("p");



        // Create new HTML-Element -> Edit-Icon
        let editIcon: HTMLElement = document.createElement("i");
        editIcon.classList.add("edit");
        // Manipulate HTML through innerHTML and create specific Icon 
        editIcon.innerHTML = '<i "fa-solid fa-pen-to-square"> </i>';
        // install an addEventListener on Edit-icon 
        // When clicked function editTask is triggered
        editIcon.addEventListener("click", editTask);


        // Create new Icon -> delete-Icon
        let deleteIcon: HTMLElement = document.createElement("i");
        deleteIcon.classList.add("delete");
        // Manipulate HTML through innerHTML and create specific Icon 
        deleteIcon.innerHTML = '<i "fa-solid fa-x>" <i/>'
        // Install an addEventListener on Delete-icon 
        // When clicked function deleteTask is triggered
        deleteIcon.addEventListener("click", deleteTask);

            console.log("generate Content");
        }

    }


    }

    // Function addTask 
    function addTask(_event: Event): void {
        console.log("addTask");

        // Declare variables
        // Get input and textarea by ID from DOM
        let nameValue: HTMLInputElement = <HTMLInputElement>document.getElementById("name");
        let taskValue: HTMLInputElement = <HTMLInputElement>document.getElementById("task");
        let dateValue: HTMLInputElement = <HTMLInputElement>document.getElementById("date");
        let timeValue: HTMLInputElement = <HTMLInputElement>document.getElementById("time");
        let commentValue: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById("comment");

              // Array
              let i: Task = {

                name: nameValue.value,
                task: taskValue.value,
                date: dateValue.value,
                time: timeValue.value,
                comment: commentValue.value,
            };


    }



    function editTask(_event: Event): void {

        console.log("editTask");
    }

    function deleteTask(_event: Event): void {
        
        console.log("deleteTask");

    }
}