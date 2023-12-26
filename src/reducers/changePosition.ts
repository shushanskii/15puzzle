import { state } from 'state'

export function changePosition(currentPosition: number, nexPosition: number) {
  const playground = state.value.playground

  const temp = playground[currentPosition]
  playground[currentPosition] = playground[nexPosition]
  playground[nexPosition] = temp

  state.value = { ...state.value, playground: [...playground] }
}
