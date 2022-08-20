import React, { useState } from 'react'
import { View, ScrollView, StyleSheet, Pressable } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { BLACK, DARK, PRIMARY, WHITE, winWidth } from '../../constants'
import { Space, Text, CheckBox, Button, Search, Header } from '../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { vs, s } from 'react-native-size-matters'

const styles = StyleSheet.create({
  containerView: {
    width: '100%',
    height: vs(130),
    backgroundColor: BLACK
  },
  containerSearch: {
    paddingTop: 30
  },
  activeTextStyle: {
    color: PRIMARY
  },
  textStyle: {
    color: WHITE
  },
  containerBrand: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: vs(42),
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15
  },
  containerName: {
    justifyContent: 'center'
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: vs(42) / 2,
    paddingLeft: 20,
    paddingRight: 20
  },
  safeAreaViewStyle: {
    flex: 1,
    backgroundColor: BLACK
  },
  headerContainer: {
    flexDirection: 'row'
  },
  headerTextContainer: {
    paddingLeft: winWidth / 2 - s(50)
  },
  bottomViewContainer: {
    width: '100%',
    height: 100,
    backgroundColor: BLACK
  },
  pressableContainer: {
    paddingLeft: 20
  }
})

interface CheckBoxValueT {
  one: false
  two: false
  three: false
  four: false
}

interface FiltersListScreenT {
  navigation: any
}

function FiltersListScreen({ navigation }: FiltersListScreenT) {
  const {
    containerView,
    containerSearch,
    textStyle,
    activeTextStyle,
    actionsContainer,
    containerName,
    containerBrand,
    safeAreaViewStyle,
    headerContainer,
    headerTextContainer,
    bottomViewContainer,
    pressableContainer
  } = styles
  const [redCheckBoxValue1, setRedCheckBoxValue1] = useState(false)
  const [redCheckBoxValue, setRedCheckBoxValue] = useState<CheckBoxValueT>({
    one: false,
    two: false,
    three: false,
    four: false
  })

  const getTextColor = (value: keyof CheckBoxValueT) => {
    return redCheckBoxValue[value] ? activeTextStyle : textStyle
  }
  const toggleRedCheckBox = (value: keyof CheckBoxValueT) =>
    setRedCheckBoxValue(prevState => {
      return {
        ...prevState,
        [value]: !prevState[value]
      }
    })
  return (
    <SafeAreaView style={safeAreaViewStyle}>
      <View style={containerView}>
        <View style={headerContainer}>
          <Pressable
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.7 : 1
              },
              pressableContainer
            ]}
            onPress={navigation.goBack}
          >
            <Ionicons name={'chevron-back'} size={vs(26)} color={WHITE} />
          </Pressable>
          <View style={headerTextContainer}>
            <Text title="Brand" h1 textStyle={textStyle} />
          </View>
        </View>
        <View style={containerSearch}>
          <Search />
        </View>
      </View>
      <ScrollView style={[, { backgroundColor: BLACK }]}>
        <View style={containerBrand}>
          <View style={containerName}>
            <Text title={'adidas'} h3 textStyle={getTextColor('one')} />
          </View>
          <CheckBox
            value={redCheckBoxValue.one}
            isPrimary={true}
            onToggle={() => {
              toggleRedCheckBox('one')
            }}
          />
        </View>
        <View style={containerBrand}>
          <View style={containerName}>
            <Text title={'adidas'} h3 textStyle={getTextColor('two')} />
          </View>
          <CheckBox
            value={redCheckBoxValue.two}
            isPrimary={true}
            onToggle={() => {
              toggleRedCheckBox('two')
            }}
          />
        </View>
      </ScrollView>
      <View style={bottomViewContainer}>
        <View style={actionsContainer}>
          <Button isSmall={true} isOutline={true} title={'Discard'} onPress={() => {}} />
          <Button isSmall={true} isOutline={false} title={'Apply'} onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export { FiltersListScreen }
