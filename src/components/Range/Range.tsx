import React, { useState } from "react"
import { View, StyleSheet, Text } from 'react-native'
import { vs, s } from "react-native-size-matters"
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { gray_c, primary_c, white_c, winWidth } from "../../constants"

interface Irange {
  min: number
  max: number
  onChangeFinish?: (values: number[]) => void
}

export const Range: React.FC<Irange> = ({min, max, onChangeFinish}) => {
  const [values, setValues] = useState([min, max])

  
  return <View style={container}>
    <View style={costContainer}>
      <Text style={costText}>{`$${values[0]}`}</Text>
      <Text style={costText}>{`$${values[1]}`}</Text>
    </View>
    <MultiSlider
      min={min}
      max={max}
      markerStyle={slider}
      trackStyle={line}
      onValuesChange={(values) => setValues(values)}
      pressedMarkerStyle={selectedSlider}
      unselectedStyle={{backgroundColor: gray_c}}
      selectedStyle={{backgroundColor: primary_c}}
      onValuesChangeFinish={onChangeFinish}
      sliderLength={winWidth*0.8}
      enabledTwo
      values={[min, max]}
    />
  </View>
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: winWidth*.8,
    alignSelf: 'center',
  },
  line: {
    backgroundColor: gray_c, 
    height: vs(3), 
    width: winWidth*.8,
    alignSelf: 'flex-end'
  },
  slider: {
    borderRadius: vs(25),
    width: s(23),
    height: s(23),
    backgroundColor: primary_c,
  },
  selectedSlider: {
    borderRadius: vs(28),
    width: s(26),
    height: s(26),
    backgroundColor: primary_c,
  }, 
  costContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  costText: {
    color: white_c
  }
})
const { container, line, slider, selectedSlider, costContainer, costText } = styles