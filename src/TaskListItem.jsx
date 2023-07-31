import React from 'react';
import TaskListItemIcon from './TaskListItemIcon';
import "./TaskListItem.css"

function TaskListItem({ task, editTask, removeTask, doneTask }) {
    return (
        <li className={`list-group-item ${task.isDone && 'bg-success bg-gradient'}`}>
            {task.priority && (
                <span className="badge text-bg-secondary me-2">
                    <TaskListItemIcon />
                </span>
            )}
            {/* gorevler */}
            <div className="task-text">{task.task}</div>

            <div className="btn-group float-end" role="group">

                <button className="btn btn-sm btn-success float-end"
                 onClick={() => doneTask(task.uuid)}>Bitti</button>

                <button className="btn btn-sm btn-warning float-end"
                 onClick={() => editTask(task.uuid)}>Düzenle</button>

                <button className="btn btn-sm btn-danger float-end" 
                onClick={() => removeTask(task.uuid)}>Sil</button>
            </div>  
        </li>
    );
}

export default TaskListItem;
