import React from 'react'
import { ButtonCopyAccountAddress } from '../components/IconButtons'

export default {
  title: 'Components/ButtonCopyAccountAddress',
  component: ButtonCopyAccountAddress,
}

export const Copy = () => <ButtonCopyAccountAddress onClick={() => {}} />
export const CopyWithTitle = () => <ButtonCopyAccountAddress title='Copy' onClick={() => {}} />