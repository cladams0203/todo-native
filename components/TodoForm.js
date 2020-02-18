import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'

export function TodoForm(props) {
    const [form, setForm] = useState('')

    const setTodo = () => {
        props.addTodo({
            id: Date.now(),
            todo: form,
            completed: false
        })
        setForm('')
    }

    const clearTodo = () => {
        props.clearTodos()
    }

    return (
        <View style={{display:'flex', alignItems: 'center', marginTop: 30}} >
            <TextInput
                style={{ 
                    marginBottom: 30,
                    width: 300,  
                    height: 40, 
                    borderColor: 'gray', 
                    borderWidth: 1}}
                onChangeText={text => setForm(text)}
                value={form}
            ></TextInput>
            <Button 
            title={'Add Todo'}
            onPress={setTodo}
            ></Button>
            <View style={{marginTop:20}} >
            <Button
                onPress={clearTodo}
                color='red'
                title={'Clear Selected'}
            ></Button>
            </View>
            
        </View>
    )
}