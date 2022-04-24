import React from "react"
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { RootStackParamList, RootTabParamList } from "../../../types"
import { Pressable, View } from "react-native"
import { Text } from "../../../components"

interface Ihome {
    navigation: BottomTabNavigationProp<RootTabParamList & RootStackParamList, 'TAB_HOME'>
}

export const HomeScreen: React.FC<Ihome> = ({
    navigation
}) => {
    return <View>
        <Pressable>
            <Text onPress={() => navigation.navigate('EXAMPLES')}
                textStyle={'title2'} style={{ color: '#000' }}>Go to examples</Text>
        </Pressable>
    </View>
}