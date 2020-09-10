import React from 'react';

import { DisplayWord } from '../components/MnemonicWord'

export default {
  title: 'Components/MnemonicWord/DisplayWord',
  component: DisplayWord,
}

const Template = (args) => <DisplayWord {...args} />

export const Default = Template.bind({})
Default.args = {
    word: 'hello',
    num: 123,
    valid: false,
}

