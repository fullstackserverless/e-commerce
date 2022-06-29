import React from 'react'
import { View, Button, StyleSheet, Pressable, Text } from 'react-native'
import { GRAY } from '../../constants'
import { BlurView } from '@react-native-community/blur'
import { PRIMARY } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  modalStyle: {
    backgroundColor: 'transparent',
    width: 170,
    height: 96,
    borderRadius: 8
  },
  containerModal1: {
    width: '100%',
    borderTopWidth: 1,
    borderColor: GRAY,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '50%'
  },
  containerModal2: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%'
  },
  blurStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 8
  },
  textStyle: {
    fontSize: 20
  }
})

interface PopUpT {
  navigation: any
  route: any
}

function PopUp({ navigation }: PopUpT) {
  const { container, modalStyle, containerModal1, containerModal2, blurStyle, textStyle } = styles
  return (
    <View style={container}>
      <BlurView blurType="dark" blurRadius={1} style={blurStyle} />
      <View style={modalStyle}>
        <BlurView blurType="light" blurRadius={1} style={blurStyle} />
        <View style={containerModal2}>
          <Pressable onPress={navigation.goBack}>
            {({ pressed }) => <Text style={[textStyle, { color: pressed ? PRIMARY : 'white' }]}>Add to favorites</Text>}
          </Pressable>
        </View>
        <View style={containerModal1}>
          <Button onPress={navigation.goBack} title="Delete from the list" color={'white'} />
        </View>
      </View>
    </View>
  )
}

export { PopUp }
