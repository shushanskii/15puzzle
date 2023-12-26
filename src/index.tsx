import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from 'style'
import StateProvider from 'components/StateProvider'
import Scene from 'components/Scene'

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
