import React, { useState } from 'react'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import { vs } from 'react-native-size-matters'
import MateralCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { DARK, GRAY, WHITE, winHeight, winWidth } from '../../constants'
import { Rating, Text, Space } from '../index'

const styles = StyleSheet.create({
  container: {
    width: winWidth * 0.75,
    height: vs(293),
    borderRadius: vs(6),
    backgroundColor: DARK
  },
  imageStyle: {
    width: vs(28),
    height: vs(28),
    borderRadius: vs(96)
  },
  imageContainer: {
    alignSelf: 'flex-start',
    bottom: vs(12),
    right: vs(12)
  },
  textStyleReview: {
    color: WHITE,
    alignSelf: 'flex-start',
    marginLeft: winWidth * 0.017
  },
  textStyleName: {
    color: WHITE,
    alignSelf: 'flex-start',
    marginLeft: winWidth * 0.02
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: winWidth * 0.02,
    paddingLeft: winWidth * 0.02
  },
  textStyleDate: {
    color: GRAY
  },
  textStyleHelpful: {
    color: GRAY
  },
  iconStyle: {
    color: GRAY,
    fontSize: vs(16)
  },
  helpfulTextContainer: {
    justifyContent: 'center'
  },
  helpfulContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: vs(156),
    paddingRight: winWidth * 0.02
  },
  textStyleHelpfulWhite: {
    color: WHITE
  },
  iconStyleWhite: {
    fontSize: vs(16),
    color: WHITE
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
    helpfulContainer,
    textStyleHelpfulWhite,
    iconStyleWhite
  } = styles

  const [isActive, setActive] = useState(false)
  const filterName = name.slice(0, 300)
  return (
    <View style={container}>
      <View style={imageContainer}>
        <Image source={{ uri: avatarUri }} style={imageStyle} />
      </View>
      <Text title={filterName} textStyle={textStyleName} h3 />
      <View style={container1}>
        <Rating ratingList={ratingList} />
        <Text title={date} textStyle={textStyleDate} h7 />
      </View>
      <Text title={review} h6 textStyle={textStyleReview} />
      <Pressable
        onPress={() => {
          setActive(pr => !pr), onPress
        }}
        style={helpfulContainer}
      >
        <View style={helpfulTextContainer}>
          <Text title={'Helpful'} textStyle={isActive ? textStyleHelpfulWhite : textStyleHelpful} h6 />
        </View>
        <Space width={winWidth * 0.015} height={0} />
        <MateralCommunityIcons name="thumb-up" style={isActive ? iconStyleWhite : iconStyle} />
      </Pressable>
    </View>
  )
}

export { ReviewCard }
