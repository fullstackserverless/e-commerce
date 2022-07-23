import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { SmallTextInput, HighTextInput } from './'
import { useForm, FormProvider, SubmitHandler, SubmitErrorHandler, FieldValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { s } from 'react-native-size-matters'
import { ERROR, WHITE } from '../../constants'

const styles = StyleSheet.create({
  touchableOpacityStyle: {
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: ERROR,
    padding: 10,
    width: 370,
    alignSelf: 'center',
    paddingVertical: 10
  }
})
const schema = yup
  .object()
  .shape({
    email: yup.string().email().trim().required(),
    promocode: yup.string().trim(),
    password: yup.string().required().min(8)
  })
  .required()

export const ExampleForm = () => {
  const { touchableOpacityStyle } = styles
  const { ...methods } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  })
  const onSubmit: SubmitHandler<FieldValues> = data => console.log({ data })

  const onError: SubmitErrorHandler<FieldValues> = (errors, e) => {
    return console.log(errors)
  }

  const resetField = methods.resetField
  return (
    <View>
      <FormProvider {...methods}>
        <SmallTextInput name="email" placeholder="Email" resetField={resetField} keyboardType="email-address" />
        <HighTextInput label="promocode" name="promocode" resetField={resetField} />
        <SmallTextInput secureTextEntry placeholder="Password" name="password" resetField={resetField} />
        <TouchableOpacity
          activeOpacity={0.8}
          style={touchableOpacityStyle}
          onPress={methods.handleSubmit(onSubmit, onError)}
        >
          <Text style={{ color: WHITE, fontSize: s(19) }}>Submit form</Text>
        </TouchableOpacity>
      </FormProvider>
    </View>
  )
}
