import React from 'react'
import Todo from './Todo'

function TodoList({todos, removeTodo, updateTodo}) {
  return (
    <div style={{ width: '100%', marginTop: '30px' }}>
        {   todos && todos.map((todo) => (
            <Todo removeTodo={removeTodo} key={todo.id} todo={todo} updateTodo={updateTodo} />  
            ))
        }
    </div>
  )
}

export default TodoList