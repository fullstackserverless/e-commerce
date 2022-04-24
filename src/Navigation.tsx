import React, { useEffect } from 'react'
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native'
import {
    createNativeStackNavigator, NativeStackNavigationProp
} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { RootStackParamList, RootTabParamList } from './types'
import { Header, TabBar } from './components'
import {
    ExamplesScreen, HomeScreen, BagScreen, ProfileScreen,
    FavoritesScreen, ShopScreen
} from './screens'
import { BLACK, GRAY } from './constants'
import SystemNavigationBar from 'react-native-system-navigation-bar'
import { StatusBar } from 'react-native'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const Navigation: React.FC<{}> = () => {
    useEffect(() => {
        SystemNavigationBar.setNavigationColor(BLACK, true)
    }, [])

    return <NavigationContainer>
        {/* When you change "initialRouteName", 
        change the "initialScreenProp" in the headerHelper */}
        <Stack.Navigator screenOptions={({ route }) => {
            return {
                // Do not touch when replacing the initial screen
                title: getFocusedRouteNameFromRoute(route),
                header: (props) => <Header {...props} />,
            }
        }}>
            <Stack.Screen name="MAIN" component={TabNav} />
            <Stack.Screen name="EXAMPLES" component={ExamplesScreen} />
        </Stack.Navigator>
    </NavigationContainer>
}

const TabNavigator = createBottomTabNavigator<RootTabParamList>()

interface Itab {
    navigation: NativeStackNavigationProp<RootStackParamList, 'MAIN'>
}

const TabNav: React.FC<Itab> = () => {
    return <TabNavigator.Navigator initialRouteName={'TAB_HOME'}
        tabBar={(props) => <TabBar {...props} />} backBehavior='history' screenOptions={{
            headerShown: false
        }} >
        <TabNavigator.Screen name="TAB_HOME" component={HomeScreen}
            options={{ title: 'Home' }} />
        <TabNavigator.Screen name="TAB_SHOP" component={ShopScreen}
            options={{ title: 'Shop' }} />
        <TabNavigator.Screen name="TAB_BAG" component={BagScreen}
            options={{ title: 'Bag' }} />
        <TabNavigator.Screen name="TAB_FAVORITES" component={FavoritesScreen}
            options={{ title: 'Favorites' }} />
        <TabNavigator.Screen name="TAB_PROFILE" component={ProfileScreen}
            options={{ title: 'Profile' }} />
    </TabNavigator.Navigator>
}