import { type Position } from 'types/Game'

const GRID_START = -200
const GRID_UNIT = 100

export function positionToCoordinate(position: Position): number {
  return GRID_START + position * GRID_UNIT
}
