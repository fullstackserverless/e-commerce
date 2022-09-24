import React from 'react'
import { StyleSheet } from 'react-native'
import { WHITE } from '../../constants'
import { Text } from '../'
import { IconHeader } from './IconHeader'
import { SmallTextHeader } from './SmallTextHeader'
import { BigTextHeader } from './BigTextHeader'
import { SearchHeader } from './SearchHeader'

const styles = StyleSheet.create({
  textStyle: {
    color: WHITE
  }
})
interface HeaderT {
  h0?: boolean
  h1?: boolean
  h2?: boolean
  search?: boolean
  onPressSearch?: () => void
  onPress: () => void
  title: string
}

function Header({ h0, h1, h2, onPress, title, onPressSearch, search }: HeaderT) {
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
  if (search === true) {
    return <SearchHeader onPress={onPress} title={title} onPressSearch={onPressSearch} />
  }
  return <Text title="BUG" h0 textStyle={textStyle} />
}

export { Header }
