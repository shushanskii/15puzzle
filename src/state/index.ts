import { signal } from '@preact/signals-react'
import type { State } from 'types/State'
import { Units } from 'types/Game'

export const state = signal<State>({
  playground: [
    [Units.First, Units.Second, Units.Third, Units.Fourth],
    [Units.Fifth, Units.Sixth, Units.Seventh, Units.Eighth],
    [Units.Ninth, Units.Tenth, Units.Eleventh, Units.Twelfth],
    [Units.Thirteenth, Units.Fourteenth, Units.Fifteenth, Units.EMPTY],
  ],
})
