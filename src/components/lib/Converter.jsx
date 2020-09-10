import React, { useContext, createContext, useEffect, useState } from 'react'
import { string, node, func } from 'prop-types'
import { Converter } from '@openworklabs/filecoin-number'
// import reportError from '../utils/reportError'

export const ConverterContext = createContext({})

export const ConverterWrapper = ({ children, currency, onError }) => {
  const [converter, setConverter] = useState(null)
  const [converterError, setConverterError] = useState('')
  useEffect(() => {
    const setupConverter = async () => {
      try {
        const converterInstance = new Converter(currency, {
          apiURL: 'https://cmc-proxy.openworklabs.com'
        })
        await converterInstance.cacheConversionRate()
        setConverter(converterInstance)
      } catch (err) {
        // reportError(3, false, err.message, err.stack)
        setConverterError(err.message || err)
        onError(err)
      }
    }

    setupConverter()
  }, [currency])
  return (
    <ConverterContext.Provider value={{ converter, converterError }}>
      {children}
    </ConverterContext.Provider>
  )
}

ConverterWrapper.propTypes = {
  currency: string,
  children: node,
  onError: func.isRequired,
}

ConverterWrapper.defaultProps = {
  currency: 'USD',
  children: <></>
}

// The converter is used to switch between FIL <> USD
export const useConverter = () => {
  return useContext(ConverterContext)
}
