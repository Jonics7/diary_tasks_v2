import React, { useState, useEffect } from 'react';
import './Tasks.sass';
import { Form, Field } from 'react-final-form';
import Checkbox from './Checkbox';
import TasksList from './TasksList';


export default function Tasks(props) {

    const [project, setProject] = useState({});

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

    const [projectTasks, setProjectTasks] = useState([]);

    useEffect(() => {
        const getProjectTasks = async () => {
            const response = await fetch("http://127.0.0.1:8000/api/v1/projects/" + props.urlID + "/tasks");
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            setProjectTasks(jsonResponse)
        };
        getProjectTasks();
    }, []);

    

    
    
    return (
        <div className="tasks">
            <div className="task-list"><TasksList tasks={projectTasks} /></div>
            
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
                            className="add-task-button"
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
