namespace L04_ToDoList {


    // Characteristics of Tasks are being predefined in this interface -> key and value
    export interface Task {
        name: string;
        newTask: string;
        comment: string;
        date: string;
        time: string;
    }

    // Data is being predefined
    // "Category" as the key of the type: string
    // Value is followring Array -> Task[]
    export interface Data {
    [category: string]: Task[];
    }


    // Data is predefined
    export let data: Data = {

        // Array with chacarcteristics as following: name, newTask...
        newTask: [

            {
                name: "Anna",
                newTask: "Küche putzen",
                comment:"Bitte gründlich machen!",
                date: "27.04.2023",
                time: "17:00"
            }
        ]
    }


}