import { Units } from 'types/Game'

const units = [
  Units.First, Units.Second, Units.Third, Units.Fourth,
  Units.Fifth, Units.Sixth, Units.Seventh, Units.Eighth,
  Units.Ninth, Units.Tenth, Units.Eleventh, Units.Twelfth,
  Units.Thirteenth, Units.Fourteenth, Units.Fifteenth, Units.EMPTY,
]

export function initialize() {
  const playground: Units[][] = [[], [], [], []]

  for (const i of [0, 1, 2, 3]) {
    for (const j of [0, 1, 2, 3]) {
      const randomUnitIndex = Math.floor(Math.random() * units.length)
      playground[i][j] = units[randomUnitIndex]
      units.splice(randomUnitIndex, 1)
    }
  }

  return playground
}
