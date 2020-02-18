import React from 'react'
import { Text } from 'react-native'


export function Todo(props) {
    const id = props.todo.id
    console.log(props)
    const markComplete = () => {
        props.completeTodo(id)
    }
    return(
        <Text
            style={props.todo.completed ?
                    {color:'red'} :
                    {color: 'black'}
                }
            onPress={markComplete}
        > {props.todo.todo} </Text>
    )
}