import { state } from 'state'

function swap([currentX, currentY]: [number, number], [nextX, nextY]: [number, number]) {
  const playground = state.value.playground

  const temp = playground[currentX][currentY]
  playground[currentX][currentY] = playground[nextX][nextY]
  playground[nextX][nextY] = temp

  state.value = {
    ...state.value,
    playground: [...playground],
  };
}

export function shift(start: [number, number], end: [number, number]) {
  // Получаем координаты start и end
  const [startRow, startCol] = start
  const [endRow, endCol] = end

  // Вычисляем шаги и направление
  const rowStep = startRow < endRow ? 1 : -1
  const colStep = startCol < endCol ? 1 : -1

  // Сохраняем последний элемент
  let lastElement

  // Если start и end находятся в одной строке
  if (startRow === endRow) {
    lastElement = state.value.playground[startRow][endCol]

    for (let col = endCol; col !== startCol; col -= colStep) {
      swap([startRow, col], [startRow, col - colStep])
    }
  }

  // Если start и end находятся в одном столбце
  else if (startCol === endCol) {
    lastElement = state.value.playground[endRow][startCol]

    for (let row = endRow; row !== startRow; row -= rowStep) {
      swap([row, startCol], [row - rowStep, startCol])
    }
  }

  // Устанавливаем последний элемент на место первого
  state.value.playground[startRow][startCol] = lastElement!
}
