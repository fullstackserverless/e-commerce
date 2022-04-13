import { Dimensions } from "react-native"
const WHITE = '#F6F6F6'
const GRAY = '#ABB4BD'
const PRIMARY = '#EF3651'
const BLACK = '#1E1F28'
const DARK = '#2A2C36'
const SALE = '#FF3E3E'
const ERROR = '#FF2424'
const SUCCESS = '#55D85A'
const GRAY_OPACITY = 'rgba(171, 180, 189, 0.1)'

const winWidth = Dimensions.get('window').width
const winHeight = Dimensions.get('window').height
export {
   SUCCESS, ERROR, SALE, DARK, BLACK,
   PRIMARY, GRAY, WHITE, GRAY_OPACITY, winWidth, winHeight
}