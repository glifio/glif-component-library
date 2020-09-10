import React from 'react'
import StepHeader from '../components/StepHeader'

export default {
  title: 'Components/StepHeader',
  component: StepHeader,
}

const Template = (args) => <StepHeader {...args} />

export const Default = Template.bind({})
Default.args = {
  loading: false,
  currentStep: 1,
  glyphAcronym: 'St',
  // Icon: PropTypes.object,
  totalSteps: 4,
  error: false,
  showStepper: false,
}
