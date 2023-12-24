import { type FC, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Square from 'components/Square'
import { gradToRad } from 'utils/gradToRad'
import { type Position } from 'types/Position'

const Scene: FC<unknown> = () => {
  const [position, setPosition] = useState<[Position, Position]>([0, 0])

  const [_x, _y] = position

  const handleClick = () => {
    if (_x < 3) {
      setPosition([(_x + 1) as Position, (_y + 1) as Position])
    }
  }

  return (
    <Canvas
      id={'canvas'}
      orthographic={true}
      camera={{
        position: [0, 1, 0],
        rotation: [gradToRad(-90), 0, 0],
        zoom: 1,
        far: 1,
        near: -1,
      }}
    >
      <gridHelper args={[50000, 500, 'darkred']}/>
      <directionalLight
        color={'white'}
        position={[0, 1, 0]}
        rotation={[gradToRad(-90), 0, 0]}
      />
      <Square
        size={100}
        position={[_x, _y]}
        onClick={handleClick}
      />
    </Canvas>
  )
}

export default Scene
