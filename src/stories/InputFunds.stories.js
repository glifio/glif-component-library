import React from 'react'
import { FilecoinNumber } from '@openworklabs/filecoin-number'
import Funds from '../components/Input/Funds'

export default {
  title: 'Components/Input/Funds',
  component: Funds,
}

const Template = (args) => <Funds {...args} />

export const Default = Template.bind({})
Default.args = {
    amount: 98776574563654600000,
    valid: null,
    error: null,
}
