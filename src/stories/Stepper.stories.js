import React from 'react'
import Stepper from '../components/Stepper'

export default {
  title: 'Components/Stepper',
  component: Stepper,
}

const Template = (args) => <Stepper {...args} />

export const Default = Template.bind({})
Default.args = {
  textColor: 'black',
  completedDotColor: 'green',
  incompletedDotColor: 'lightgrey',
  step: 1,
  totalSteps: 4,
}
