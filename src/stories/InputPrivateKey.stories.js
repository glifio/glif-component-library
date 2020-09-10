import React from 'react'
import PrivateKey from '../components/Input/PrivateKey'

export default {
  title: 'Components/Input/PrivateKey',
  component: PrivateKey,
}

const Template = (args) => <PrivateKey {...args} />

export const Default = Template.bind({})
Default.args = {
    value: '0xdeadbeef',
    placeholder: 'Input your private key',
    valid: false,
    error: null,
}

