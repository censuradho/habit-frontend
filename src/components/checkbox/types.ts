import {CheckboxProps as RadixCheckboxProps  } from '@radix-ui/react-checkbox'



export interface CheckboxProps extends Pick<RadixCheckboxProps, 
  'id' 
  | 'defaultChecked'
  | 'onCheckedChange'
  | 'checked'
  | 'defaultChecked'
  | 'disabled'
  | 'name'
  | 'value'
>  {
  label: string
}