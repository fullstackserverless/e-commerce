import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { BLACK, WHITE } from '../../constants'
import { Text, Space, PressableNavigation, NameCard } from '../../components'
import { vs } from 'react-native-size-matters'

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    backgroundColor: BLACK
  },
  container: {
    backgroundColor: BLACK,
    width: '100%',
    height: '100%'
  },
  pressableContainer: {
    alignItems: 'flex-end',
    paddingRight: vs(16)
  },
  textStyle: {
    paddingLeft: 20
  },
  absoluteContainer: {
    position: 'absolute'
  }
})

interface MyProfileScreenT {
  orders: string
  adresses: string
  onPressSettings: () => void
  onPressAdresses: () => void
  onPressOrders: () => void
  card: string
  onPressCard: () => void
  promocodes: string
  onPressPromocodes: () => void
  reviews: string
  onPressReviews: () => void
  onPressSearch: () => void
  imageUri: string
  nameTitle: string
  mailTitle: string
}

function MyProfileScreen({
  orders = '0',
  adresses = '0',
  onPressAdresses,
  onPressOrders,
  card,
  onPressCard,
  promocodes,
  onPressPromocodes,
  reviews,
  onPressReviews,
  onPressSettings,
  onPressSearch,
  imageUri,
  nameTitle,
  mailTitle
}: MyProfileScreenT) {
  const { safeAreaViewStyle, container, pressableContainer, textStyle } = styles
  return (
    <SafeAreaView style={safeAreaViewStyle}>
      <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }, pressableContainer]} onPress={onPressSearch}>
        <Ionicons name={'search'} color={WHITE} size={vs(26)} />
      </Pressable>
      <Text title={'My profile'} h0 textStyle={textStyle} />
      <NameCard imageUri={imageUri} nameTitle={nameTitle} mailTitle={mailTitle} />
      <View style={container}>
        <PressableNavigation
          nameTitle={'My orders'}
          infoTitle={`Alreade have ${orders} orders`}
          onPress={onPressOrders}
        />
        <PressableNavigation
          nameTitle={'Shipping adresses'}
          infoTitle={`${adresses} adresses`}
          onPress={onPressAdresses}
        />
        <PressableNavigation nameTitle={'Payment methods'} infoTitle={`${card}`} onPress={onPressCard} />
        <PressableNavigation nameTitle={'Promocodes'} infoTitle={promocodes} onPress={onPressPromocodes} />
        <PressableNavigation
          nameTitle={'My reviews'}
          infoTitle={`Reviews for ${reviews} item`}
          onPress={onPressReviews}
        />
        <PressableNavigation nameTitle={'Settings'} infoTitle={'Notifications, password'} onPress={onPressSettings} />
      </View>
    </SafeAreaView>
  )
}
export { MyProfileScreen }
