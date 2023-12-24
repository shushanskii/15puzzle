import { state } from 'components/State'
import { type Position } from 'types/Position'

export function changePosition(x: Position, y: Position) {
  state.value = { x, y }
}
