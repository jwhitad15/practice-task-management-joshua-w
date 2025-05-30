import React from "react";
import { useParams } from "react";


const TaskList = () => {


    let tasks = [
        {
            "id": "task-1" ,
            "title": "sweep",
            "description": "sweep all the common area floors"
        },
        {
            "id": "task-2" ,
            "title": "mop",
            "description": "mop all the common area floors (must sweep first!)"
        },
        {
            "id": "task-3" ,
            "title": "dust",
            "description": "dust all furniture"
        },
        ]


        const { id } = useParams(); // Extracts 'id' from the URL


        return (
            <div>
                <h1>TaskList</h1>
                <ol>
                    <li></li>
                </ol>
            </div>
        );




}

export default TaskList;