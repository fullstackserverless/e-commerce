import React from 'react'
import { StyleSheet } from 'react-native'
import { WHITE } from '../../constants'
import { Text } from '../'
import { IconHeader } from './IconHeader'
import { SmallTextHeader } from './SmallTextHeader'
import { BigTextHeader } from './BigTextHeader'

const styles = StyleSheet.create({
  textStyle: {
    color: WHITE
  }
})
interface HeaderT {
  h0?: boolean
  h1?: boolean
  h2?: boolean
  onPress: () => void
  title: string
}

function Header({ h0, h1, h2, onPress, title }: HeaderT) {
  const { textStyle } = styles
  if (h0 === true) {
    return <IconHeader onPress={onPress} />
  }
  if (h1 === true) {
    return <BigTextHeader onPress={onPress} title={title} />
  }
  if (h2 === true) {
    return <SmallTextHeader onPress={onPress} title={title} />
  }
  return <Text title="BUG" h0 textStyle={textStyle} />
}

export { Header }
