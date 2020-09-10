import React from 'react';

import Address from '../components/Address'

export default {
  title: 'Components/Address',
  component: Address,
}

const Template = (args) => <Address {...args} />

export const Default = Template.bind({})
Default.args = {
    address: 't1z72tfhyoyzr5xeo4lttxcnodgrvku43ezmhs6cy',
}

