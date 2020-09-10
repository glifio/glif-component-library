import React from 'react'
import Text from '../components/Input/Text'

export default {
  title: 'Components/Input/Text',
  component: Text,
}

const Template = (args) => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
    value: '123',
    label: 'Amount of FIL',
    denom: 'FIL',
    error: null,
}
