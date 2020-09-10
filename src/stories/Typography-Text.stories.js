import React from 'react'
import { Text } from '../components/Typography'

export default {
  title: 'Components/Typography/Text',
  component: Text,
}

const Template = (args) => <Text>{args.text}</Text>

export const Default = Template.bind({})
Default.args = {
    text: 'This is text'
}
