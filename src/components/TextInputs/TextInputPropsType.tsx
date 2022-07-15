import { TextInputProps as RNTextInputProps } from 'react-native'
import { ControllerProps, UseControllerProps } from 'react-hook-form'
  
export interface TextInputProps extends RNTextInputProps, UseControllerProps {
  resetField: any
  defaultValue?: string
}

export interface HighTextInputProps extends RNTextInputProps, UseControllerProps {
  resetField: any
  label: string
  defaultValue?: string
}