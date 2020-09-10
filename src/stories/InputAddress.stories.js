import React from 'react'
import Address from '../components/Input/Address'

export default {
  title: 'Components/Input/Address',
  component: Address,
}

const Template = (args) => <Address {...args} />

export const Default = Template.bind({})
Default.args = {
    value: 't1z72tfhyoyzr5xeo4lttxcnodgrvku43ezmhs6cy',
    error: null,
    label: 'Enter an address'
}

