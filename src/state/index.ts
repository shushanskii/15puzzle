import { signal } from '@preact/signals-react'
import type { State } from 'types/State'
import { initialize } from 'reducers/initialize'

export const state = signal<State>({
  playground: initialize()
})
