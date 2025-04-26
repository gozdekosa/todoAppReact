import React, { useState } from 'react'
import '../App.css'

function TodoCreate({onCreateTodo}) {
    const [newTodo, setNewTodo] = useState('');

    const clearInput = () => {
        setNewTodo('');
    }

    const createTodo = () => {
        if(!newTodo) return;
        const request = {
            id: Math.floor(Math.random() * 999999),
            content: newTodo,
        }
        onCreateTodo(request);
        clearInput();
    }

    return (
        <div className='todo-create'>
            <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className='todo-input' type="text" placeholder="Enter a new task" />
            <button onClick={createTodo} className='todo-create-button' type="button">Add Task</button>
        </div>
    )
    }

export default TodoCreate