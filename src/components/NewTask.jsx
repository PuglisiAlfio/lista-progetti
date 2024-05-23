import { useState } from "react";

import Button from "./Button";

export default function NewTask({onAdd}){

    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(event){
        setEnteredTask(event.target.value)
    }

    function handleClick(){
        if(enteredTask.trim() === ''){
            return;
        }
        onAdd(enteredTask)
        setEnteredTask('')
    }

    return <div className="flex items-center gap-4">
        <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handleChange} value={enteredTask}/>
        <Button onClick={handleClick}>Aggiungi Task</Button>
    </div>
}