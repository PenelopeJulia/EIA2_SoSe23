namespace L04_ToDoList {

    // Load-Listener is installed -> when page loads function handleLoad is triggered
    window.addEventListener("load", handleLoad);

    // Function handleLoad calls Function generateContent and grabs Button from DOM
    function handleLoad(_event: Event):void {

        // Function generateContent loads Data
       generateContent(data);

       // Accesing Button from DOM with ID
        let button: Element = document.querySelector("#createTaskButton");
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
        let newTask: string;
        let comment: string;
        let date: string;
        let time: string;

        // For/In-Loop -> Looking for Data in Categories
        for (let category in _data) {

            // Defining task as an Array
            // Using key: category to access array in _data
            let task: Task[] = _data[category];

            // For-Loop -> Counting up from 0 in Array
            for (let index: number = 0; index < task.length; index++) {

            // Variables getting assigned value from Array that stores the User-Information
            name = task[index].name;
            newTask = task[index].newTask;
            comment = task[index].comment;
            date = task[index].date;
            time = task[index].time;

            // Creating new Div-Element
            let newTaskDiv: HTMLElement = document.createElement("div");

            // Manipulating HTML by adding new DIV to DOM
            newTaskDiv.innerHTML = name + "" + newTask + "" + comment + "" + date + "" + time + "";
            newTaskDiv.classList.add("dataList");
            document.body.appendChild(newTaskDiv);

        }

    }


    }

    function addTask(_event: Event): void {
        console.log(addTask);

    }



    function editTask(_event: Event): void {
        console.log("editTask");

        let edit: Element = document.querySelector("#edit");
        edit.addEventListener("click", editTask);
    }

    function deleteTask(_event: Event): void {
        console.log("deleteTask");

       // let delete: Element = document.querySelector("#delete");
        //delete.addEventListener("click", deleteTask);
    }
}