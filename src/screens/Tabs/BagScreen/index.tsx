import React from "react"
import { View } from "react-native"
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { RootTabParamList } from "../../../types"

interface Ibag {
    navigation: BottomTabNavigationProp<RootTabParamList, 'TAB_BAG'>
}

export const BagScreen: React.FC<Ibag> = () => {
    return <View>

    </View>
}