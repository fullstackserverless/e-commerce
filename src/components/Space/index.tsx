import React, { memo } from 'react'
import { View } from 'react-native'

interface SpaceT {
  height?: number
  width?: number
}

const Space = memo<SpaceT>(({ height, width }) => <View style={{ height: height || 30, width: width || 0 }} />)

export { Space }
