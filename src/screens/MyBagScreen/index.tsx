import React, { useState, useReducer } from 'react'
import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { vs } from 'react-native-size-matters'
import { CardProductBag, Header, Button, Space } from '../../components'
import { BLACK } from '../../constants'

const styles = StyleSheet.create({
  container: {
    backgroundColor: BLACK,
    width: '100%',
    height: '80%',
    alignContent: 'center'
  },
  safeAreaViewStyle: {
    backgroundColor: BLACK
  },
  renderItemStyle: {
    backgroundColor: BLACK,
    alignItems: 'center'
  },
  containerBottom: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

// interface CountT {
//   one: number
//   two: number
//   three: number
// }

const bagId = [
  {
    id: '0',
    price: '30',
    color: 'white',
    imageUri: 'https://demotivation.ru/wp-content/uploads/2020/05/255095-Sepik-2048x1383.jpg',
    clothes: 'example',
    size: 'example',
    count: 0
  },
  {
    id: '1',
    price: '30',
    color: 'white',
    imageUri: 'https://demotivation.ru/wp-content/uploads/2020/05/255095-Sepik-2048x1383.jpg',
    clothes: 'example',
    size: 'example',
    count: 0
  },
  {
    id: '2',
    price: '30',
    color: 'white',
    imageUri: 'https://demotivation.ru/wp-content/uploads/2020/05/255095-Sepik-2048x1383.jpg',
    clothes: 'example',
    size: 'example',
    count: 0
  }
]

const initialState = { count: 0 }

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
  }
}

function MyBag({ navigation }: any) {
  const { safeAreaViewStyle, container, containerBottom } = styles

  const [state, dispatch] = useReducer(reducer, initialState)

  // [
  //   { id: 0, count: 0 }, { id: 1, count: 0 }, { id: 2, count: 0 }
  // ]
  // const minus1 = () =>
  //   setCount(count => {
  //     return {
  //       ...count,
  //       [value]: count[value] ? count[value] - 1 : count[value] + 0
  //     }
  //   })
  // const plus1 = () =>
  //   setCount(count => {
  //     return {
  //       ...count,
  //       [item.id]: count[value] + 1
  //     }
  //   })

  const increment = dispatch(initialState => {
    return {
      ...initialState,
      initialState
    }
  })
  const renderItem = ({ item }: any) => {
    const { renderItemStyle } = styles
    return (
      <View style={renderItemStyle}>
        <CardProductBag
          imageUri={item.imageUri}
          size={item.size}
          price={item.price}
          color={item.color}
          clothes={item.clothes}
          count={item.count}
          onPressMinus={() => {}}
          onPressPlus={() => {}}
        />
        <Space height={vs(18)} />
      </View>
    )
  }
  console.log(initialState.count)
  return (
    <SafeAreaView style={safeAreaViewStyle}>
      <Header search title={'My Bag'} onPress={navigation.goBack} />
      <FlatList style={container} data={bagId} renderItem={renderItem} />
      <View style={containerBottom}>
        <Button isOutline={false} isSmall={false} title={'CHECK OUT'} onPress={() => {}} />
      </View>
    </SafeAreaView>
  )
}

export { MyBag }
