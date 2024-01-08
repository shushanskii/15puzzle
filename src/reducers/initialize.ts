import { Units } from 'types/Game'

const REPEAT = Math.floor(Math.random() * 9) * 2

export const units = [
  Units.First, Units.Second, Units.Third, Units.Fourth,
  Units.Fifth, Units.Sixth, Units.Seventh, Units.Eighth,
  Units.Ninth, Units.Tenth, Units.Eleventh, Units.Twelfth,
  Units.Thirteenth, Units.Fourteenth, Units.Fifteenth, Units.EMPTY,
]

function getRandomIndex(n: number): number {
  return Math.floor(Math.random() * n)
}

function shuffle(units: Units[], first: number, second: number, repeat: number): Units[] {
  units = [...units];
  [units[first], units[second]] = [units[second], units[first]]
  const n = units.length - repeat
  if (first === second) {
    return shuffle(units, first, getRandomIndex(n), repeat)
  }
  return repeat > 1 ? shuffle(units, getRandomIndex(n), getRandomIndex(n), --repeat) : units
}

export function initialize() {
  const n = units.length
  const _units = shuffle(units, getRandomIndex(n), getRandomIndex(n), REPEAT)
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
