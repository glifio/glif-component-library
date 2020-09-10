import React from 'react';

import { InputWord } from '../components/MnemonicWord'

export default {
  title: 'Components/MnemonicWord/InputWord',
  component: InputWord,
}

const Template = (args) => <InputWord {...args} />

export const Default = Template.bind({})
Default.args = {
  wordToMatch: 'word',
  correctWordCount: 2,
  setCorrectWordCount: () => {},
  num: 123,
  importSeedError: false,
}

