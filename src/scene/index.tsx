import { type FC, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Square from 'components/Square'
import { gradToRad } from 'utils/gradToRad'
import { type Position } from 'types/Position'

const Scene: FC<unknown> = () => {
  const [position, setPosition] = useState<Position>(0)

  const handleClick = () => {
    if (position < 3) {
      setPosition((1 + position) as Position)
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
        position={[position, position]}
        onClick={handleClick}
      />
    </Canvas>
  )
}

export default Scene
