import React from 'react';
import './Detail.sass';
import Tasks from '../../Components/Tasks';
import ProjectInfo from '../../Components/ProjectInfo';


export default function Detail({match}) {

    const urlID = match.params.id

    return (
        <div className="detail">
            <Tasks urlID = {urlID} />
            <ProjectInfo urlID = {urlID} />
        </div>
    )
}
