import React from 'react'
import Glyph from '../components/Glyph'
import ErrorGlyph from '../components/Glyph/ErrorGlyph'
// import HeaderGlyph from '../components/Glyph/HeaderGlyph'

export default {
  title: 'Components/Glyph',
  component: Glyph,
}

export const Default = () => (
  <Glyph
    acronym='Sw'
    bg='core.primary'
    borderColor='core.primary'
    color='core.white'
  />
)

export const Error = () => <ErrorGlyph />

// export const Header = () => (
//   <HeaderGlyph
//     text='Sw'
//     bg='core.primary'
//     imageUrl='https://wallet.glif.io/imgwallet.png'
//   />
// )
