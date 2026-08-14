import { useState } from "react";
import type {FormEvent} from 'react';

interface AddTaskFormProps{
    onAdd: (title: string) => void;
}

function AddTaskForm({onAdd}: AddTaskFormProps){
    const[title, setTitle] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const trimmed = title.trim();
        if(trimmed === '') return;

        onAdd(trimmed);
        setTitle('');
    };

    return(
        <form className="add-task-form" onSubmit={handleSubmit}>
            <input 
             type="text"
             value={title}
             onChange={(e) => setTitle(e.target.value)}
             placeholder="Add a new task..."
             />

             <button type="submit">Add</button>
        </form>
    );
}

export default AddTaskForm;
