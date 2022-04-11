import React from "react"
import { View } from "react-native"
import { Range } from "./Range"

export const ExampleRange = () => {
  return <Range min={0} max={10000} onChangeFinish={(values) => console.log(values)} />
}