import React, { useRef } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Modalize } from 'react-native-modalize'
import { BLACK, DARK, PRIMARY, WHITE } from '../../constants'
import { Text, Filter, Space } from '../index'

const styles = StyleSheet.create({
  modalStyle: {
    backgroundColor: DARK
  },
  textStyle: {
    color: 'white'
  },
  container: {
    alignItems: 'center'
  },
  container2: {
    alignSelf: 'flex-start'
  },
  pressableContainer: {
    height: 40,
    justifyContent: 'center',
    width: 500
  },
  textStylePressable: {
    marginLeft: 10
  }
})

function FilterBottom() {
  const { container, modalStyle, textStyle, container2, pressableContainer, textStylePressable } = styles
  const modalizeRef = useRef<Modalize>(null)

  function onOpen() {
    modalizeRef.current?.open()
  }

  function onClose() {
    modalizeRef.current?.close()
  }

  return (
    <>
      <Filter onPressApps={() => {}} onPressPrice={onOpen} onPressFilter={() => {}} />
      <Modalize modalStyle={modalStyle} modalHeight={300} ref={modalizeRef}>
        <View style={container}>
          <Space height={10} />
          <Text title="Sort by" h2 textStyle={textStyle} />
          <Space height={10} />
          <View style={container2}>
            <Pressable
              onPressOut={onClose}
              style={({ pressed }) => [{ backgroundColor: pressed ? PRIMARY : DARK }, pressableContainer]}
            >
              {({ pressed }) => (
                <Text title={'Popular'} textStyle={[textStylePressable, { color: pressed ? BLACK : WHITE }]} h3 />
              )}
            </Pressable>
            <Pressable
              onPressOut={onClose}
              style={({ pressed }) => [{ backgroundColor: pressed ? PRIMARY : DARK }, pressableContainer]}
            >
              {({ pressed }) => (
                <Text title={'Newest'} textStyle={[textStylePressable, { color: pressed ? BLACK : WHITE }]} h3 />
              )}
            </Pressable>
            <Pressable
              onPressOut={onClose}
              style={({ pressed }) => [{ backgroundColor: pressed ? PRIMARY : DARK }, pressableContainer]}
            >
              {({ pressed }) => (
                <Text
                  title={'Customer review'}
                  textStyle={[textStylePressable, { color: pressed ? BLACK : WHITE }]}
                  h3
                />
              )}
            </Pressable>
            <Pressable
              onPressOut={onClose}
              style={({ pressed }) => [{ backgroundColor: pressed ? PRIMARY : DARK }, pressableContainer]}
            >
              {({ pressed }) => (
                <Text
                  title={'Price: lowest to high'}
                  textStyle={[textStylePressable, { color: pressed ? BLACK : WHITE }]}
                  h3
                />
              )}
            </Pressable>
            <Pressable
              onPressOut={onClose}
              style={({ pressed }) => [{ backgroundColor: pressed ? PRIMARY : DARK }, pressableContainer]}
            >
              {({ pressed }) => (
                <Text
                  title={'Price: highest to low'}
                  textStyle={[textStylePressable, { color: pressed ? BLACK : WHITE }]}
                  h3
                />
              )}
            </Pressable>
          </View>
        </View>
      </Modalize>
    </>
  )
}

export { FilterBottom }
