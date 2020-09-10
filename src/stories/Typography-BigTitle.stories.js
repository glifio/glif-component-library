import React from 'react'
import { BigTitle } from '../components/Typography'

export default {
  title: 'Components/Typography/BigTitle',
  component: BigTitle,
}

const Template = (args) => <BigTitle>{args.text}</BigTitle>

export const Default = Template.bind({})
Default.args = {
    text: 'This is a big title'
}
