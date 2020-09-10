import React from 'react'
import { Highlight } from '../components/Typography'

export default {
  title: 'Components/Typography/Highlight',
  component: Highlight,
}

const Template = (args) => <Highlight>{args.text}</Highlight>

export const Default = Template.bind({})
Default.args = {
    text: 'This is highlighted text'
}
