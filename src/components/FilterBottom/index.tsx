import React, { useRef } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Modalize } from 'react-native-modalize'
import { vs } from 'react-native-size-matters'
import { BLACK, DARK, PRIMARY, WHITE, winWidth } from '../../constants'
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
    height: vs(36),
    justifyContent: 'center',
    width: '100%'
  },
  textStylePressable: {
    marginLeft: winWidth * 0.015
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
      <Filter onPressApps={() => {}} onPressFilter={onOpen} onPressPrice={() => {}} />
      <Modalize modalStyle={modalStyle} modalHeight={vs(296)} ref={modalizeRef}>
        <View style={container}>
          <Space height={vs(6)} />
          <Text title="Sort by" h2 textStyle={textStyle} />
          <Space height={vs(6)} />
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
