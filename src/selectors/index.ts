import { Units } from 'types/Game'

export function getEmptyIndex(playground: Units[], index: number): number | undefined {
  if (playground[index - 1] === Units.EMPTY) {
    return index - 1
  }

  if (playground[index + 1] === Units.EMPTY) {
    return index + 1
  }
}
