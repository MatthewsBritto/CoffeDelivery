import {ThemeProvider} from 'styled-components'
import { useState } from 'react'
import {BrowserRouter} from 'react-router-dom'

import { defaultTheme } from './syles/themes/default'
import { GlobalStyle } from './syles/global'
import { Router } from './Router'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle/>
        <Router/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

