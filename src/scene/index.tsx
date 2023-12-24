/* eslint-disable react/no-unknown-property */
import { type FC } from 'react'
import { Canvas } from '@react-three/fiber'
import Square from 'components/Box'
import { gradToRad } from 'utils/gradToRad'

const Scene: FC<unknown> = () => (
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
    <Square size={100} position={[-200, -200]}/>
  </Canvas>
)

export default Scene
