namespace L04_ToDoList {

    // Load-Listener is installed -> when page loads function handleLoad is triggered
    window.addEventListener("load", handleLoad);

    // Function handleLoad calls Function generateContent and grabs Button from DOM
    function handleLoad(_event: Event):void {

        console.log(data);
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
    function generateContent(_data: Task): void {
        
        // Finding Task-Characteristics ->  Predefining them for me to use in this namespace
        let name: string;
        let task: string;
        let comment: string;
        let date: string;
        let time: string;

            // For-Loop -> Counting up from 0 in Array
            for (let index: number = 0; index < data.length; index++) {

                // Attributes from Array assigned to according Variables
                // 
                name = data[index].name;
                task = data[index].task;
                comment = data[index].comment;
                date = data[index].date;
                time = data[index].time;

                // Creating new Div-Element
                let exampleTaskDiv: HTMLElement = document.createElement("div");
                let addTaskTitleDiv: HTMLElement = <HTMLBodyElement>document.getElementById("addTaskTitleDiv");

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
    function addTask(_event: Event): void {

        // Declare new Div locally -> will contain all elements with value from User-Input
        let newTaskDiv: HTMLElement = document.createElement("div");
        // Give newTaskDiv a Class for CSS
        newTaskDiv.id = ("newTaskDiv");
    
        // Get addTaskTitleDiv by ID
        let addTaskTitleDiv: HTMLElement = <HTMLBodyElement>document.getElementById("addTaskTitleDiv");
        // Create new Div-Element
        let bigContainer: HTMLElement = document.createElement("bigContainer");

        // Append bigContainer to addTaskTitleDiv so I can position it under it
        addTaskTitleDiv.appendChild(bigContainer);
        // Append newTaskDiv to bigContainer
        bigContainer.appendChild(newTaskDiv);

        // Declare variables
        // Get input and textarea by ID from DOM
        let nameInput: HTMLInputElement = <HTMLInputElement>document.getElementById("name");
        let taskInput: HTMLInputElement = <HTMLInputElement>document.getElementById("task");
        let dateInput: HTMLInputElement = <HTMLInputElement>document.getElementById("date");
        let timeInput: HTMLInputElement = <HTMLInputElement>document.getElementById("time");
        let commentInput: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById("comment");

        // Create new "input"-Elements so one can edit task afterwards 
        
        //Create new Input-Element and assign it value from nameInput (#name from HTML)
        let nameNewTaskDiv: HTMLInputElement = <HTMLInputElement>document.createElement("input");
        nameNewTaskDiv.innerHTML = nameInput.value;
        nameNewTaskDiv.classList.add("nameNewTaskDiv");

        let taskNewTaskDiv: HTMLInputElement = <HTMLInputElement>document.createElement("input");
        taskNewTaskDiv.innerHTML = taskInput.value;
        taskNewTaskDiv.classList.add("taskNewTaskDiv");

        let commentNewTaskDiv: HTMLTextAreaElement = <HTMLTextAreaElement>document.createElement("textarea");      
        commentNewTaskDiv.innerHTML = commentInput.value;
        commentNewTaskDiv.classList.add("commentNewTaskDiv");

        let dateNewTaskDiv: HTMLInputElement = <HTMLInputElement>document.createElement("input");
        dateNewTaskDiv.type = "date";
        dateNewTaskDiv.innerHTML = dateInput.value;
        dateNewTaskDiv.classList.add("dateNewTaskDiv");

        let timeNewTaskDiv: HTMLInputElement = <HTMLInputElement>document.createElement("Input"); 
        timeNewTaskDiv.type = "time";
        timeNewTaskDiv.innerHTML = timeInput.value;
        timeNewTaskDiv.classList.add("timeNewTaskDiv");

        console.log(nameInput.value);
        console.log(taskInput.value);
        console.log(commentInput.value);
        console.log(dateInput.value);
        console.log(timeInput.value);

        newTaskDiv.appendChild(nameNewTaskDiv);
        newTaskDiv.appendChild(taskNewTaskDiv);
        newTaskDiv.appendChild(commentNewTaskDiv);
        newTaskDiv.appendChild(dateNewTaskDiv);
        newTaskDiv.appendChild(timeNewTaskDiv);

        nameInput.value = "";
        taskInput.value = "";
        commentInput.value = "";
        dateInput.value = "";
        timeInput.value = "";

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
        let deleteIcon: HTMLElement = document.createElement("i");
        // Give it a class for CSS
        deleteIcon.className = "fa-solid fa-x";
        // Append deleteIcon to newTaskDiv
        newTaskDiv.appendChild(deleteIcon);
        // Install an addEventListener on Delete-icon 
        // When clicked function deleteTask is triggered
        deleteIcon.addEventListener("click", deleteTask );
        // Function deleteTask removes newTaskDiv from Parent bigContainer
        function deleteTask() {
            //console.log("Delete");
            bigContainer.removeChild(newTaskDiv);
        };
        
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

}