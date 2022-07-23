import React from 'react'
import { Text } from '../Text'
import { BLACK, DARK, GRAY, PRIMARY, SUCCESS, WHITE } from '../../constants'
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native'
import { Button } from '../Button'
import { Space } from '../Space'

const styles = StyleSheet.create({
  container: {
    height: 164,
    width: 343,
    borderRadius: 8,
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
    marginLeft: 20
  },
  quantityStyle: {},
  amountStyle: {},
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
    marginLeft: 20,
    marginRight: 20
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
  style: StyleProp<ViewStyle>
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
  const { container, orderStyle, dateStyle, TNStyle, quantityStyle, amountStyle, deliveredStyle, container2 } = styles

  const deliveredStyleColor = isDelivered ? { color: SUCCESS } : { color: PRIMARY }

  return (
    <View style={container}>
      <Space height={20} />
      <View style={container2}>
        <Text title={`Order №${order}`} textStyle={orderStyle} h3 />
        <Text title={date} textStyle={dateStyle} h6 />
      </View>
      <Space height={10} />
      <TwoColorText leftText="Tracking number: " rightText={TN} style={TNStyle} />
      <Space height={5} />
      <View style={container2}>
        <TwoColorText leftText="Quantity: " rightText={quantity} style={quantityStyle} />
        <TwoColorText leftText="Total Amount: " rightText={`${amount}$`} style={amountStyle} />
      </View>
      <Space height={10} />
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
