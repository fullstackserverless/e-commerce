import React, { useState } from "react"
import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import { s, vs } from "react-native-size-matters"
import Icon from "react-native-vector-icons/Ionicons"
import { DARK, GRAY, WHITE } from "../../constants"

interface Isearch {
    onSearch?: (txt: string) => void
    onChange?: (txt: string) => void
    defaultValue?: string
}

export const Search: React.FC<Isearch> = ({
    onChange, defaultValue, onSearch
}) => {
    const [text, setTxt] = useState<string>(defaultValue ? defaultValue : '')
    return <View style={backGround}>
        <Pressable style={({ pressed }) =>
            [icon, pressed && { transform: [{ scale: 1.04 }] }]}
            onPress={() => {
                onSearch && onSearch(text)
            }}>
            <Icon name="search" color={GRAY} size={vs(22)} />
        </Pressable>
        <TextInput
            style={container}
            value={text}
            placeholder='Search'
            blurOnSubmit
            placeholderTextColor={GRAY}
            onSubmitEditing={() => {
                onSearch && onSearch(text)
            }}
            onChangeText={(txt) => {
                onChange && onChange(txt)
                setTxt(txt)
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: s(37),
        paddingVertical: vs(9),
        color: WHITE,
        fontSize: vs(16)
    },
    backGround: {
        height: vs(40),
        width: '90%',
        backgroundColor: DARK,
        borderRadius: vs(40),
        alignSelf: 'center'
    },
    icon: {
        position: 'absolute',
        left: s(9),
        justifyContent: 'center',
        height: '100%',
        zIndex: 2
    }
})
const { container, backGround, icon } = styles