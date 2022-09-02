import React, { useRef, useState } from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { Modalize } from 'react-native-modalize'
import { vs } from 'react-native-size-matters'
import { Button, Text, Space, TagBig } from '../../components'
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

interface ColorFilterValueT {
  one: false
  two: false
  three: false
  four: false
  five: false
  six: false
}

function Selector() {
  const { selectorStyle, textStyle, container, sizeInfo, styleSize, buttonStyle } = styles
  const modalizeRef = useRef<Modalize>(null)
  const [isActiveBorder, setActiveBorder] = useState<ColorFilterValueT>({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false
  })

  function onOpen() {
    modalizeRef.current?.open()
  }

  const toggleColorFilter = (value: keyof ColorFilterValueT) =>
    setActiveBorder(prevState => {
      return {
        ...prevState,
        [value]: !prevState[value]
      }
    })
  return (
    <>
      <Button isOutline={false} isSmall={false} title="Select size" onPress={onOpen} />
      <Modalize modalStyle={selectorStyle} modalHeight={vs(446)} ref={modalizeRef}>
        <Space height={10} />
        <Text title={'Select size'} textStyle={textStyle} h1 />
        <Space height={10} />
        <View style={container}>
          <View>
            <TagBig title={'XS'} onToggle={() => toggleColorFilter('one')} isInvisibleBorder={isActiveBorder['one']} />
            <Space height={10} />
            <TagBig title={'L'} onToggle={() => toggleColorFilter('two')} isInvisibleBorder={isActiveBorder['two']} />
          </View>
          <View>
            <TagBig
              title={'S'}
              onToggle={() => toggleColorFilter('three')}
              isInvisibleBorder={isActiveBorder['three']}
            />
            <Space height={10} />
            <TagBig
              title={'XL'}
              onToggle={() => toggleColorFilter('four')}
              isInvisibleBorder={isActiveBorder['four']}
            />
            <Space height={15} />
          </View>
          <View>
            <TagBig title={'M'} onToggle={() => toggleColorFilter('five')} isInvisibleBorder={isActiveBorder['five']} />
          </View>
        </View>
        <Pressable style={({ pressed }) => [sizeInfo, { opacity: pressed ? 0.8 : 1 }]}>
          <Text title={'Size info'} h4 textStyle={styleSize} />
          <Text title={'>'} h4 textStyle={styleSize} />
        </Pressable>
        <Space height={15} />
        <View style={buttonStyle}>
          <Button isOutline={false} isSmall={false} title="Select size" onPress={onOpen} />
        </View>
      </Modalize>
    </>
  )
}

export { Selector }
