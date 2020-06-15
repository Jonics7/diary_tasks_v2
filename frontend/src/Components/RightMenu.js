import React, { useEffect, useState } from 'react';
import './RightMenu.sass';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import {NavLink as Link} from 'react-router-dom';


export default function RightMenu() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            const response = await fetch("http://127.0.0.1:8000/api/v1/projects/");
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            setProjects(jsonResponse)
        };
        getProjects();
    }, []);

    const [projectsWeb, setProjectsWeb] = useState([]);

    useEffect(() => {
        const getProjectsWeb = async () => {
            const response = await fetch("http://127.0.0.1:8000/api/v1/projects/web");
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            setProjectsWeb(jsonResponse)
        };
        getProjectsWeb();
    }, []);

    const [projectsGame, setProjectsGame] = useState([]);

    useEffect(() => {
        const getProjectsGame = async () => {
            const response = await fetch("http://127.0.0.1:8000/api/v1/projects/game");
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            setProjectsGame(jsonResponse)
        };
        getProjectsGame();
    }, []);

    const [projectsScripts, setProjectsScripts] = useState([]);

    useEffect(() => {
        const getProjectsScripts = async () => {
            const response = await fetch("http://127.0.0.1:8000/api/v1/projects/scripts");
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            setProjectsScripts(jsonResponse)
        };
        getProjectsScripts();
    }, []);

    const [projectsAnother, setProjectsAnother] = useState([]);

    useEffect(() => {
        const getProjectsAnother = async () => {
            const response = await fetch("http://127.0.0.1:8000/api/v1/projects/another");
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            setProjectsAnother(jsonResponse)
        };
        getProjectsAnother();
    }, []);

    return (
        <div className="right-menu">
            <Tabs className="tabs">
                <TabList className="tabs-buttons">
                    <Tab className="tabs-buttons-button">Latest projects</Tab>
                    <Tab className="tabs-buttons-button">Web projects</Tab>
                    <Tab className="tabs-buttons-button">Game projects</Tab>
                    <Tab className="tabs-buttons-button">Scripts</Tab>
                    <Tab className="tabs-buttons-button">Another</Tab>
                </TabList>

                <div className="tab-contant">
                    <TabPanel>
                        <ul>
                            {
                                projects.map((projects, index) => {
                                    return <li key={`${index} `}><Link to={"project/" + projects.id}>{projects.title}</Link></li>
                                })
                            }
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        <ul>
                            {
                                projectsWeb.map((projectsWeb, index) => {
                                    return <li key={`${index} `}>{projectsWeb.title}</li>
                                })
                            }
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        <ul>
                            {
                                projectsGame.map((projectsGame, index) => {
                                    return <li key={`${index} `}>{projectsGame.title}</li>
                                })
                            }
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        <ul>
                            {
                                projectsScripts.map((projectsScripts, index) => {
                                    return <li key={`${index} `}>{projectsScripts.title}</li>
                                })
                            }
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        <ul>
                            {
                                projectsAnother.map((projectsAnother, index) => {
                                    return <li key={`${index} `}>{projectsAnother.title}</li>
                                })
                            }
                        </ul>
                    </TabPanel>
                </div>
            </Tabs>

        </div>
    )
}
