import React from "react"
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { RootTabParamList } from "../../../types"
import { View } from "react-native"

interface Iprofile {
    navigation: BottomTabNavigationProp<RootTabParamList, 'TAB_PROFILE'>
}

export const ProfileScreen: React.FC<Iprofile> = () => {
    return <View>

    </View>
}