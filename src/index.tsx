import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from 'style'
import StateProvider from 'components/State'
import Scene from 'scene'

const root = ReactDOM.createRoot(
  document.getElementById('root')!
)
root.render(
  <StrictMode>
    <StateProvider>
      <GlobalStyle/>
      <Scene/>
    </StateProvider>
  </StrictMode>
)
