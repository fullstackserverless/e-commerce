import React from "react"
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { RootTabParamList } from "../../../types"
import { View } from "react-native"

interface Ihome {
    navigation: BottomTabNavigationProp<RootTabParamList, 'TAB_HOME'>
}

export const HomeScreen: React.FC<Ihome> = () => {
    return <View>

    </View>
}