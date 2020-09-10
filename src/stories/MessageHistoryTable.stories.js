import React from 'react'
import MessageHistoryTable from '../components/MessageHistoryTable'

export default {
  title: 'Components/MessageHistoryTable',
  component: MessageHistoryTable,
}

const Template = (args) => <MessageHistoryTable {...args} />

export const Default = Template.bind({})
Default.args = {
  address: 't1z72tfhyoyzr5xeo4lttxcnodgrvku43ezmhs6cy',
  messages: [
    {
      to: 't1z72tfhyoyzr5xeo4lttxcnodgrvku43ezmhs6cy',
      from: 't1z72tfhyoyzr5xeo4lttxcnodgrvku43ezmhs6cy',
      value: '12345',
      gas_used: '8391',
      cid: 'Qmjfjfjfj29j29o3ua90sjdfoisjdf',
      status: 'ok',
      timestamp: 1599583362,
    },
    {
      to: 't1z72tfhyoyzr5xeo4lttxcnodgrvku43ezmhs6cy',
      from: 't1z72tfhyoyzr5xeo4lttxcnodgrvku43ezmhs6cy',
      value: '0',
      gas_used: '122',
      cid: 'Qmkgbaywyijd03k2ljajj',
      status: 'ok',
      timestamp: 1599581938,
    },
  ],
  selectMessage: () => {},
  loading: false,
  paginating: false,
  showMore: () => {},
  refresh: () => {},
  total: 2,
}



