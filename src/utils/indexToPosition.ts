import { type Position } from 'types/Game'

export function indexToPosition(index: number): [Position, Position] | undefined {
  switch (index) {
  case 0:
    return [0, 0]
  case 1:
    return [1, 0]
  case 2:
    return [2, 0]
  case 3:
    return [3, 0]
  }
}
