import React from "react"
import { NativeStackHeaderProps } from "@react-navigation/native-stack"
import { Pressable, StatusBar, StyleSheet, View } from "react-native"
import { BLACK, WHITE } from "../../constants"
import Icon from "react-native-vector-icons/Entypo"
import { s, vs } from "react-native-size-matters"
import { Text } from "../Text"
import { getHeaderProp } from "./headerHelper"

const Header: React.FC<NativeStackHeaderProps> = ({
    options, route, navigation
}) => {
    const { title, size, visible } =
        getHeaderProp(options.title ? options.title : route.name)
    return <>{visible && <View style={[container,
        size === 'big' ? bigContainer : smallContainer]}>
        <StatusBar backgroundColor={BLACK} barStyle='light-content' />
        {navigation.canGoBack() &&
            <Pressable onPress={() => navigation.goBack()}
                style={size === 'big' ? goBackBtnBig : goBackBtnSmall}>
                <Icon name="chevron-thin-left" color={WHITE} size={vs(20)} />
            </Pressable>
        }
        <Text style={[{ color: WHITE }]}
            textStyle={size === 'big' ? 'title1' : 'title3'}>{title}</Text>
    </View>}
        <StatusBar backgroundColor={BLACK} barStyle='light-content' hidden={!visible} />
    </>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: BLACK,
        width: '100%',
        paddingBottom: vs(14),
        paddingTop: vs(14),
        paddingHorizontal: s(10)
    },
    smallContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    bigContainer: {
        alignItems: 'flex-start'
    },
    goBackBtnBig: {
        margin: s(5),
        paddingHorizontal: s(10),
        paddingTop: vs(5),
        paddingBottom: vs(15),
        alignSelf: 'flex-start'
    },
    goBackBtnSmall: {
        margin: s(5),
        paddingHorizontal: s(10),
        paddingVertical: vs(5),
        position: 'absolute',
        left: 0
    },
})

const { container, smallContainer, goBackBtnBig, goBackBtnSmall, bigContainer } = styles

export { Header }
export * from './headerHelper'