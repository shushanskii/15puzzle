/* eslint-disable react/no-unknown-property */
import { type FC } from 'react'
import { gradToRad } from 'utils/gradToRad'

interface Props {
  size: number
  position: [number, number]
}

const Square: FC<Props> = ({
  size,
  position: [x, y],
}) => {
  const bias = size / 2

  return (
    <group position={[x, 0, y]}>
      <mesh rotation={[gradToRad(-90), 0, 0]} position={[bias, 0, bias]}>
        <planeGeometry args={[size, size]}/>
        <meshPhongMaterial color={'red'}/>
      </mesh>
    </group>
  )
}

export default Square
