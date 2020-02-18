import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Todo } from './Todo'
import { TodoForm } from './TodoForm'

export function TodoList() {
    const [todos, setTodos] = useState([])
    
    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo ])
    }

    return (
        <View style={{display:'flex', alignItems: 'center'}}>
            
            <TodoForm  addTodo={addTodo} />
            <Text style={{fontSize:20, fontWeight: 'bold', marginTop: 20}} >Todo List</Text>
            {todos.map(item => <Todo todo={item} />)}
        </View>
    )
}