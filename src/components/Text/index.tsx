import React, { memo } from 'react'
import { Text as RNText, TextStyle, StyleSheet, StyleProp } from 'react-native'
import { vs } from 'react-native-size-matters'

const styles = StyleSheet.create({
  h0Style: {
    fontFamily: 'Metropolis-Bold',
    fontSize: vs(32),
    lineHeight: vs(32),
    color: 'white'
  },
  h1Style: {
    fontFamily: 'Metropolis-SemiBold',
    fontSize: vs(22),
    lineHeight: vs(27)
  },
  h2Style: {
    fontFamily: 'Metropolis-SemiBold',
    fontSize: vs(16),
    lineHeight: vs(20)
  },
  h3Style: {
    fontFamily: 'Metropolis-SemiBold',
    fontSize: vs(14),
    lineHeight: vs(14)
  },
  h4Style: {
    fontFamily: 'Metropolis-Regular',
    fontSize: vs(14),
    lineHeight: vs(14)
  },
  h5Style: {
    fontFamily: 'Metropolis-Medium',
    fontSize: vs(12),
    lineHeight: vs(18)
  },
  h6Style: {
    fontFamily: 'Metropolis-Regular',
    fontSize: vs(12),
    lineHeight: vs(19),
    letterSpacing: 0.15
  },
  h7Style: {
    fontFamily: 'Metropolis-Regular',
    fontSize: vs(9),
    lineHeight: vs(9)
  }
})

interface TxtT {
  h0?: boolean
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  h5?: boolean
  h6?: boolean
  h7?: boolean
  title: string
  numberOfLines?: number
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip'
  textStyle?: StyleProp<TextStyle>
}

const Text = memo<TxtT>(({ h0, h1, h2, h3, h4, h5, h6, h7, title, textStyle, numberOfLines, ellipsizeMode }) => {
  const { h0Style, h1Style, h2Style, h3Style, h4Style, h5Style, h6Style, h7Style } = styles
  return (
    <RNText
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={[
        textStyle,
        h0 && StyleSheet.flatten([h0Style, textStyle]),
        h1 && StyleSheet.flatten([h1Style, textStyle]),
        h2 && StyleSheet.flatten([h2Style, textStyle]),
        h3 && StyleSheet.flatten([h3Style, textStyle]),
        h4 && StyleSheet.flatten([h4Style, textStyle]),
        h5 && StyleSheet.flatten([h5Style, textStyle]),
        h6 && StyleSheet.flatten([h6Style, textStyle]),
        h7 && StyleSheet.flatten([h7Style, textStyle])
      ]}
    >
      {title}
    </RNText>
  )
})

export { Text }
