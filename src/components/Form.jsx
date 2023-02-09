import React, { useState } from 'react'
import Tasks from './Tasks'
import { v4 as uuidv4 } from 'uuid'



const Form = () => {
    const [task, setTask] = useState({})
    const [tasks, setTasks] = useState([
        { name: 'work', id:0},
        { name: 'travel', id:1},
        { name: 'personal', id:2}
    ])

    const handleChange = e => {
        setTask({ [e.target.name]: e.target.value, id: uuidv4() })

    }

    const handleClick = e => {
        e.preventDefault()
        if (Object.keys(task).length === 0 || task.name.trim() === '') {
            alert('el campo no puede estar vacio')
            return
        }
        setTasks([...tasks, task])

    }

    const deleteTask = indice => {
        const newTasks = [...tasks]
        newTasks.splice(indice, 1)
        setTasks(newTasks)
    }



    return (
        <>
            <form >
                <input type="text" name="name" onChange={handleChange} placeholder="escribe..." />
                <button onClick={handleClick}>agregar</button>
            </form>
            {
                tasks.map((task, index) => (
                    <Tasks name={task.name} key={task.id} index={index} id={task.id} deleteTask={deleteTask} handleChange={handleChange} setTasks={setTasks}   tasks={tasks}  />
                ))

            }
        </>
    )
}

export default Form



