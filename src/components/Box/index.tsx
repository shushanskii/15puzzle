/* eslint-disable react/no-unknown-property */
import { type FC, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { gradToRad } from 'utils/gradToRad'

const Box: FC<unknown> = () => {
  const [rotation, setRotation] = useState<number>(0)

  useFrame((state, delta) => {
    setRotation(rotation + delta)
  })

  return (
    <mesh rotation={[gradToRad(-90), 0, rotation]} position={[50, 0, 0]}>
      <planeGeometry args={[100, 100]}/>
      <meshPhongMaterial color={'red'}/>
    </mesh>
  )
}

export default Box
