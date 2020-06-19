import React, { useState, useEffect } from 'react';
import './ProjectInfo.sass';
import { Form, Field } from 'react-final-form';

export default function ProjectInfo(props) {

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

    return (
        <div className="info">
            <div className="title">
                <h3>{project.title}</h3>
            </div>
            <div className="cat-lang">
                <label>
                    <p>Category:</p>
                    <p className="category">{project.category}</p>
                </label>
                <label>
                    <p>Used language:</p>
                    <p className="language">{project.language}</p>
                </label>
            </div>
            <div className="description">
                <p>{project.description}</p>
            </div>

            <Form onSubmit={() => { }} >
                {({ handleSubmit }) => (
                    <form
                        className="upload-file"
                    >
                        <Field
                            name="file"
                            component="input"
                            type="file"
                            className="file-input input"
                        // onChange={e => setTitle(e.target.value)}
                        // defaultValue={title}
                        />
                        <button
                            className="add-neon upload-file-button"
                        >
                            <span className="button-line button-line-top"></span>
                            <span className="button-line button-line-right"></span>
                            <span className="button-line button-line-bottom"></span>
                            <span className="button-line button-line-left"></span>
                                Add Project File
                        </button>
                    </form>
                )}
            </Form>

        </div>
    )
}
