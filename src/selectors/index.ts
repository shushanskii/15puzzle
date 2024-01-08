import { Units } from 'types/Game'

export function getNearestEmpty(playground: Units[][], i: number, j: number): [number, number] | undefined {
  const size = playground.length

  // Check the row i
  for (let col = 0; col < size; col++) {
    if (playground[i][col] === Units.EMPTY) {
      return [i, col]
    }
  }

  // Check the column j
  for (let row = 0; row < size; row++) {
    if (playground[row][j] === Units.EMPTY) {
      return [row, j]
    }
  }

  return undefined
}
