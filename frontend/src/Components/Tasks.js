import React, { useState, useEffect } from 'react';
import './Tasks.sass';
import { Form, Field } from 'react-final-form';

export default function Tasks(props) {

    const [project, setProject] = useState([]);

    useEffect(() => {
        const getProject = async () => {
            const response = await fetch("http://127.0.0.1:8000/api/v1/project/" + props.urlID);
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            setProject(jsonResponse)
        };
        getProject();
    }, []);

    const [task, setTask] = useState([]);
    const [id, setID] = useState(props.urlID);

    const sendForm = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "task": task,
                "id": id
            })
        };
        fetch('http://127.0.0.1:8000/api/v1/add-task/', requestOptions);
    }

    return (
        <div className="tasks">

            <ul>
                {
                    project.map((project, index) => {
                        return <li key={`${index} `}>{project.task}</li>
                    })
                }
            </ul>

            <Form onSubmit={() => { }}>
                {({ handleSubmit }) => (
                    <form
                        className="add-task-form"
                    >
                        <Field
                            name="task"
                            component="input"
                            type="text"
                            placeholder="Write task"
                            className="task-input"
                            onChange={e => setTask(e.target.value)}
                            defaultValue={task}
                        />
                        <button
                            className="add-task"
                            onClick = {sendForm}
                        >
                            ADD NEW TASK
                        </button>
                    </form>
                )}
            </Form>

        </div>
    )
}
