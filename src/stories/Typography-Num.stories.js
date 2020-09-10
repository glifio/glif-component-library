import React from 'react'
import { Num } from '../components/Typography'

export default {
  title: 'Components/Typography/Num',
  component: Num,
}

const Template = (args) => <Num>{args.text}</Num>

export const Default = Template.bind({})
Default.args = {
    text: 12345,
}
Default.argTypes = {
    size: {
        control: {
            type: 'select',
            options: ['m', 'l', 'xl'],
        }
    }
}