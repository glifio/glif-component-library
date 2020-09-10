import React from 'react'
import Warning from '../components/Warning'

export default {
  title: 'Components/Warning',
  component: Warning,
}

const Template = (args) => <Warning {...args} />

export const Default = Template.bind({})
Default.args = {
  description: 'Uh oh, this is a warning',
  title: 'Danger!',
  linkhref: 'https://glif.io',
  linkDisplay: `Here's a link`,
  onBack: () => {},
  onAccept: () => {},
}
