import { Units } from 'types/Game'

export const units = [
  Units.First, Units.Second, Units.Third, Units.Fourth,
  Units.Fifth, Units.Sixth, Units.Seventh, Units.Eighth,
  Units.Ninth, Units.Tenth, Units.Eleventh, Units.Twelfth,
  Units.Thirteenth, Units.Fourteenth, Units.Fifteenth, Units.EMPTY,
]

function shuffle(array: Units[]): Units[] {
  let count = 0

  const swap = (arr: Units[], i: number, j: number) => {
    count++;
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    swap(array, i, j)
  }

  if (count % 2 === 0) {
    swap(array, 0, 1)
  }

  return array
}

export function initialize() {
  const _units = shuffle([...units])
  const playground: Units[][] = [[], [], [], []]
  let index = 0
  for (const i of [0, 1, 2, 3]) {
    for (const j of [0, 1, 2, 3]) {
      playground[i][j] = _units[index]
      index++
    }
  }

  return playground
}
