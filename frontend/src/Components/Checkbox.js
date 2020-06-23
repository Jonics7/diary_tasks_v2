import React, { useState } from 'react'

export default function Checkbox({ id, task, complited }) {

    const [checked, setChecked] = useState(complited);

    const cls = ['task1'];

    if (checked) {
        cls.push('complited')
    };

    const taskUpdateForm = () => {
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "complited": !checked
            })
        };
        fetch('http://127.0.0.1:8000/api/v1/tasks/' + id, requestOptions);
    };
    
    const taskDelete = () => {
        const requestOptions = {
            method: 'DELETE'
        };
        fetch('http://127.0.0.1:8000/api/v1/tasks/' + id, requestOptions);
    }
    return (
        <li className={cls.join(' ')}>
            <label className="task-text">
                <input
                    className="task-checkbox"
                    type="checkbox"
                    defaultChecked={checked}
                    onChange={(event) => {
                        setChecked(event.target.checked)
            
                    }}
                    onClick={() => taskUpdateForm()}
                />
            </label>
            <span>{task}</span>

            <button onClick={taskDelete}>Remove</button>
        </li>
    )
}
