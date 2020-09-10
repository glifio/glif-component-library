import React from 'react';

import AccountCard from '../components/AccountCard'
import {
  LEDGER,
  CREATE_MNEMONIC,
  IMPORT_MNEMONIC,
  IMPORT_SINGLE_KEY
} from '../components/constants'

export default {
  title: 'Components/AccountCard',
  component: AccountCard,
}

const Template = (args) => <AccountCard {...args} />

export const Default = Template.bind({})
Default.args = {
    address: 't1z72tfhyoyzr5xeo4lttxcnodgrvku43ezmhs6cy',
    walletType: LEDGER,
    ledgerBusy: true,
}

