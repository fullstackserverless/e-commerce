import React from 'react'
import { Text } from '../Text'
import { BLACK, DARK, GRAY, PRIMARY, SUCCESS, WHITE, winWidth } from '../../constants'
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native'
import { Button } from '../Button'
import { Space } from '../Space'
import { vs } from 'react-native-size-matters'

const styles = StyleSheet.create({
  container: {
    height: vs(160),
    width: winWidth * 0.87,
    borderRadius: vs(6),
    backgroundColor: DARK
  },
  orderStyle: {
    color: WHITE
  },
  dateStyle: {
    color: GRAY,
    alignSelf: 'flex-end'
  },
  TNStyle: {
    marginLeft: vs(18)
  },
  deliveredStyle: {
    justifyContent: 'center'
  },
  twoColorTextStyle: {
    flexDirection: 'row'
  },
  leftTextStyle: {
    color: GRAY
  },
  rightTextStyle: {
    color: WHITE
  },
  twoColorTextContainer: {
    justifyContent: 'center'
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: vs(18),
    marginRight: vs(18)
  }
})

interface cardOrderT {
  date: string
  order: string
  TN: string
  quantity: string
  amount: string
  isDelivered: boolean
  onDetails: () => void
}

interface TwoColorTextT {
  leftText: string
  rightText: string
  style?: StyleProp<ViewStyle>
}

function TwoColorText({ leftText, rightText, style }: TwoColorTextT) {
  const { twoColorTextStyle, leftTextStyle, rightTextStyle, twoColorTextContainer } = styles
  return (
    <View style={[twoColorTextStyle, style]}>
      <Text title={leftText} textStyle={leftTextStyle} h6 />
      <View style={twoColorTextContainer}>
        <Text title={rightText} textStyle={rightTextStyle} h3 />
      </View>
    </View>
  )
}

function CardOrder({
  date = '00-00-0000',
  order = '00000',
  TN = 'QW0000',
  quantity = '0',
  amount = '0',
  isDelivered = true,
  onDetails
}: cardOrderT) {
  const { container, orderStyle, dateStyle, TNStyle, deliveredStyle, container2 } = styles

  const deliveredStyleColor = isDelivered ? { color: SUCCESS } : { color: PRIMARY }

  return (
    <View style={container}>
      <Space height={vs(18)} />
      <View style={container2}>
        <Text title={`Order №${order}`} textStyle={orderStyle} h3 />
        <Text title={date} textStyle={dateStyle} h6 />
      </View>
      <Space height={vs(8)} />
      <TwoColorText leftText="Tracking number: " rightText={TN} style={TNStyle} />
      <Space height={vs(3)} />
      <View style={container2}>
        <TwoColorText leftText="Quantity: " rightText={quantity} />
        <TwoColorText leftText="Total Amount: " rightText={`${amount}$`} />
      </View>
      <Space height={vs(8)} />
      <View style={container2}>
        <Button isOutline={true} isSmall={true} title={'Details'} onPress={onDetails} />
        <View style={deliveredStyle}>
          <Text title={isDelivered ? 'Delivered' : 'Undelivered'} textStyle={deliveredStyleColor} h5 />
        </View>
      </View>
    </View>
  )
}

export { CardOrder }
