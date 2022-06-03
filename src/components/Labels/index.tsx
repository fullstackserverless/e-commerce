import React from 'react'
import { BLACK, SALE, WHITE } from '../../constants'
import { StyleSheet, View } from 'react-native'
import { Text } from '../Text'

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 24,
    borderRadius: 29,
    alignItems: 'center',
    justifyContent: 'center'
  },
  colorDark: {
    backgroundColor: BLACK
  },
  color: {
    backgroundColor: SALE
  },
  textStyle: {
    color: WHITE
  }
})

interface LabelsT {
  isSaleOrNew: boolean
  title: string
}

function Labels({ isSaleOrNew, title }: LabelsT) {
  const { container, colorDark, color, textStyle } = styles
  const saleOrNew = isSaleOrNew ? color : colorDark

  return (
    <View style={[saleOrNew, container]}>
      <Text title={title} h5 textStyle={textStyle} />
    </View>
  )
}

export { Labels }
