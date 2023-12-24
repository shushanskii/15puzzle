import { type FC, useEffect, useRef, useState } from 'react'
import { gradToRad } from 'utils/gradToRad'
import { positionToCoordinate } from 'utils/positionToCoordinate'
import { animate } from 'utils/animate'
import { usePrevious } from 'utils/usePrevious'
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
  const mounted = useRef<boolean>(false)
  const [position, setPosition] = useState<[number, number]>([positionToCoordinate(x), positionToCoordinate(y)])
  const prevX = usePrevious<Position>(x)
  const prevY = usePrevious<Position>(y)

  const [_x, _y] = position

  useEffect(() => {
    if (mounted.current) {
      animate(timeFraction => timeFraction, progress => {
        setPosition([
          x > prevX! ? progress * 100 + _x : x < prevX! ? _x - progress * 100 : _x,
          y > prevY! ? progress * 100 + _y : y < prevY! ? _y - progress * 100 : _y,
        ])
      }, 100)
    } else {
      mounted.current = true
    }
  }, [x, y])

  return (
    <group
      onClick={onClick}
      position={[_x, 0, _y]}
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
