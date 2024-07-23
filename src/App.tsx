import {ThemeProvider} from 'styled-components'
import {BrowserRouter} from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { OrderContextProps } from './contexts/OrderContext'





export function App() {
   

  return (
    
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <GlobalStyle/>
            <OrderContextProps>
              <Router/>
            </OrderContextProps>
        </BrowserRouter>
      </ThemeProvider>  
  )
}

