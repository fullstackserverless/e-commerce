import React from 'react'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { View } from 'react-native'
import { RootTabParamList } from '../../../types'
import { Text } from '../../../components'

interface Ifavorites {
  navigation: BottomTabNavigationProp<RootTabParamList, 'TAB_BAG'>
}

export const FavoritesScreen: React.FC<Ifavorites> = () => {
  return (
    <View>
      <Text textStyle={'title2'} style={{ color: '#000' }}>
        This is Favorites screen
      </Text>
    </View>
  )
}
