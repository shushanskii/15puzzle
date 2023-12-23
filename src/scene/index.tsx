/* eslint-disable react/no-unknown-property */
import { type FC } from 'react'
import { Canvas } from '@react-three/fiber'
import Box from 'components/Box'
import { gradToRad } from 'utils/gradToRad'

const Scene: FC<unknown> = () =>

  (
    <Canvas id={'canvas'} orthographic={true} camera={{
      position: [0, 10, 0],
      rotation: [gradToRad(-90), 0, 0],
      zoom: 100,
      far: 20
    }}>
      <gridHelper args={[100, 100, 'darkred']}/>
      <directionalLight color={'white'} position={[0, 10, 0]}/>
      <Box/>
    </Canvas>
  )

export default Scene
