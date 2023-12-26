import { signal } from '@preact/signals-react'
import type { State } from 'types/State'
import { Units } from 'types/Game'

export const state = signal<State>({ playground: [Units.First, Units.EMPTY, Units.Second, Units.Third] })
