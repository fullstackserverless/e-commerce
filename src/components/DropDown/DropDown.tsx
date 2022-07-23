import React, { useEffect, useRef, useState } from 'react'
import { View, StyleSheet, Animated, Pressable, ScrollView } from 'react-native'
import { Text } from '../Text'
import { s, vs } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/Fontisto'
import { DARK, GRAY, BLACK, ERROR, SUCCESS, WHITE, PRIMARY } from '../../constants'

interface IdropDown {
  list: string[]
  width: number
  label: string
  onOpen?: () => void
  onClose?: () => void
  onSelect?: (el: string) => void
  duration?: number
}

export const DropDown: React.FC<IdropDown> = props => {
  const { list, width, label, duration, onOpen, onClose, onSelect } = props
  const [selected, setSelected] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [containerHeight, setContainerHeight] = useState<number>(0)
  const [headerHeight, setHeaderHeight] = useState<number>(0)

  const slideAnim = useRef(new Animated.Value(0)).current

  const handleAnim = () => {
    const finalValue = isOpen ? headerHeight : containerHeight + headerHeight
    Animated.timing(slideAnim, {
      toValue: finalValue,
      duration: duration ? duration : 400,
      useNativeDriver: false
    }).start(({ finished }) => {
      if (finished) {
        isOpen ? onClose && onClose() : onOpen && onOpen()
        setIsOpen(pr => !pr)
      }
    })
  }

  useEffect(() => {
    slideAnim.setValue(headerHeight)
  }, [headerHeight])

  const handlePress = () => {
    handleAnim()
  }

  const onAnimLayout = (evt: any) => {
    const headerHeight = evt.nativeEvent.layout.height + vs(10)
    setHeaderHeight(headerHeight)
  }

  const onLayout = (evt: any) => {
    const contentHeight = evt.nativeEvent.layout.height
    setContainerHeight(contentHeight)
  }

  const rotateZ = slideAnim.interpolate({
    inputRange: [
      headerHeight,
      headerHeight + containerHeight - vs(10) > headerHeight
        ? containerHeight + headerHeight - vs(10)
        : containerHeight + headerHeight
    ],
    outputRange: ['0deg', '180deg'],
    extrapolate: 'clamp'
  })

  const _renItem = (item: string, id: number) => {
    return (
      <Pressable
        key={id.toString()}
        style={[dropItemContainer, selected === item && { backgroundColor: GRAY }]}
        onPress={() => {
          setSelected(item)
          onSelect && onSelect(item)
        }}
      >
        <Text h3 textStyle={[textEntry, selected === item && { color: DARK }]} title={item} />
      </Pressable>
    )
  }

  return (
    <Animated.View
      style={[
        container,
        {
          height: slideAnim,
          width: width
        }
      ]}
    >
      <Pressable onPress={handlePress} onLayout={onAnimLayout} style={btnContainer}>
        <Text h3 textStyle={textEntry} title={selected !== '' ? selected : label} />
        <Animated.View style={{ translateY: vs(2), transform: [{ rotateZ }] }}>
          <Icon name="angle-down" color={GRAY} size={s(14)} />
        </Animated.View>
      </Pressable>
      <View style={dropContainer} onLayout={onLayout}>
        {containerHeight >= vs(190) ? (
          <ScrollView nestedScrollEnabled style={{ height: vs(190) }}>
            {list.map((a, id) => _renItem(a, id))}
            <View style={{ height: vs(10) }} />
          </ScrollView>
        ) : (
          <>
            {list.map((a, id) => _renItem(a, id))}
            <View style={{ height: vs(5) }} />
          </>
        )}
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: s(8),
    borderWidth: s(1),
    borderColor: GRAY,
    overflow: 'hidden'
  },
  btnContainer: {
    paddingTop: vs(10),
    paddingHorizontal: s(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textEntry: {
    color: WHITE
  },
  dropContainer: {
    paddingTop: vs(12)
  },
  dropItemContainer: {
    width: '100%',
    paddingHorizontal: s(10),
    alignItems: 'center',
    borderTopColor: GRAY,
    borderTopWidth: vs(1),
    paddingVertical: vs(4)
  }
})
const { container, btnContainer, textEntry, dropContainer, dropItemContainer } = styles
