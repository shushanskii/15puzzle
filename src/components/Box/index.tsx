/* eslint-disable react/no-unknown-property */
import { type FC } from 'react'

const Box: FC<unknown> = () => (
  <boxHelper>
    <mesh>
      <boxGeometry args={[1, 1, 1]}/>
      <meshPhongMaterial color={'red'}/>
    </mesh>
  </boxHelper>
)

export default Box
