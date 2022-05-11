import React from 'react'
<<<<<<< HEAD
import { StyleSheet, Pressable } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { PRIMARY, WHITE } from '../../constants'
import { Text } from '../Text'

const styles = StyleSheet.create({
  container: {
    height: 36,
    width: 135,
    backgroundColor: PRIMARY,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    lignItems: 'stretch',
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  textStyle: {
    color: WHITE,
    fontSize: 15
  }
})

function ButtonReview() {
  const { container } = styles

  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.9 : 1
        },
        container
      ]}
    >
      <MaterialCommunityIcons name="pencil" size={18} color={WHITE} />
      <Text title="Write a review" h7 />
    </Pressable>
  )
}

export { ButtonReview }
=======
import { StyleSheet, Pressable, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { PRIMARY, WHITE } from '../../constants'


const styles = StyleSheet.create ({
    container: {
        height: 36,
        width: 128,
        backgroundColor: PRIMARY,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        lignItems: 'stretch',
        alignSelf: 'stretch',
        alignItems: 'center'
    },
    textStyle: {
        color: WHITE,
        fontSize: 15
    }
})

function ButtonReview (){
    const {container, textStyle} = styles

    return (
        <Pressable
        style={({ pressed }) => [
            {
              opacity: pressed ? 0.9 : 1
            },
            container
          ]}
        >
          <Ionicons name='pencil' size={18} color={WHITE}/>
          <Text style={textStyle}> Write a review</Text>
        </Pressable>
    )
}

export { ButtonReview }
>>>>>>> Tag
