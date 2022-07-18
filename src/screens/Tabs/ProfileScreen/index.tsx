import React from 'react'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { RootTabParamList } from '../../../types'
import { View } from 'react-native'
import { Text } from '../../../components'

interface Iprofile {
  navigation: BottomTabNavigationProp<RootTabParamList, 'TAB_PROFILE'>
}

export const ProfileScreen: React.FC<Iprofile> = () => {
  return (
    <View>
      <Text textStyle={'title2'} style={{ color: '#000' }}>
        This is Profile screen
      </Text>
    </View>
  )
}
