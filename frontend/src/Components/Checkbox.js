import React, { useState } from 'react'

export default function Checkbox({ id, task, complited }) {

    const [checked, setChecked] = useState(complited);

    const taskUpdateForm = (taskID) => {
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "complited": checked
            })
        };
        fetch('http://127.0.0.1:8000/api/v1/tasks/' + taskID, requestOptions);
    }
    
    return (
        <div>
            <label className="task-text">
                <input
                    className="task-checkbox"
                    type="checkbox"
                    defaultChecked={checked}
                    onChange={(event) => {
                        setChecked(event.target.checked)
                    }}
                    onClick={taskUpdateForm(id)}
                />
                <span>{task}</span>
            </label>

        </div>
    )
}
