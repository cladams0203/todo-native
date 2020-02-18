import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Todo } from './Todo'
import { TodoForm } from './TodoForm'

export function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo ])
    }

    const completeTodo = (id) => {
        setTodos(todos.map(item => {
            if(item.id === id) {
                return {...item, completed: !item.completed}
            }else{
                return item
            }
        }))
    }

    const clearTodos = () => {
        setTodos(todos.filter(item => item.completed === false))
    }

    return (
        <View style={{display:'flex', alignItems: 'center'}}>
            
            <TodoForm  addTodo={addTodo} clearTodos={clearTodos} />
            <Text style={{fontSize:20, fontWeight: 'bold', marginTop: 20}} >Todo List</Text>
            {todos.map((item, i) => <Todo completeTodo={completeTodo} todo={item} key={i} />)}
        </View>
    )
}