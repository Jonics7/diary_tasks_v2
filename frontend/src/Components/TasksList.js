import React from 'react'
import Checkbox from './Checkbox'

export default function TasksList(tasks) {
    return (
        <ul>
            {
                tasks.tasks.map(item => <Checkbox key={item.id} {...item}/>)
            }
        </ul>
    )
}
