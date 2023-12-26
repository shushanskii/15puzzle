import { Units } from 'types/Game'

export function getEmptyIndex(playground: Units[][], i: number, j: number): [number, number] | undefined {
  if (playground[i - 1] !== undefined && playground[i - 1][j] === Units.EMPTY) {
    return [i - 1, j]
  }

  if (playground[i + 1] !== undefined && playground[i + 1][j] === Units.EMPTY) {
    return [i + 1, j]
  }

  if (playground[i][j - 1] === Units.EMPTY) {
    return [i, j - 1]
  }

  if (playground[i][j + 1] === Units.EMPTY) {
    return [i, j + 1]
  }
}
