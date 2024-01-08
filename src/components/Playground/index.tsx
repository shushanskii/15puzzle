import { useContext } from 'react'
import { StateContext } from 'contexts'
import { shift } from 'reducers/shift'
import { getNearestEmpty } from 'selectors/index'
import Square from 'components/Square'
import { type Position, Units } from 'types/Game'

function Playground() {
  const { playground } = useContext(StateContext)

  const handleClick = (i: number, j: number) => () => {
    const end = getNearestEmpty(playground, i, j)
    if (end !== undefined) {
      shift([i, j], end)
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
              caption={unit}
              position={[j as Position, i as Position]}
              onClick={handleClick(i, j)}
            />
          ))).flat()}
    </>
  )
}

export default Playground
