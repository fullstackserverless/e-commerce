import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from '../Text'
import { vs, s } from 'react-native-size-matters'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { GRAY, PRIMARY, WHITE, winWidth } from '../../constants'

interface Irange {
  min: number
  max: number
  onChangeFinish?: (values: number[]) => void
}

export const Range: React.FC<Irange> = ({ min, max, onChangeFinish }) => {
  const [values, setValues] = useState([min, max])

  return (
    <View style={container}>
      <View style={costContainer}>
        <Text h3 textStyle={costText} title={`$${values[0]}`} />
        <Text h3 textStyle={costText} title={`$${values[1]}`} />
      </View>
      <MultiSlider
        min={min}
        max={max}
        markerStyle={slider}
        trackStyle={line}
        onValuesChange={values => setValues(values)}
        pressedMarkerStyle={selectedSlider}
        unselectedStyle={{ backgroundColor: GRAY }}
        selectedStyle={{ backgroundColor: PRIMARY }}
        onValuesChangeFinish={onChangeFinish}
        sliderLength={winWidth * 0.8}
        enabledTwo
        values={[min, max]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: winWidth * 0.8,
    alignSelf: 'center'
  },
  line: {
    backgroundColor: GRAY,
    height: vs(3),
    width: winWidth * 0.8,
    alignSelf: 'flex-end'
  },
  slider: {
    borderRadius: vs(25),
    width: s(23),
    height: s(23),
    backgroundColor: PRIMARY
  },
  selectedSlider: {
    borderRadius: vs(28),
    width: s(26),
    height: s(26),
    backgroundColor: PRIMARY
  },
  costContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  costText: {
    color: WHITE,
    marginBottom: vs(20)
  }
})
const { container, line, slider, selectedSlider, costContainer, costText } = styles
