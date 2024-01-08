import { Text } from '@react-three/drei'
import { animated, useSpring } from '@react-spring/three'
import { gradToRad } from 'utils/gradToRad'
import { positionToCoordinate } from 'utils/positionToCoordinate'
import { usePrevious } from 'utils/usePrevious'
import { type Position } from 'types/Game'
import { restart } from 'reducers/restart'

const fontProps = {
  font: 'assets/fonts/source-sans-pro-latin-400-normal.woff',
  fontSize: 35,
  letterSpacing: -0.05,
  lineHeight: 1,
  color: 'red',
  'material-toneMapped': false,
}

interface Props {
  size: number
  position: [Position, Position]
  caption: string
  onClick: () => void
}

function Square({
  size,
  position: [x, y],
  caption,
  onClick,
}: Props) {
  const bias = size / 2
  const prevX = usePrevious<Position>(x)
  const prevY = usePrevious<Position>(y)

  const { position } = useSpring({
    from: {
      position: [
        positionToCoordinate(prevX ?? x),
        positionToCoordinate(prevY ?? y),
      ],
    },
    to: {
      position: [
        positionToCoordinate(x),
        positionToCoordinate(y),
      ],
    },
    config: { duration: 100 },
    reset: true,
    onRest: () => { restart() },
  })

  return (
    <animated.group
      onClick={onClick}
      position={position.to((x, y) => [x, 0, y])}
    >
      <mesh
        rotation={[gradToRad(-90), 0, 0]}
        position={[bias, 0, bias]}
      >
        <planeGeometry args={[size, size]}/>
        <meshStandardMaterial color={'#61c6e6'}/>
        <Text {...fontProps}>{caption}</Text>
      </mesh>
    </animated.group>
  )
}

export default Square
