import React from 'react'

import { Pressable, StyleSheet, View } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import { BLACK, GRAY, PRIMARY, winWidth } from '../../constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconM from 'react-native-vector-icons/MaterialIcons'
import { Text } from '../Text'
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs'

const icons = ['home', 'cart', 'shopping-bag', 'cards-heart', 'account-circle']

export const TabBar: React.FC<MaterialTopTabBarProps> = ({ state, descriptors, navigation }) => {
  const IconSize = winWidth / 5 - s(10) - s(24)

  return (
    <View style={[container, { paddingBottom: vs(17) }]}>
      {state.routes.map((route, id) => {
        const { options } = descriptors[route.key]
        const isFocused = state.index === id

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            // Опция `merge: true` гарантирует, что параметры внутри экрана вкладки будут сохранены.
            navigation.navigate('MAIN', {
              screen: route.name,
              merge: true,
              title: options.title
            })
          }
        }

        return (
          <Pressable onPress={onPress} key={route.key.toString()} style={btnSection}>
            {id === 2 ? (
              <IconM name={icons[id]} color={isFocused ? PRIMARY : GRAY} size={IconSize} />
            ) : (
              <Icon name={icons[id]} color={isFocused ? PRIMARY : GRAY} size={IconSize} />
            )}
            <Text textStyle={'bod2'} style={{ color: GRAY }}>
              {options.title}
            </Text>
          </Pressable>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BLACK,
    width: '100%',
    flexDirection: 'row',
    borderTopLeftRadius: vs(12),
    borderTopRightRadius: vs(12),
    paddingTop: vs(10),
    translateY: vs(2)
  },
  btnSection: {
    flex: 1,
    marginHorizontal: s(5),
    alignItems: 'center'
  }
})
const { container, btnSection } = styles
