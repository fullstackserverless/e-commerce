import React from 'react'
import { BLACK, SALE, WHITE } from '../../constants'
import {StyleSheet, Text, View} from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 24,
        borderRadius: 29
    },
    colorDark: {
        backgroundColor: BLACK
    },
    color: {
        backgroundColor: SALE    
    },
    textStyle: {
        alignItems: 'center',
        alignSelf: 'center',
        color: WHITE,
        fontSize: 15
      }
})

interface LabelsT {
    isSaleOrNew: boolean,
    title: string
}

function Labels ({isSaleOrNew, title}: LabelsT){
    const { container, colorDark, color, textStyle } = styles
    const saleOrNew = isSaleOrNew ? color : colorDark

    return (
        <View style={[saleOrNew, container]}>
            <Text style={textStyle}>{title}</Text>
            </View>
    )
}

export { Labels }