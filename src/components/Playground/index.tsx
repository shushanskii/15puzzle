import { type FC, useState } from 'react'
import type { Position } from 'types/Position'
import Square from 'components/Square'

const Playground: FC<unknown> = () => {
  const [position, setPosition] = useState<[Position, Position]>([1, 1])

  const [_x, _y] = position

  const handleClick = () => {
    setPosition(_x === 1 ? [0, 0] : [1, 1])
  }

  return (
    <>
      <Square
        size={100}
        position={[_x, _y]}
        onClick={handleClick}
      />
    </>
  )
}

export default Playground
