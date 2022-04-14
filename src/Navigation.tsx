import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
    ExamplesScreen, HomeScreen, BagScreen, ProfileScreen,
    FavoritesScreen, ShopScreen
} from './screens'
import { RootStackParamList, RootTabParamList } from './types'
import { TabBar } from './components'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const Navigation: React.FC<undefined> = () => {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="MAIN" component={TabNav} options={{
                headerShown: false
            }} />
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
        tabBar={TabBar}>
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