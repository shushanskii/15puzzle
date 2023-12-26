import { state } from 'state'

export function changePosition(currentPosition: [number, number], nexPosition: [number, number]) {
  const playground = state.value.playground

  const temp = playground[currentPosition[0]][currentPosition[1]]
  playground[currentPosition[0]][currentPosition[1]] = playground[nexPosition[0]][nexPosition[1]]
  playground[nexPosition[0]][nexPosition[1]] = temp

  state.value = { ...state.value, playground: [...playground] }
}
