import React, { useState, useEffect } from 'react';
import './Tasks.sass';
import { Form, Field } from 'react-final-form';

export default function Tasks(props) {

    const [project, setProject] = useState([]);

    useEffect(() => {
        const getProject = async () => {
            const response = await fetch("http://127.0.0.1:8000/api/v1/projects/" + props.urlID);
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            setProject(jsonResponse)
        };
        getProject();
    }, []);

    const [task, setTask] = useState([]);

    const sendForm = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "task": task,
                "complited": false,
                "project": project.id
                
            })
        };
        fetch('http://127.0.0.1:8000/api/v1/tasks/', requestOptions);
    }

    const [complited, setcomplited] = useState([]);

    const taskUpdateForm = () => {
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "complited": complited
            })
        };
        // fetch('http://127.0.0.1:8000/api/v1/tasks/ + task.id', requestOptions);
    }

    return (
        <div className="tasks">

            

            {/* {
                project.tasks.map((task, index) => {
                    return  <div>
                                <label
                                    key={`${index} `}
                                    for={task.id}
                                >
                                    {task.task}
                                </label>
                                <input
                                    type="checkbox"
                                    id={task.id}
                                    defaultChecked={task.complited}
                                    // onChange={e => setTask(e.target.checked)}
                                    // onClick={taskUpdateForm}
                                />
                            </div>
                })
            } */}


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
                            onClick={sendForm}
                        >
                            ADD NEW TASK
                        </button>
                    </form>
                )}
            </Form>

        </div>
    )
}
