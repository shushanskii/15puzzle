/* eslint-disable react/no-unknown-property */
import { type FC } from 'react'
import { Canvas } from '@react-three/fiber'
import Box from 'components/Box'
import { gradToRad } from 'utils/gradToRad'

const Scene: FC<unknown> = () => (
  <Canvas id={'canvas'} orthographic={true} camera={{
    position: [0, 1, 0],
    rotation: [gradToRad(-90), 0, 0],
    top: 0,
    bottom: 200,
    left: 0,
    right: 200,
    zoom: 1,
    far: 1,
    near: -1,
  }}>
    <gridHelper args={[50000, 5000, 'darkred']}/>
    <directionalLight color={'white'} position={[0, 10, 0]}/>
    <Box/>
  </Canvas>
)

export default Scene
