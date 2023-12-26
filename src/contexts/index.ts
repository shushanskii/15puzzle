import { createContext } from 'react'
import type { State } from 'types/State'
import { state } from 'state'

export const StateContext = createContext<State>(state.value)
