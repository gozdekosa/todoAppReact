import React, { useState } from 'react'
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import '../App.css'

function Todo({ todo, removeTodo, updateTodo }) {
    const { id, content } = todo;

    const removeTodoFunc = () => {
        removeTodo(id);
    }

    const [editable, setEditable] = useState(false);

    const [newTodo, setNewTodo] = useState(content);

    const updateTodoFunc = () => {
        const request = {
            id: id,
            content: newTodo,
        }
        updateTodo(request);
        setEditable(false);
    }



    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
            <div>
                {
                    editable ?  <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className='todo-input' type="text" /> :  content
                }
            </div>
            <div>
            <IoIosRemoveCircleOutline className='todo-icons delete' onClick={removeTodoFunc} />

            {
                editable ? <FaCheck className='todo-icons' onClick={updateTodoFunc}/> : <MdEdit className='todo-icons edit' onClick={() => setEditable(true)}/>
            }
            
            </div>
        </div>
    )
}

export default Todo