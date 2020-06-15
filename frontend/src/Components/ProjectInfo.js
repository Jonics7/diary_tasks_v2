import React, { useState, useEffect } from 'react';
import './ProjectInfo.sass';

export default function ProjectInfo(props) {

    const [project, setProject] = useState([]);
    const fetchURL = "http://127.0.0.1:8000";

    useEffect(() => {
        const getProject = async () => {
            const response = await fetch("http://127.0.0.1:8000/api/v1/project/" + props.urlID );
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            setProject(jsonResponse)
        };
        getProject();
    }, []);

    return (
        <div className="info">
            <h3>{project.title}</h3>
            <p>{project.category}</p>
            <p>{project.language}</p>
        </div>
    )
}
