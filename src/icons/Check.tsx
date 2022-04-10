import * as React from "react"
import Svg, {SvgProps, Path} from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
    <Svg
        width={15}
        height={12}
        fill="none"
        {...props}
    >
        <Path
            d="M4.767 9.468 1.21 5.736 0 6.998 4.767 12 15 1.262 13.798 0 4.767 9.468Z"
            fill="#F7F7F7"
        />
    </Svg>
)

export default SvgComponent
