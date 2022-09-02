import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { vs } from 'react-native-size-matters'
import { ColorFilter, Header, Range, TagBig, Text, Space, PressableNavigation, Button } from '../../components'
import { BLACK, PRIMARY, WHITE, winHeight } from '../../constants'

const styles = StyleSheet.create({
  containerTop: {
    width: '100%',
    height: vs(60),
    backgroundColor: BLACK
  },
  containerBottom: {
    width: '100%',
    height: vs(100),
    backgroundColor: BLACK,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: vs(16),
    paddingRight: vs(16)
  },
  safeAreaViewStyle: {
    backgroundColor: BLACK
  },
  scrollViewStyle: {
    backgroundColor: BLACK,
    height: winHeight - vs(160)
  },
  textStyle: {
    color: WHITE,
    paddingLeft: vs(16)
  },
  colorsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: vs(25),
    paddingTop: vs(25)
  },
  tagsSizeContainer: {
    flexDirection: 'row',
    maxWidth: '75%',
    justifyContent: 'space-around',
    paddingLeft: vs(8),
    marginTop: vs(25),
    marginBottom: vs(25)
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: vs(25)
  }
})
interface FiltersScreenT {
  navigation: any
}

interface ColorFilterValueT {
  one: false
  two: false
  three: false
  four: false
  five: false
  six: false
  seven: false
  eight: false
  nine: false
  ten: false
  eleven: false
  twelve: false
  thirteen: false
  fourteen: false
  fifteen: false
  sixteen: false
}

function FiltersScreen({ navigation }: FiltersScreenT) {
  const {
    containerTop,
    safeAreaViewStyle,
    scrollViewStyle,
    tagsSizeContainer,
    textStyle,
    colorsContainer,
    categoryContainer,
    containerBottom
  } = styles
  const [isActiveBorder, setActiveBorder] = useState<ColorFilterValueT>({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
    ten: false,
    eleven: false,
    twelve: false,
    thirteen: false,
    fourteen: false,
    fifteen: false,
    sixteen: false
  })
  const [isActiveTag, setActiveTag] = useState<ColorFilterValueT>({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
    ten: false,
    eleven: false,
    twelve: false,
    thirteen: false,
    fourteen: false,
    fifteen: false,
    sixteen: false
  })
  const { navigate } = navigation

  const openFilterList = () => navigate('FiltersListScreen')
  const toggleColorFilter = (value: keyof ColorFilterValueT) =>
    setActiveBorder(prevState => {
      return {
        ...prevState,
        [value]: !prevState[value]
      }
    })
  const toggleTag = (value: keyof ColorFilterValueT) =>
    setActiveTag(prevState => {
      return {
        ...prevState,
        [value]: !prevState[value]
      }
    })
  return (
    <SafeAreaView style={safeAreaViewStyle}>
      <View style={containerTop}>
        <Header title={'Filters'} onPress={navigation.goBack} h2 />
      </View>
      <ScrollView style={scrollViewStyle}>
        <Text title={'Price range'} h2 textStyle={textStyle} />
        <Range min={0} max={200} />
        <Text title={'Colors'} h2 textStyle={textStyle} />
        <View style={colorsContainer}>
          <ColorFilter
            color={PRIMARY}
            isActiveBorder={isActiveBorder['one']}
            onToggle={() => toggleColorFilter('one')}
          />
          <ColorFilter
            color={PRIMARY}
            isActiveBorder={isActiveBorder['two']}
            onToggle={() => toggleColorFilter('two')}
          />
          <ColorFilter
            color={PRIMARY}
            isActiveBorder={isActiveBorder['three']}
            onToggle={() => toggleColorFilter('three')}
          />
          <ColorFilter
            color={PRIMARY}
            isActiveBorder={isActiveBorder['four']}
            onToggle={() => toggleColorFilter('four')}
          />
          <ColorFilter
            color={PRIMARY}
            isActiveBorder={isActiveBorder['five']}
            onToggle={() => toggleColorFilter('five')}
          />
          <ColorFilter
            color={PRIMARY}
            isActiveBorder={isActiveBorder['six']}
            onToggle={() => toggleColorFilter('six')}
          />
        </View>
        <Text title={'Sizes'} h2 textStyle={textStyle} />
        <View style={tagsSizeContainer}>
          <TagBig
            onToggle={() => toggleTag('seven')}
            title={'XS'}
            isInvisibleBorder={isActiveTag['seven']}
            isHalfTag={true}
          />
          <TagBig
            onToggle={() => toggleTag('eight')}
            title={'S'}
            isInvisibleBorder={isActiveTag['eight']}
            isHalfTag={true}
          />
          <TagBig
            onToggle={() => toggleTag('nine')}
            title={'M'}
            isInvisibleBorder={isActiveTag['nine']}
            isHalfTag={true}
          />
          <TagBig
            onToggle={() => toggleTag('ten')}
            title={'L'}
            isInvisibleBorder={isActiveTag['ten']}
            isHalfTag={true}
          />
          <TagBig
            onToggle={() => toggleTag('eleven')}
            title={'XL'}
            isInvisibleBorder={isActiveTag['eleven']}
            isHalfTag={true}
          />
        </View>
        <Text title={'Category'} h2 textStyle={textStyle} />
        <View style={categoryContainer}>
          <View>
            <TagBig
              title={'All'}
              onToggle={() => toggleColorFilter('twelve')}
              isInvisibleBorder={isActiveBorder['twelve']}
            />
            <Space height={10} />
            <TagBig
              title={'Boys'}
              onToggle={() => toggleColorFilter('thirteen')}
              isInvisibleBorder={isActiveBorder['thirteen']}
            />
          </View>
          <View>
            <TagBig
              title={'Women'}
              onToggle={() => toggleColorFilter('fourteen')}
              isInvisibleBorder={isActiveBorder['fourteen']}
            />
            <Space height={10} />
            <TagBig
              title={'Girls'}
              onToggle={() => toggleColorFilter('fifteen')}
              isInvisibleBorder={isActiveBorder['fifteen']}
            />
            <Space height={15} />
          </View>
          <View>
            <TagBig
              title={'Men'}
              onToggle={() => toggleColorFilter('sixteen')}
              isInvisibleBorder={isActiveBorder['sixteen']}
            />
          </View>
        </View>
        <PressableNavigation
          onPress={openFilterList}
          nameTitle={'Brand'}
          infoTitle={'adidas Originals, Jack & Jones, s.Oliver'}
        />
      </ScrollView>
      <View style={containerBottom}>
        <Button title={'Discard'} isOutline={true} isSmall={true} onPress={() => {}} />
        <Button title={'Apply'} isOutline={false} isSmall={true} onPress={() => {}} />
      </View>
    </SafeAreaView>
  )
}

export { FiltersScreen }
