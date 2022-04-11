import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { SmallTextInput, HighTextInput } from './'
import { useForm, FormProvider, SubmitHandler, SubmitErrorHandler, FieldValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { s } from 'react-native-size-matters'
import { error_c, white_c } from '../../constants'

const schema = yup.object().shape({
  email: yup.string().email().trim().required(),
  promocode: yup.string().trim(),
  password: yup.string().required().min(8)
}).required()

export const ExampleForm = () => {
  const {...methods} = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  })
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log({data})
	
  const onError: SubmitErrorHandler<FieldValues> = (errors, e) => {
    return console.log(errors)
  }

  return (
    <View>
      <FormProvider {...methods}>
      <SmallTextInput
        name="email"
        placeholder="Email"
        resetField={methods.resetField}
        keyboardType="email-address"
		  />
      <HighTextInput 
        label='promocode'
        name="promocode"
        resetField={methods.resetField}
      />
      <SmallTextInput 
        secureTextEntry
        placeholder='password'
        name="password"
        resetField={methods.resetField}
      />
      <TouchableOpacity
        activeOpacity={.8}
        style={{borderRadius: 20, alignItems: 'center', 
         backgroundColor: error_c, padding: 10, width: '90%', 
         alignSelf: 'center', paddingVertical: 15}}
        onPress={methods.handleSubmit(onSubmit, onError)} >
        <Text style={{color: white_c, fontSize: s(19)}}>Submit form</Text>
      </TouchableOpacity>
      </FormProvider>
    </View>
  )
}