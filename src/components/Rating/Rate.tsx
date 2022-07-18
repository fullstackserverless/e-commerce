import React, { useState } from "react"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { View, Pressable } from "react-native"
import { s } from "react-native-size-matters"

const arr = [1, 2, 3, 4, 5]

interface Irate {
  onChange?: (stars: number) => void
  starSize?: number
}

export const Rate: React.FC<Irate> = ({
  onChange, starSize = s(20)
}) => {
  const [rateVal, setRateVal] = useState<number>(0)

  const handlePressStar = (item: number) => {
    onChange && onChange(item)
    setRateVal(item)
  }

  return <View style={{flexDirection: 'row'}}>
    {arr.map((item) => 
      <Pressable key={item} style={{marginHorizontal: 4}}
       onPress={() => handlePressStar(item)} >
        {rateVal >= item ? 
        <Icon name='star'
        color='#FFBA49' size={starSize} />
        :
        <Icon key={item} name='star-outline'
         color='#FFBA49' size={starSize} />}
      </Pressable>
    )}
  </View>
}