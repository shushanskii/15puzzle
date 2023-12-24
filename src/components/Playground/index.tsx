import { type FC, useContext } from 'react'
import { changePosition } from 'reducers/changePosition'
import Square from 'components/Square'
import { StateContext } from 'components/State'

const Playground: FC<unknown> = () => {
  const { x, y } = useContext(StateContext)

  const handleClick = () => {
    changePosition(1, 1)
  }

  return (
    <>
      <Square
        size={100}
        position={[x, y]}
        onClick={handleClick}
      />
    </>
  )
}

export default Playground
