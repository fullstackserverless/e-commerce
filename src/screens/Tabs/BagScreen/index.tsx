import React from 'react'
import { View } from 'react-native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { RootTabParamList } from '../../../types'
import { Text } from '../../../components'

interface Ibag {
  navigation: BottomTabNavigationProp<RootTabParamList, 'TAB_BAG'>
}

export const BagScreen: React.FC<Ibag> = () => {
  return (
    <View>
      <Text textStyle={'title2'} style={{ color: '#000' }}>
        This is bag screen
      </Text>
    </View>
  )
}
