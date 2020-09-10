import React from 'react'
import ThemeProvider from '../src/components/ThemeProvider'
import theme from '../src/components/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
    Story => <ThemeProvider theme={theme}><Story /></ThemeProvider>
]