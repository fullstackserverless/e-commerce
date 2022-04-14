import React from "react"
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { View } from "react-native"
import { RootTabParamList } from "../../../types"

interface Ifavorites {
    navigation: BottomTabNavigationProp<RootTabParamList, 'TAB_BAG'>
}

export const FavoritesScreen: React.FC<Ifavorites> = () => {
    return <View>

    </View>
}