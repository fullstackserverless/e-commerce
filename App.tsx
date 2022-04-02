import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { ButtonOutline, Button, MiniButtonOutline, MiniButton } from './src/components/Buttons'

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 65,
    paddingHorizontal: 15,
    backgroundColor: 'black'
  }
})

export default function App({ }){
  const {scrollView} = styles
  return(
    <ScrollView style={scrollView}>
      <MiniButton title={'button'}/>
      <MiniButtonOutline title={'button'}/>
      <Button title={'button'}/>
      <ButtonOutline title={'button'}/>
    </ScrollView>
  )
}