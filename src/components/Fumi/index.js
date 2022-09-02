import React from 'react'
import PropTypes from 'prop-types'
import { Animated, TextInput, TouchableWithoutFeedback, View, StyleSheet } from 'react-native'
import { BLACK, DARK, winHeight, winWidth } from '../../constants'

import BaseInput from './BaseInput'
import { vs } from 'react-native-size-matters'

class Fumi extends BaseInput {
  static propTypes = {
    /*
     * This is the icon component you are importing from react-native-vector-icons.
     * import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
     * iconClass={FontAwesomeIcon}
     */
    iconClass: PropTypes.func.isRequired,
    /*
     * Passed to react-native-vector-icons library as name prop
     */
    iconName: PropTypes.string.isRequired,
    /*
     * Passed to react-native-vector-icons library as color prop.
     * Also used as textInput color.
     */
    iconColor: PropTypes.string,
    /*
     * Passed to react-native-vector-icons library as size prop.
     */
    iconSize: PropTypes.number,

    passiveIconColor: PropTypes.string,
    height: PropTypes.number
  }

  static defaultProps = {
    height: vs(44),
    iconColor: '#00aeef',
    iconSize: vs(14),
    iconWidth: winWidth * 0.05,
    inputPadding: vs(15),
    passiveIconColor: '#a3a3a3',
    animationDuration: 300
  }

  render() {
    const {
      iconClass,
      iconColor,
      iconSize,
      passiveIconColor,
      iconName,
      label,
      style: containerStyle,
      inputStyle,
      height: inputHeight,
      inputPadding,
      iconWidth,
      labelStyle
    } = this.props
    const { focusedAnim, value } = this.state
    const AnimatedIcon = Animated.createAnimatedComponent(iconClass)
    const ANIM_PATH = inputPadding + inputHeight
    const NEGATIVE_ANIM_PATH = ANIM_PATH * -1

    return (
      <View
        style={[
          styles.container,
          containerStyle,
          {
            height: ANIM_PATH
          }
        ]}
        onLayout={this._onLayout}
      >
        <TouchableWithoutFeedback onPress={this.focus}>
          <AnimatedIcon
            name={iconName}
            color={iconColor}
            size={iconSize}
            style={{
              position: 'absolute',
              left: inputPadding,
              bottom: focusedAnim.interpolate({
                inputRange: [0, 0.5, 0.51, 0.7, 1],
                outputRange: [24, ANIM_PATH, NEGATIVE_ANIM_PATH, NEGATIVE_ANIM_PATH, 24]
              }),
              color: focusedAnim.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [passiveIconColor, iconColor, iconColor]
              })
            }}
          />
        </TouchableWithoutFeedback>
        <View
          style={[
            styles.separator,
            {
              height: inputHeight,
              left: iconWidth + winWidth * 0.07
            }
          ]}
        />
        <TouchableWithoutFeedback onPress={this.focus}>
          <Animated.View
            style={{
              position: 'absolute',
              left: iconWidth + inputPadding + vs(10),
              height: inputHeight,
              top: focusedAnim.interpolate({
                inputRange: [0, 0.5, 0.51, 0.7, 1],
                outputRange: [24, ANIM_PATH, NEGATIVE_ANIM_PATH, NEGATIVE_ANIM_PATH, inputPadding / 2]
              })
            }}
          >
            <Animated.Text
              style={[
                styles.label,
                {
                  fontSize: focusedAnim.interpolate({
                    inputRange: [0, 0.7, 0.71, 1],
                    outputRange: [16, 16, 12, 12]
                  }),
                  color: focusedAnim.interpolate({
                    inputRange: [0, 0.7],
                    outputRange: ['#696969', '#a3a3a3']
                  })
                },
                labelStyle,
                { fontSize: vs(12) }
              ]}
            >
              {label}
            </Animated.Text>
          </Animated.View>
        </TouchableWithoutFeedback>
        <TextInput
          ref={this.input}
          {...this.props}
          style={[
            styles.textInput,
            {
              marginLeft: iconWidth + inputPadding,
              color: iconColor
            },
            inputStyle
          ]}
          value={value}
          onBlur={this._onBlur}
          onFocus={this._onFocus}
          onChange={this._onChange}
          underlineColorAndroid={'transparent'}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    paddingTop: vs(14),
    backgroundColor: DARK
  },
  label: {
    fontSize: vs(14),
    fontWeight: 'bold'
  },
  textInput: {
    flex: 1,
    color: 'black',
    fontSize: vs(14),
    padding: vs(3),
    paddingLeft: vs(10)
  },
  separator: {
    position: 'absolute',
    width: 1,
    backgroundColor: BLACK,
    top: vs(4)
  }
})

export { Fumi }
