import { state } from 'state'
import { initialize, units } from 'reducers/initialize'

export function restart() {
  const playground = state.value.playground
  if (JSON.stringify(playground.flat()) === JSON.stringify(units)) {
    state.value = { ...state.value, playground: initialize() }
  }
}
