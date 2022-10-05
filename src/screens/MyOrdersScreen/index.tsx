import React, { useMemo, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { vs } from 'react-native-size-matters'
import { CardOrder, Space, Header, TagSmall } from '../../components'
import { BLACK } from '../../constants'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: vs(45),
    backgroundColor: BLACK,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: vs(16),
    paddingRight: vs(16),
    paddingTop: vs(5)
  },
  safeAreaViewContainer: {
    backgroundColor: BLACK
  },
  flatListContainer: {
    backgroundColor: BLACK,
    height: '100%',
    alignSelf: 'center'
  },
  renderItemContainer: {
    backgroundColor: BLACK
  }
})

const ordersArray = [
  {
    order: '1',
    orderId: '1',
    date: '00-00-0000',
    TN: '0000',
    quantity: '1',
    amount: '1',
    isDelivered: true,
    onDetails: () => {}
  },
  {
    order: '2',
    orderId: '2',
    date: '00-00-0000',
    TN: '0000',
    quantity: '1',
    amount: '1',
    isDelivered: false,
    onDetails: () => {}
  },
  {
    order: '3',
    orderId: '3',
    date: '00-00-0000',
    TN: '0000',
    quantity: '1',
    amount: '1',
    isDelivered: true,
    onDetails: () => {}
  },
  {
    order: '4',
    orderId: '4',
    date: '00-00-0000',
    TN: '0000',
    quantity: '1',
    amount: '1',
    isDelivered: false,
    onDetails: () => {}
  }
]

function MyOrdersScreen({ navigation }: any) {
  const { container, safeAreaViewContainer, flatListContainer } = styles

  const [tagValueDelivered, setTagValueDelivered] = useState(true)
  const [tagValueUndelivered, setTagValueUndelivered] = useState(false)

  const toggleTagDelivered = () => {
    return setTagValueDelivered(prevState => !prevState), setTagValueUndelivered(prevState => !prevState)
  }
  const toggleTagUndelivered = () => {
    return setTagValueUndelivered(prevState => !prevState), setTagValueDelivered(prevState => !prevState)
  }
  const renderItem = ({ item }: any) => {
    const { renderItemContainer } = styles
    return (
      <View style={renderItemContainer}>
        <CardOrder
          onDetails={item.onDetails}
          isDelivered={item.isDelivered}
          order={item.order}
          date={item.orderNum}
          amount={item.amount}
          quantity={item.quantity}
          TN={item.TN}
        />
        <Space height={vs(18)} />
      </View>
    )
  }

  const renderData = useMemo(() => {
    return ordersArray.filter(i => (i.isDelivered === tagValueUndelivered ? null : i))
  }, [tagValueDelivered])

  return (
    <SafeAreaView style={safeAreaViewContainer}>
      <Header search onPress={navigation.goBack} title={'My Orders'} />
      <View style={container}>
        <TagSmall title={'Delivered'} onToggle={toggleTagDelivered} isVisibleBorder={tagValueDelivered} />
        <TagSmall title={'Undelivered'} onToggle={toggleTagUndelivered} isVisibleBorder={tagValueUndelivered} />
      </View>
      <FlatList
        data={renderData}
        style={flatListContainer}
        renderItem={renderItem}
        keyExtractor={item => item.orderId}
        ListFooterComponent={<Space height={vs(110)} />}
      />
    </SafeAreaView>
  )
}

export { MyOrdersScreen }
