import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './AddProject.sass';
import './NeonButton.sass';
import './AddProjectForm.sass';
import { Form, Field } from 'react-final-form';

Modal.setAppElement('#root');

export default function AddProject() {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const [title, setTitle] = useState("");
    const [task, setTask] = useState("");
    const [catId, setCategory] = useState("");
    const [langId, setLanguage] = useState("");

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            const response = await fetch("http://127.0.0.1:8000/api/v1/categories/");
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            setCategories(jsonResponse)
        };
        getCategories();
    }, []);

    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        const getLanguages = async () => {
            const response = await fetch("http://127.0.0.1:8000/api/v1/languages/");
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            setLanguages(jsonResponse)
        };
        getLanguages();
    }, []);

    const sendForm = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "title": title,
                "task": task,
                "category": catId,
                "language": langId,
            })
        };
        fetch('http://127.0.0.1:8000/api/v1/add-project/', requestOptions);
    }

    return (
        <div className="add-project">
            <button
                className="add-neon"
                onClick={() => setModalIsOpen(true)}>
                <span className="button-line button-line-top"></span>
                <span className="button-line button-line-right"></span>
                <span className="button-line button-line-bottom"></span>
                <span className="button-line button-line-left"></span>
                    Add New Project
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(34, 34, 38, 0.9)',
                    },
                    content: {
                        position: 'absolute',
                        //   top: '40px',
                        //   left: '40px',
                        //   right: '40px',
                        //   bottom: '40px',
                        left: '35%',
                        display: 'flex',
                        justifyContent: 'center',
                        width: '25vw',
                        border: 'none',
                        boxShadow: '0px 0px 0px #2196f3, 0px 0px 30px #2196f3',
                        background: '#222226',
                        overflow: 'auto',
                        color: 'rgb(33, 150, 243)',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '10px',
                        outline: 'none',
                        padding: '20px'
                    }
                }}
            >

                <Form onSubmit={() => { }}>
                    {({ handleSubmit }) => (
                        <form
                            className="add-project-form"
                            //  
                            >
                            <Field  
                                name="name"
                                component="input"
                                type="text"
                                placeholder="Project Name"
                                className="name-input input"
                                onChange={e => setTitle(e.target.value)}
                                defaultValue={title}
                            />
                            <Field
                                onChange={e => setTask(e.target.value)}
                                defaultValue={task}
                                name="description"
                                component="input"
                                type="text"
                                placeholder="Short Description"
                                className="description-input input"
                            />
                            <Field
                                onChange={e => setCategory(e.target.value)}
                                defaultValue={catId}
                                name="category"
                                component="select"
                                className="category-input input"
                            >
                                <option>Select category</option>
                                {
                                categories.map((category, index) => {
                                    return <option value={category.id} key={index}>{category.title}</option>
                                    })
                                }
                            </Field>
                            <Field
                                onChange={e => setLanguage(e.target.value)}
                                defaultValue={langId}
                                name="language"
                                component="select"
                                className="language-input input"
                            >
                                <option>Select language</option>
                                {
                                languages.map((languages, index) => {
                                    return <option value={languages.id} key={index}>{languages.name}</option>
                                    })
                                }
                            </Field>
                            <button
                                className="add-neon"
                                // onClick={() => setModalIsOpen(true)}
                                onClick = {sendForm}
                                >
                                <span className="button-line button-line-top"></span>
                                <span className="button-line button-line-right"></span>
                                <span className="button-line button-line-bottom"></span>
                                <span className="button-line button-line-left"></span>
                    Add New Project
                            </button>
                        </form>
                    )}
                </Form>
                <button
                    className="modal-close"
                    onClick={() => setModalIsOpen(false)}>
                    <span className="close"></span>
                </button>
            </Modal>
        </div>
    )
}
