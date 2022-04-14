import React from "react"
import { ScrollView } from "react-native"
import { BLACK, WHITE } from "../../constants"
import {
    Text, ExampleDropDown, ExampleForm,
    ExampleRange, ExampleRating, SearchExample,
} from "../../components"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../types"

interface Iexamples {
    navigation: NativeStackNavigationProp<RootStackParamList, 'EXAMPLES'>
}

export const ExamplesScreen: React.FC<Iexamples> = () => {
    return <ScrollView style={{ backgroundColor: BLACK }}>
        <Text textStyle={'title1'} style={{
            color: WHITE,
            paddingBottom: 10
        }}>Buttons</Text>
        <ExampleRating />
        <ExampleForm />
        <ExampleDropDown />
        <ExampleRange />
        <SearchExample />
    </ScrollView>
}