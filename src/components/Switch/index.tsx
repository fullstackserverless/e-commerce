import { BaseSupportOption } from 'prettier'
import React, { useState } from 'react'
import { View, Switch as Swi, StyleSheet } from 'react-native'
import { SUCCESS, GRAY, GRAY_OPACITY } from '../../constants'

interface SwitchT {
  isValue: boolean
  isDisable?: boolean
  onValueChange: (value: boolean) => void | Promise<void>
}

function Switch({ isValue, isDisable, onValueChange }: SwitchT) {
  return (
    <View style={styles.container}>
      <Swi
        trackColor={{ false: GRAY_OPACITY, true: GRAY_OPACITY }}
        thumbColor={isValue ? SUCCESS : GRAY}
        ios_backgroundColor={GRAY_OPACITY}
        onValueChange={onValueChange}
        value={isValue}
        disabled={isDisable}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export { Switch }
