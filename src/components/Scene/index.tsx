import { Canvas } from '@react-three/fiber'
import { gradToRad } from 'utils/gradToRad'
import Playground from 'components/Playground'

function Scene() {
  return (
    <Canvas
      id={'canvas'}
      orthographic={true}
      camera={{
        position: [0, 1, 0],
        rotation: [gradToRad(-90), 0, 0],
        zoom: 1,
        far: 1,
        near: -1
      }}
    >
      <gridHelper args={[50000, 500, 'darkred']}/>
      <directionalLight
        color={'white'}
        position={[0, 1, 0]}
        rotation={[gradToRad(-90), 0, 0]}
      />
      <Playground/>
    </Canvas>
  )
}

export default Scene
