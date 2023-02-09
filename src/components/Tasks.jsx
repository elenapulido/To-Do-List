import React from 'react'
import pencil from '../img/lapiz.png';
import { useState } from 'react';

const Tasks = ({  setTasks, tasks, name, id , index, deleteTask }) => {
const [newTask , setNewTask] = useState("")
    const [editOn, setEditOn] = useState(true)
    const editTask = () => {
        setEditOn(false)

    }

    const saveTask = () => {
        const temp = [...tasks]
        const element = temp.find(item => item.id === id)
        element.name = newTask.name
        setTasks(temp)
        setEditOn(true)

    }
    const handleChange= e =>{
        setNewTask({ [e.target.name]: e.target.value, id:id })

    }
   

return (

        <>
            {
                editOn ?
                    <div className="list" key= {id}>

                        <h3>{name}</h3>
                        <img src={pencil} className="btn-edit" onClick={() => editTask()} alt="" />
                        <button className="btn-delete" onClick={() => deleteTask(index)}>x</button>
                    </div>
                    :
                    <div className="list" key= {id}>
                        <input type="text" name="name" onChange={handleChange} defaultValue={name} />
                        <img src={pencil} className="btn-edit" onClick={() => saveTask()} alt="" />
                        <button className="btn-delete" onClick={() => deleteTask(index)}>x</button>
                    </div>
            }
        </>

    )
}

export default Tasks


