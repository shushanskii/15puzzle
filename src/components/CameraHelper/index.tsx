/* eslint-disable react/no-unknown-property */
import { type FC, useState } from 'react'
import { OrthographicCamera } from 'three'
import { useFrame } from '@react-three/fiber'
import { type Euler } from '@react-three/fiber'
import { gradToRad } from 'utils/gradToRad'

const camera = new OrthographicCamera(2, -2, 2, -2, 0, 10)

const CameraHelper: FC<unknown> = () => {
  const [rotation, setRotation] = useState<Euler>([0, 0, 0])

  const [xRotation, ...restRotation] = rotation

  useFrame((state, delta) => {
    // @ts-expect-error
    setRotation([xRotation + delta, ...restRotation])
  })

  return (
    <group position={[0, 10, 0]} rotation={[gradToRad(-90), 0, 0]}>
      <cameraHelper args={[camera]}/>
    </group>
  )
}

export default CameraHelper
