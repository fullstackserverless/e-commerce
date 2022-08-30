import React, { useRef } from 'react'
import { View, StyleSheet } from 'react-native'
import { Modalize } from 'react-native-modalize'
import { vs } from 'react-native-size-matters'
import { Button, Text, Space, Tag } from '../../components'
import { BLACK, WHITE, GRAY } from '../../constants'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  selectorStyle: {
    backgroundColor: BLACK,
    height: '50%'
  },
  textStyle: {
    color: WHITE,
    alignSelf: 'center'
  },
  styleSize: {
    color: WHITE
  },
  sizeInfo: {
    width: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: GRAY,
    padding: vs(16),
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  buttonStyle: {
    alignItems: 'center'
  }
})
function Selector() {
  const { selectorStyle, textStyle, container, sizeInfo, styleSize, buttonStyle } = styles
  const modalizeRef = useRef<Modalize>(null)

  function onOpen() {
    modalizeRef.current?.open()
  }

  return (
    <>
      <Button isOutline={false} isSmall={false} title="Select size" onPress={onOpen} />
      <Modalize modalStyle={selectorStyle} modalHeight={vs(446)} ref={modalizeRef}>
        <Space height={10} />
        <Text title={'Select size'} textStyle={textStyle} h1 />
        <Space height={10} />
        <View style={container}>
          <View>
            <Tag isOutline={true} isSmall={false} title={'XS'} isWhiteText={true} />
            <Space height={10} />
            <Tag isOutline={true} isSmall={false} title={'L'} isWhiteText={true} />
          </View>
          <View>
            <Tag isOutline={true} isSmall={false} title={'S'} isWhiteText={true} />
            <Space height={10} />
            <Tag isOutline={true} isSmall={false} title={'XL'} isWhiteText={true} />
            <Space height={15} />
          </View>
          <View>
            <Tag isOutline={true} isSmall={false} title={'M'} isWhiteText={true} />
          </View>
        </View>
        <View style={sizeInfo}>
          <Text title={'Size info'} h4 textStyle={styleSize} />
          <Text title={'>'} h4 textStyle={styleSize} />
        </View>
        <Space height={15} />
        <View style={buttonStyle}>
          <Button isOutline={false} isSmall={false} title="Select size" onPress={onOpen} />
        </View>
      </Modalize>
    </>
  )
}

export { Selector }
