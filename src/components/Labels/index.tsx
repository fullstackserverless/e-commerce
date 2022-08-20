import React from 'react'
import { BLACK, SALE, WHITE, winWidth } from '../../constants'
import { StyleSheet, View } from 'react-native'
import { Text } from '../Text'
import { vs } from 'react-native-size-matters'

const styles = StyleSheet.create({
  container: {
    width: winWidth * 0.1,
    height: vs(22),
    borderRadius: vs(27),
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
