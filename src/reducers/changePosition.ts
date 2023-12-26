import { state } from 'components/State'

export const changePosition = (currentPosition: 0 | 1 | 2 | 3, nexPosition: 0 | 1 | 2 | 3) => {
  const playground = state.value.playground
  const temp = playground[currentPosition]
  playground[currentPosition] = playground[nexPosition]
  playground[nexPosition] = temp

  state.value = { ...state.value, playground: [...playground] }
}
