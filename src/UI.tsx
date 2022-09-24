import React, { useState, useRef } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Modalize } from 'react-native-modalize'
import { BLACK, WHITE, PRIMARY, DARK } from './constants'
import {
  Space,
  Text,
  AdressCard,
  Button,
  ButtonIcon,
  ButtonPhoto,
  ButtonReview,
  CardImage,
  CardOrder,
  CardProductBag,
  CardProductCatalog,
  CardProductOrderInfo,
  CardProductCover,
  CategoryCard,
  CheckBox,
  DropDown,
  Filter,
  FilterBottom,
  Labels,
  Range,
  Rating,
  ReviewCard,
  Search,
  Selector,
  Switch,
  TagBig,
  Fumi,
  Header,
  TagSmall
} from './components'
import Ionicons from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BLACK
  },
  layoutContainer: {
    alignItems: 'center'
  },
  textStyle: {
    color: WHITE
  },
  labelStyle: {
    color: PRIMARY
  },
  fumiStyle: {
    flex: 1
  }
})

interface HomeT {
  navigation: any
  route: any
}

function Home({ navigation, route }: HomeT) {
  const { container, textStyle, layoutContainer, labelStyle } = styles
  const [isEnabled, setIsEnabled] = useState(false)
  const [redCheckBoxValue, setRedCheckBoxValue] = useState(false)
  const [whiteCheckBoxValue, setWhiteCheckBoxValue] = useState(false)
  const [isInvisibleBorder, setIsInvisibleBorder] = useState(false)
  const [isVisibleBorder, setIsVisibleBorder] = useState(false)
  const { navigate } = navigation

  const toggleSwitch = () => setIsEnabled(previousState => !previousState)
  const toggleRedCheckBox = () => setRedCheckBoxValue(redCheckBoxValue => !redCheckBoxValue)
  const toggleWhiteCheckBox = () => setWhiteCheckBoxValue(whiteCheckBoxValue => !whiteCheckBoxValue)
  const toggleTagBig = () => setIsInvisibleBorder(previousState => !previousState)
  const toggleTagSmall = () => setIsVisibleBorder(previousState => !previousState)
  const openPopUp = () => navigate('POPUP')
  const openSuccess = () => navigate('SuccessScreen')
  const openAuth = () => navigate('SignUpScreen')
  const openFilterList = () => navigate('FiltersListScreen')
  const openMyProfile = () => navigate('MyProfileScreen')
  const openFiltersScreen = () => navigate('FiltersScreen')
  const openMyOrdersScreen = () => navigate('MyOrdersScreen')

  return (
    <ScrollView style={container}>
      <View style={layoutContainer}>
        <Space height={60} />
        <Text title="UI" h0 />
        <Space height={25} />
        <Text title="AdressCard" h1 textStyle={textStyle} />
        <Space height={15} />
        <AdressCard name={'Example Name'} adress={'st. Krupskoy, 62'} onPressEdit={() => {}} />
        <Space height={25} />
        <Text title="Button" h1 textStyle={textStyle} />
        <Space height={15} />
        <Button isOutline={true} isSmall={false} onPress={() => {}} title={'Press me!'} />
        <Space height={10} />
        <Button isOutline={true} isSmall={true} onPress={() => {}} title={'Press me!'} />
        <Space height={10} />
        <Button isOutline={false} isSmall={false} onPress={() => {}} title={'Press me!'} />
        <Space height={10} />
        <Button isOutline={false} isSmall={true} onPress={() => {}} title={'Press me!'} />
        <Space height={25} />
        <Text title="ButtonIcon" h1 textStyle={textStyle} />
        <Space height={10} />
        <ButtonIcon isPrimary={true} isWhiteIcon={true} />
        <Space height={10} />
        <ButtonIcon isPrimary={false} isWhiteIcon={false} />
        <Space height={25} />
        <Text title="ButtonPhoto" h1 textStyle={textStyle} />
        <Space height={10} />
        <ButtonPhoto />
        <Space height={25} />
        <Text title="ButtonReview" h1 textStyle={textStyle} />
        <Space height={10} />
        <ButtonReview onPress={() => {}} />
        <Space height={25} />
        <Text title="CardImage" h1 textStyle={textStyle} />
        <Space height={10} />
        <CardImage imageUri="https://mediasole.ru/data/images/74/74212/150-1.jpg" />
        <Space height={25} />
        <Text title="CardOrder" h1 textStyle={textStyle} />
        <Space height={10} />
        <CardOrder
          isDelivered={true}
          date={'00-00-0000'}
          order={'000003'}
          quantity={'1'}
          TN={'QW0000'}
          amount={'40'}
          onDetails={() => {}}
        />
        <Space height={10} />
        <CardOrder
          isDelivered={false}
          date={'00-00-0000'}
          order={'000003'}
          quantity={'1'}
          TN={'QW0000'}
          amount={'40'}
          onDetails={() => {}}
        />
        <Space height={25} />
        <Text title="CardProduct" h1 textStyle={textStyle} />
        <Space height={10} />
        <CardProductBag
          price={'10'}
          color={'example'}
          imageUri={'https://demotivation.ru/wp-content/uploads/2020/05/255095-Sepik-2048x1383.jpg'}
          clothes={'example'}
          size={'example'}
        />
        <Space height={10} />
        <CardProductCatalog
          color={'example'}
          clothes={'example'}
          size={'example'}
          price={'10'}
          brand={'example'}
          ratingList={[3, 3, 3]}
          imageUri={'https://demotivation.ru/wp-content/uploads/2020/05/255095-Sepik-2048x1383.jpg'}
        />
        <Space height={20} />
        <CardProductOrderInfo
          color={'example'}
          clothes={'example'}
          size={'example'}
          price={'10'}
          brand={'example'}
          units={'1'}
          imageUri={'https://demotivation.ru/wp-content/uploads/2020/05/255095-Sepik-2048x1383.jpg'}
        />
        <Space height={25} />
        <Text title="CardProductCover" h1 textStyle={textStyle} />
        <Space height={10} />
        <CardProductCover
          imageUri="https://mediasole.ru/data/images/74/74212/150-1.jpg"
          clothes={'T-Shirt'}
          rating={[2, 2, 2, 2]}
          brand={'LIME'}
          color={'green'}
          price={'40'}
          size={'L'}
          isSoldOut={false}
          isLabelVision={true}
          titleLabel={'New'}
          isSaleOrNew={false}
          onClose={() => {}}
        />
        <Space height={20} />
        <CardProductCover
          imageUri="https://mediasole.ru/data/images/74/74212/150-1.jpg"
          clothes={'T-Shirt'}
          rating={[2, 2, 2, 2]}
          brand={'LIME'}
          color={'green'}
          price={'40'}
          size={'L'}
          isSoldOut={true}
          isLabelVision={true}
          titleLabel={'New'}
          isSaleOrNew={false}
          onClose={() => {}}
        />
        <Space height={25} />
        <Text title="CategoryCard" h1 textStyle={textStyle} />
        <Space height={10} />
        <CategoryCard title={'New'} imageUri={'https://mediasole.ru/data/images/74/74212/150-1.jpg'} />
        <Space height={25} />
        <Text title="CheckBox" h1 textStyle={textStyle} />
        <Space height={10} />
        <CheckBox value={redCheckBoxValue} isPrimary={true} onToggle={toggleRedCheckBox} />
        <Space height={10} />
        <CheckBox value={whiteCheckBoxValue} isPrimary={false} onToggle={toggleWhiteCheckBox} />
        <Space height={25} />
        <Text title="DropDown" h1 textStyle={textStyle} />
        <Space height={10} />
        <DropDown list={['listExample', 'ListExample1']} width={300} label={'asdf'} />
        <Space height={25} />
        <Text title="Filter" h1 textStyle={textStyle} />
        <Space height={10} />
        <Filter onPressFilter={() => {}} onPressApps={() => {}} onPressPrice={() => {}} />
        <Space height={25} />
        <Text title="Labels" h1 textStyle={textStyle} />
        <Space height={10} />
        <Labels isSaleOrNew={true} title={'-30%'} />
        <Space height={15} />
        <Labels isSaleOrNew={false} title={'New'} />
        <Space height={25} />
        <Text title="PopUp" h1 textStyle={textStyle} />
        <Space height={10} />
        <Button isOutline={false} isSmall={false} onPress={openPopUp} title={'Open PopUp!'} />
        <Space height={25} />
        <Text title="Range" h1 textStyle={textStyle} />
        <Space height={10} />
        <Range min={100} max={200} />
        <Space height={25} />
        <Text title="Rating" h1 textStyle={textStyle} />
        <Space height={10} />
        <Rating ratingList={[5, 5, 5]} />
        <Space height={25} />
        <Text title="ReviewCard" h1 textStyle={textStyle} />
        <Space height={10} />
        <ReviewCard
          name={'example'}
          review={'example'}
          date={'example'}
          onPress={() => {}}
          ratingList={[3, 3, 3]}
          avatarUri={'https://mediasole.ru/data/images/74/74212/150-1.jpg'}
        />
        <Space height={25} />
        <Text title="Search" h1 textStyle={textStyle} />
        <Space height={10} />
        <Search />
        <Space height={25} />
        <Text title="Selector" h1 textStyle={textStyle} />
        <Space height={10} />
        <Selector />
        <Space height={25} />
        <Text title="Switch" h1 textStyle={textStyle} />
        <Space height={10} />
        <Switch onValueChange={toggleSwitch} isValue={isEnabled} />
        <Space height={25} />
        <Text title="Tag" h1 textStyle={textStyle} />
        <Space height={10} />
        <TagBig title={'Tag'} onToggle={toggleTagBig} isInvisibleBorder={isInvisibleBorder} />
        <Space height={10} />
        <TagSmall title={'Tag'} onToggle={toggleTagSmall} isVisibleBorder={isVisibleBorder} />
        <Space height={25} />
        <Text title="SuccessScreen" h1 textStyle={textStyle} />
        <Space height={10} />
        <Button isOutline={false} isSmall={false} onPress={openSuccess} title={'Open SuccessScreen!'} />
        <Space height={25} />
        <Text title="AuthScreen" h1 textStyle={textStyle} />
        <Space height={10} />
        <Button isOutline={false} isSmall={false} title={'Open AuthScreen!'} onPress={openAuth} />
        <Space height={25} />
        <Text title="FiltersListScreen" h1 textStyle={textStyle} />
        <Space height={10} />
        <Button isOutline={false} isSmall={false} title={'Open FiltersListScreen!'} onPress={openFilterList} />
        <Space height={25} />
        <Text title="MyProfileScreen" h1 textStyle={textStyle} />
        <Space height={10} />
        <Button isOutline={false} isSmall={false} title={'Open MyProfile!'} onPress={openMyProfile} />
        <Space height={25} />
        <Text title="Fumi" h1 textStyle={textStyle} />
        <Space height={10} />
      </View>
      <Fumi label="Email" iconName={'mail'} iconClass={Ionicons} labelStyle={labelStyle} iconColor={PRIMARY} />
      <Space height={25} />
      <View style={layoutContainer}>
        <Text title="Header" h1 textStyle={textStyle} />
        <Space height={10} />
        <Text title="h0" h1 textStyle={textStyle} />
        <Space height={10} />
        <Header h0 onPress={() => {}} title={'Header'} />
        <Space height={10} />
        <Text title="h1" h1 textStyle={textStyle} />
        <Space height={10} />
        <Header h1 onPress={() => {}} title={'Header'} />
        <Space height={10} />
        <Text title="h2" h1 textStyle={textStyle} />
        <Space height={10} />
        <Header h2 onPress={() => {}} title={'Header'} />
        <Space height={25} />
        <Text title="FiltersScreen" h1 textStyle={textStyle} />
        <Space height={10} />
        <Button isOutline={false} isSmall={false} onPress={openFiltersScreen} title={'Open FiltersScreen!'} />
        <Space height={25} />
        <Text title="MyOrdersScreen" h1 textStyle={textStyle} />
        <Space height={10} />
        <Button onPress={openMyOrdersScreen} isSmall={false} isOutline={false} title={'Open MyOrdersScreen!'} />
      </View>
    </ScrollView>
  )
}

export { Home }
