import React from 'react'
import { StyleSheet, View } from 'react-native'
import { s } from 'react-native-size-matters'
import { BLACK } from '../../constants'
import { DropDown } from './'

const dataList1 = ['one', 'two', 'three']
const dataList2 = [
  'homework',
  'school',
  'park "Sarmat"',
  'React Native',
  'Boy',
  'girl',
  'Man',
  'MacBook)',
  'Apple',
  'Audio'
]
export const ExampleDropDown = () => {
  return (
    <View style={style.container}>
      <DropDown label="Tag" onOpen={() => {}} onClose={() => []} onSelect={() => {}} list={dataList1} width={s(100)} />
      <DropDown
        label="Some items"
        onOpen={() => {}}
        onClose={() => []}
        onSelect={() => {}}
        list={dataList2}
        width={s(180)}
      />
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    backgroundColor: BLACK,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
