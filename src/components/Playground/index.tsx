import { useContext } from 'react'
import { StateContext } from 'contexts'
import { changePosition } from 'reducers/changePosition'
import { getEmptyIndex } from 'selectors/index'
import Square from 'components/Square'
import { indexToPosition } from 'utils/indexToPosition'
import { Units } from 'types/Game'

function Playground() {
  const { playground } = useContext(StateContext)

  const handleClick = (index: number) => () => {
    const nextPosition = getEmptyIndex(playground, index)
    if (nextPosition !== undefined) {
      changePosition((index as unknown) as any, (nextPosition as unknown) as any)
    }
  }

  return (
    <>
      {playground.map((unit, index) => unit !== Units.EMPTY && (
        <Square
          key={`unit-square-${unit}`}
          size={100}
          position={indexToPosition((index as unknown) as any)}
          onClick={handleClick(index)}
        />
      ))}
    </>
  )
}

export default Playground
