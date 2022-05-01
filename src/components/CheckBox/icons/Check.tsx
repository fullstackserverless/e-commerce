import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
import { DARK } from '../../../constants'

interface Props extends SvgProps {
  color?: string
}

export const Check = (props: Props) => {
  const { color, ...rest } = props
  const colorValue = color ?? DARK

  return (
    <Svg width={15} height={12} fill="none" {...rest}>
      <Path d="M4.767 9.468 1.21 5.736 0 6.998 4.767 12 15 1.262 13.798 0 4.767 9.468Z" fill={colorValue} />
    </Svg>
  )
}
