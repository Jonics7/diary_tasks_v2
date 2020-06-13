import React, { useEffect, useState } from 'react'
import LeftMenu from '../../Components/LeftMenu'


export default function Home() {
    const [projects, setProjects] = useState([]);

    const getProjects = async () => {
        const response = await fetch(
            `http://127.0.0.1:8000/api/v1/projects/`
        );
        const data = await response.json()
        setProjects(data)
        console.log(data)
    }
    useEffect(() => {
        getProjects()
    },[])

    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        const response = await fetch(
            `http://127.0.0.1:8000/api/v1/categories/`
        );
        const data = await response.json()
        setCategories(data)
        console.log(data)
    }
    useEffect(() => {
        getCategories()
    },[])

    const [languages, setLanguages] = useState([]);

    const getLanguages = async () => {
        const response = await fetch(
            `http://127.0.0.1:8000/api/v1/languages/`
        );
        const data = await response.json()
        setLanguages(data)
        console.log(data)
    }
    useEffect(() => {
        getLanguages()
    },[])
    
    return (
        <div>
            <LeftMenu />
        </div>
    )
}

