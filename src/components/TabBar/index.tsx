import React from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { Pressable, StyleSheet, View } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import { BLACK, GRAY, PRIMARY, winWidth } from '../../constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconM from 'react-native-vector-icons/MaterialIcons'
import { Text } from '../Text'

const icons = ['home', 'cart', 'shopping-bag', 'cards-heart', 'account-circle']

export const TabBar: React.FC<BottomTabBarProps> = ({
    state, descriptors, navigation
}) => {
    const IconSize = (winWidth / 5) - s(10) - s(17)
    return <View style={container}>
        {state.routes.map((route, id) => {
            const { options } = descriptors[route.key]
            const isFocused = state.index === id

            const onPress = () => {
                const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                    // Опция `merge: true` гарантирует, что параметры внутри экрана вкладки будут сохранены.
                    navigation.navigate("MAIN", { screen: route.name, merge: true });
                }
            }

            return <Pressable onPress={onPress}
                key={route.key.toString()} style={btnSection}>
                {id === 2 ?
                    <IconM name={icons[id]} color={isFocused ? PRIMARY : GRAY}
                        size={IconSize} />
                    :
                    <Icon name={icons[id]} color={isFocused ? PRIMARY : GRAY}
                        size={IconSize} />
                }
                <Text textStyle={'bod2'} style={{ color: GRAY }}>
                    {options.title}
                </Text>
            </Pressable>
        })}
    </View>
}

const styles = StyleSheet.create({
    container: {
        height: vs(90),
        paddingBottom: vs(30),
        backgroundColor: BLACK,
        width: '100%',
        flexDirection: 'row',
        borderTopLeftRadius: vs(12),
        borderTopRightRadius: vs(12),
        paddingTop: vs(10),
    },
    btnSection: {
        flex: 1,
        marginHorizontal: s(5),
        alignItems: 'center'
    }
})
const { container, btnSection } = styles