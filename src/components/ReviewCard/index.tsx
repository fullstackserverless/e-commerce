import React from 'react'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import MateralCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { DARK, GRAY, WHITE } from '../../constants'
import { Rating, Text, Space } from '../index'

const styles = StyleSheet.create({
  container: {
    width: 311,
    height: 297,
    borderRadius: 8,
    backgroundColor: DARK
  },
  imageStyle: {
    width: 32,
    height: 32,
    borderRadius: 100
  },
  imageContainer: {
    alignSelf: 'flex-start',
    bottom: 15,
    right: 15
  },
  textStyleReview: {
    color: WHITE,
    alignSelf: 'flex-start',
    marginLeft: 24
  },
  textStyleName: {
    color: WHITE,
    alignSelf: 'flex-start',
    marginLeft: 24
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 24,
    paddingLeft: 24
  },
  textStyleDate: {
    color: GRAY
  },
  textStyleHelpful: {
    color: GRAY
  },
  iconStyle: {
    color: GRAY,
    fontSize: 20
  },
  helpfulTextContainer: {
    justifyContent: 'center'
  },
  helpfulContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 160,
    paddingRight: 24
  }
})

interface ReviewCardT {
  name: string
  review: string
  date: string
  avatarUri: string
  ratingList: number[]
  onPress: () => void
}

function ReviewCard({
  name = 'Example Name',
  review = 'Example Review',
  date = 'June 5, 2019',
  avatarUri = 'https://avatars.mds.yandex.net/i?id=b7b3d8f92f4a603fda85c4e53e6e63e2-4518497-images-thumbs&n=13',
  ratingList = [2, 4, 5],
  onPress
}: ReviewCardT) {
  const {
    container,
    imageStyle,
    textStyleName,
    textStyleReview,
    container1,
    textStyleDate,
    textStyleHelpful,
    iconStyle,
    helpfulTextContainer,
    imageContainer,
    helpfulContainer
  } = styles

  const filterName = name.slice(0, 300)
  return (
    <View style={container}>
      <View style={imageContainer}>
        <Image source={{ uri: avatarUri }} style={imageStyle} />
      </View>
      <Text title={filterName} textStyle={textStyleName} h3 />
      <View style={container1}>
        <Rating ratingList={ratingList} />
        <Text title={date} textStyle={textStyleDate} />
      </View>
      <Text title={review} h6 textStyle={textStyleReview} />
      <Pressable onPress={onPress} style={helpfulContainer}>
        <View style={helpfulTextContainer}>
          <Text title={'Helpful'} textStyle={textStyleHelpful} h6 />
        </View>
        <Space width={10} height={0} />
        <MateralCommunityIcons name="thumb-up" style={iconStyle} />
      </Pressable>
    </View>
  )
}

export { ReviewCard }
