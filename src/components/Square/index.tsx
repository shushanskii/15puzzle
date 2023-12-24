import { type FC } from 'react'
import { gradToRad } from 'utils/gradToRad'
import { positionToCoordinate } from 'utils/positionToCoordinate'
import { type Position } from 'types/Position'

interface Props {
  size: number
  position: [Position, Position]
  onClick: () => void
}

const Square: FC<Props> = ({
  size,
  position: [x, y],
  onClick,
}) => {
  const bias = size / 2

  return (
    <group
      onClick={onClick}
      position={[positionToCoordinate(x), 0, positionToCoordinate(y)]}
    >
      <mesh
        rotation={[gradToRad(-90), 0, 0]}
        position={[bias, 0, bias]}
      >
        <planeGeometry args={[size, size]}/>
        <meshPhongMaterial color={'red'}/>
      </mesh>
    </group>
  )
}

export default Square
