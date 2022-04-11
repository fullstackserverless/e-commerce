import React, { useMemo, useState } from "react"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { StyleSheet, View } from "react-native"
import { Text } from "../Text"
import { s } from "react-native-size-matters"
import { gray_c } from "../../constants"

interface Irating {
  ratingList: number[]
  starSize?: number
  showCount?: boolean
}

const arrInts = [1, 2, 3, 4, 5]
const arrFloats = [0.5, 1.5, 2.5, 3.5, 4.5]

export const Rating: React.FC<Irating> = ({
  ratingList, starSize = s(15), showCount = true
}) => {
  const [totalRate, setTotalRate] = useState(0)
  useMemo(() => {
    const res: number = Number(
      (ratingList.reduce((a, b) => a+b, 0) / ratingList.length).toFixed(1)
    )
    setTotalRate(res)
  }, [ratingList])

  return <View style={container}>
    {arrInts.map((item, index) => 
      totalRate >= item ?
      <Icon key={item}
       style={star} name='star' color='#FFBA49' size={starSize} />
      :
      totalRate >= arrFloats[index] ? 
      <Icon key={item}
       style={star} name='star-half-full' color='#FFBA49' size={starSize} />
      :
      <Icon key={item}
       style={star} name='star-outline' color='#FFBA49' size={starSize} />
    )}
    {showCount &&
    <Text textStyle='body2' style={text}>{`(${ratingList.length})`}</Text>}
  </View>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  text: {
    color: gray_c,
  },
  star: {
    marginHorizontal: s(1)
  }
})
const {container, text, star } = styles