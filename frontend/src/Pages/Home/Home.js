import React from 'react'
import LeftMenu from '../../Components/LeftMenu'
import RightMenu from '../../Components/RightMenu';
import './Home.sass';


export default function Home() {
    return (
        <div className="home-page">
            <LeftMenu />
            <RightMenu />

        </div>
    )
}

