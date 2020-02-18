import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'

export function TodoForm(props) {
    const [form, setForm] = useState('')

    const setTodo = () => {
        props.addTodo(form)
        setForm('')
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
        </View>
    )
}