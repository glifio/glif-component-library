import React from 'react'
import NodeConnected from '../components/NodeConnected'

export default {
  title: 'Components/NodeConnected',
  component: NodeConnected,
}

const Template = (args) => <NodeConnected {...args} />

export const Default = Template.bind({})
Default.args = {
  apiAddress: 'https://some-lotus.node.io/rpc/v0',
  token: 'abcdefg',
  onConnectionStrengthChange: () => {},
  mockStrength: 0,
  onError: () => {},
}
Default.argTypes = {
  mockStrength: {
    control: { type: 'select', options: [-1, 0, 1, 2] }
  }
}