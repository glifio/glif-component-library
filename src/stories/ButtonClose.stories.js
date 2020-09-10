import React from 'react'
import { ButtonClose } from '../components/IconButtons'

export default {
  title: 'Components/ButtonClose',
  component: ButtonClose,
}

export const Close = () => <ButtonClose onClick={() => {}} />
export const CloseWithTitle = () => <ButtonClose title='Close' disabled={false} onClick={() => {}} />
