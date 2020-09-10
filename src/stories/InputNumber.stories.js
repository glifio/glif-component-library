import React from 'react'
import { NumberInput } from '../components/Input/Number'

export default {
  title: 'Components/Input/Number',
  component: NumberInput,
}

const Template = (args) => <NumberInput {...args} />

export const Default = Template.bind({})
Default.args = {
    label: 'Input a number',
    placeholder: '12345',
    denom: 'FIL',
    error: null,
}

