import {ThemeProvider} from 'styled-components'
import {BrowserRouter} from 'react-router-dom'
import { defaultTheme } from './syles/themes/default'
import { GlobalStyle } from './syles/global'
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

