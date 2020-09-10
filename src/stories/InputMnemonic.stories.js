import React from 'react'
import Mnemonic from '../components/Input/Mnemonic'

export default {
  title: 'Components/Input/Mnemonic',
  component: Mnemonic,
}

const Template = (args) => <Mnemonic {...args} />

export const Default = Template.bind({})
Default.args = {
    value: 'gospel shuffle valley issue pledge glimpse style fire husband write expire front enable evoke celery',
    error: null,
}

