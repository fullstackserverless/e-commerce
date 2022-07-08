import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { BLACK, WHITE } from './constants'
import { Space, Text, CardProductCover } from './components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BLACK
  },
  textStyle: {
    color: WHITE,
    fontSize: 25,
    paddingBottom: 10
  }
})

interface HomeT {
  navigation: any
  route: any
}

function Home({ navigation, route }: HomeT) {
  const { container, textStyle } = styles
  const [isEnabled, setIsEnabled] = useState(false)
  const [redCheckBoxValue, setRedCheckBoxValue] = useState(false)
  const [whiteCheckBoxValue, setWhiteCheckBoxValue] = useState(false)
  const { navigate } = navigation

  const toggleSwitch = () => setIsEnabled(previousState => !previousState)
  const toggleRedCheckBox = () => setRedCheckBoxValue(redCheckBoxValue => !redCheckBoxValue)
  const toggleWhiteCheckBox = () => setWhiteCheckBoxValue(whiteCheckBoxValue => !whiteCheckBoxValue)
  const openPopUp = () => navigate('POPUP')

  return (
    <View style={container}>
      <Text title="CardProductCover" h0 />
      <Space height={15} />
      <CardProductCover
        size="L"
        color="Blue"
        clothes="Shirt"
        brand="LIME"
        price="10"
        imageUri="https://wallup.net/wp-content/uploads/2016/03/12/297274-Owari_No_Seraph-Hyakuya_Yuuichirou.jpg"
        rating={[5, 5, 5, 5, 5, 5, 5, 5, 5, 5]}
        isSoldOut={false}
        onClose={() => {}}
        isSaleOrNew={false}
        titleLabel={'-30%'}
        isLabelVision={true}
      />
    </View>
  )
}

export { Home }
