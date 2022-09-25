import React, { useState, useMemo } from 'react'
import { View, ScrollView, StyleSheet, Pressable, FlatList } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { BLACK, PRIMARY, WHITE, winWidth } from '../../constants'
import { Text, CheckBox, Button, Search, Header } from '../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { vs, s } from 'react-native-size-matters'

const styles = StyleSheet.create({
  containerView: {
    width: '100%',
    height: vs(130),
    backgroundColor: BLACK
  },
  containerSearch: {
    paddingTop: vs(5)
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
    paddingLeft: vs(11),
    paddingRight: vs(11)
  },
  containerName: {
    justifyContent: 'center'
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: vs(42) / 2,
    paddingLeft: vs(16),
    paddingRight: vs(16)
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
    height: vs(94),
    backgroundColor: BLACK
  },
  pressableContainer: {
    paddingLeft: vs(16)
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

const brandArray = [
  { name: 'adidas', id: 'one' },
  { name: 'nike', id: 'two' },
  { name: 'puma', id: 'three' }
]

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
  const [redCheckBoxValue, setRedCheckBoxValue] = useState<CheckBoxValueT>({
    one: false,
    two: false,
    three: false,
    four: false
  })
  const [searchText, setSearchText] = useState('')

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
  const onSubmit = (text: string) => {
    setSearchText(text)
  }
  const filterData = useMemo(() => {
    return brandArray.filter(i => i.name.toLowerCase().includes(searchText.toLowerCase()))
  }, [searchText])
  const renderItem = ({ item }: any) => {
    return (
      <View style={containerBrand}>
        <View style={containerName}>
          <Text title={item.name} h3 textStyle={getTextColor(item.id)} />
        </View>
        <CheckBox
          value={redCheckBoxValue[item.id]}
          isPrimary={true}
          onToggle={() => {
            toggleRedCheckBox(item.id)
          }}
        />
      </View>
    )
  }
  return (
    <SafeAreaView style={safeAreaViewStyle}>
      <View style={containerView}>
        <Header title={'Brand'} onPress={navigation.goBack} h2 />
        <View style={containerSearch}>
          <Search onSearch={onSubmit} defaultValue={searchText} />
        </View>
      </View>
      <FlatList data={filterData} renderItem={renderItem} keyExtractor={item => item.id} />
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
