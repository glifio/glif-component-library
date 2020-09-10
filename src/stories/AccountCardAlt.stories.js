import React from 'react';

import AccountCardAlt from '../components/AccountCardAlt'

export default {
  title: 'Components/AccountCardAlt',
  component: AccountCardAlt,
}

const Template = (args) => <AccountCardAlt {...args} />

export const Default = Template.bind({})
Default.args = {
    address: 't1z72tfhyoyzr5xeo4lttxcnodgrvku43ezmhs6cy',
    index: 1,
    balance: 123,
    selected: true,
}

