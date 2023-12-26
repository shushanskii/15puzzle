import { type ReactNode } from 'react'
import { useSignals } from '@preact/signals-react/runtime'
import { StateContext } from 'contexts'
import { state } from 'state'

interface Props {
  children?: ReactNode
}

function StateProvider({ children }: Props) {
  useSignals()

  return (
    <StateContext.Provider value={state.value}>
      {children}
    </StateContext.Provider>
  )
}

export default StateProvider
