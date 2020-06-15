import React, { useEffect, useState } from 'react';
import './RightMenu.sass';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';


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

    return (
        <div className="right-menu">
            {/* <ul>
                {
                    projects.map((projects, index) => {
                        return <li key={`${index} `}>{projects.title}</li>
                    })
                }
            </ul> */}

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
                                    return <li key={`${index} `}>{projects.title}</li>
                                })
                            }
                        </ul>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 4</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 5</h2>
                    </TabPanel>
                </div>
            </Tabs>

        </div>
    )
}
