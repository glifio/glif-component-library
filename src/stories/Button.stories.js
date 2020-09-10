import React from 'react';

import Button from '../components/Button'

export default {
  title: 'Components/Button',
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
    title: 'Click me',
    variant: 'primary',
    disabled: false,
}
Default.argTypes = {
    variant: {
        control: {
            type: 'select',
            options: ['primary', 'secondary', 'tertiary'],
        }
    }
}

