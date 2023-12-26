import { useContext } from 'react'
import { StateContext } from 'contexts'
import { changePosition } from 'reducers/changePosition'
import { getEmptyIndex } from 'selectors/index'
import Square from 'components/Square'
import { type Position, Units } from 'types/Game'

function Playground() {
  const { playground } = useContext(StateContext)

  const handleClick = (i: number, j: number) => () => {
    const nextPosition = getEmptyIndex(playground, i, j)
    if (nextPosition !== undefined) {
      changePosition([i, j], nextPosition)
    }
  }

  return (
    <>
      {playground.map((row, i) =>
        row.map((unit, j) =>
          unit !== Units.EMPTY && (
            <Square
              key={`unit-square-${unit}`}
              size={100}
              position={[i as Position, j as Position]}
              onClick={handleClick(i, j)}
            />
          )))}
    </>
  )
}

export default Playground
