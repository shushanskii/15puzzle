/* eslint-disable react/no-unknown-property */
import { type FC } from 'react'

const Box: FC<unknown> = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]}/>
  </mesh>
)

export default Box
