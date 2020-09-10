import React from 'react';

import BalanceCard from '../components/BalanceCard'

export default {
  title: 'Components/BalanceCard',
  component: BalanceCard,
}

const Template = (args) => <BalanceCard {...args} />

export const Default = Template.bind({})
Default.args = {
    balance: 123,
    disableButtons: false,
}

