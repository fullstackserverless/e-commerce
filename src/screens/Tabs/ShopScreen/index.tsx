import React from "react"
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { RootTabParamList } from "../../../types"
import { View } from "react-native"

interface Ishop {
    navigation: BottomTabNavigationProp<RootTabParamList, 'TAB_SHOP'>
}

export const ShopScreen: React.FC<Ishop> = () => {
    return <View>

    </View>
}