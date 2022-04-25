import React from 'react'
import { StyleSheet, Pressable, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { PRIMARY, WHITE } from '../../constants'


const styles = StyleSheet.create ({
    container: {
        height: 52,
        width: 52,
        backgroundColor: PRIMARY,
        borderRadius: 100
    },
    iconStyle: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})

function ButtonPhoto (){
    const {container, iconStyle} = styles

    return (
        <Pressable
        style={({ pressed }) => [
            {
              opacity: pressed ? 0.9 : 1
            },
            container,
            iconStyle
          ]}
        >
          <Ionicons name='camera' size={30} color={WHITE}/>
        </Pressable>
    )
}

export { ButtonPhoto }