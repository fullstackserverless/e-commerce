import React from 'react'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { RootTabParamList } from '../../../types'
import { View } from 'react-native'
import { Text } from '../../../components'

interface Ishop {
  navigation: BottomTabNavigationProp<RootTabParamList, 'TAB_SHOP'>
}

export const ShopScreen: React.FC<Ishop> = () => {
  return (
    <View>
      <Text textStyle={'title1'} style={{ color: '#000' }}>
        This is Shop screen!
      </Text>
    </View>
  )
}
