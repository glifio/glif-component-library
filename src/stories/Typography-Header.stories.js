import React from 'react'
import { Header } from '../components/Typography'

export default {
  title: 'Components/Typography/Header',
  component: Header,
}

const Template = (args) => <Header>{args.text}</Header>

export const Default = Template.bind({})
Default.args = {
    text: 'This is a header'
}
