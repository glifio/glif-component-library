import React from 'react'
import { Label } from '../components/Typography'

export default {
  title: 'Components/Typography/Label',
  component: Label,
}

const Template = (args) => <Label>{args.text}</Label>

export const Default = Template.bind({})
Default.args = {
    text: 'This is a label'
}
