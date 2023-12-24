import { createContext, type ReactNode } from 'react'
import { useSignals } from '@preact/signals-react/runtime'
import { signal } from '@preact/signals-react'
import { type State } from 'types/State'

export const state = signal<State>({ x: 0, y: 0 })

export const StateContext = createContext<State>(state.value)

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
