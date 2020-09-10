import React from 'react'
import FloatingContainer from '../components/FloatingContainer'

export default {
  title: 'Components/FloatingContainer',
  component: FloatingContainer,
}

export const Default = () => (
  <FloatingContainer>
    <div style={{ padding: 100 }}>Welcome to Filecoin!</div>
  </FloatingContainer>
)
