import {useState} from 'react';
import type {Task} from '../types';

interface TaskItemProps {
    task: Task;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, newTitle: string) => void;
}

function TaskItem({task, onToggle, onDelete, onEdit}: TaskItemProps){
    const [isEditing, setIsEditing] = useState(false);
    const  [draftTitle, setDraftTitle] = useState(task.title);

    const handleSave = () => {
        const trimmed = draftTitle.trim();
        if(trimmed !== ''){
            onEdit(task.id, trimmed);
        }
        setIsEditing(false);
    };

    const handleCancel = () => {
        setDraftTitle(task.title);
        setIsEditing(false);
    };

    return(
        <li className="task-item">
            <input 
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
            />
            {isEditing ? (
            <>
                <input
                type="text"
                value={draftTitle}
                onChange={(e) => setDraftTitle(e.target.value)}
                autoFocus
                />
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </>
            ) : (
                <>
                    <span 
                        className={task.completed ? 'task-title completed' : 'task-title'}
                        onClick={() => setIsEditing(true)}
                    >
                        {task.title}
                    </span>   
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                </>
             )}
        </li>
    );
}

export default TaskItem;