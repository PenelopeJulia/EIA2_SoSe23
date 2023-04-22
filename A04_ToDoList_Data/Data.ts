namespace L04_ToDoList {


    // Characteristics of Tasks are being predefined in this interface -> key and value
    export interface Task {
        name: string;
        task: string;
        comment: string;
        date: string;
        time: string;
    }

    // Data is predefined
    export let data: Task[] = [

        // Array with chacarcteristics as following: name, newTask... 

        {
                name: "Anna",
                task: "Wischen",
                comment:"Gründlich!",
                date: "27.04.2023",
                time: "12:30"
        }
    
    ]
}
