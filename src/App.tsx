// eslint-disable-next-line no-use-before-define
import React from 'react'
import i18nBootstrap from './config/i18n'
import { Routes } from './routes'

i18nBootstrap.init()

function App () {
  return (
    <Routes />
  )
}

export default App
