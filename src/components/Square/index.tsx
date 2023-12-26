import { useEffect, useRef, useState } from 'react'
import { useTexture } from '@react-three/drei'
import { gradToRad } from 'utils/gradToRad'
import { positionToCoordinate } from 'utils/positionToCoordinate'
import { animate } from 'utils/animate'
import { usePrevious } from 'utils/usePrevious'
import { type Position } from 'types/Game'

interface Props {
  size: number
  position: [Position, Position]
  onClick: () => void
}

function Square({
  size,
  position: [x, y],
  onClick,
}: Props) {
  const texture = useTexture({
    map: 'assets/textures/Marble021_1K-JPG/Marble021_1K-JPG_Color.jpg', //
    displacementMap: 'assets/textures/Marble021_1K-JPG/Marble021_1K-JPG_Displacement.jpg',
    normalMap: 'assets/textures/Marble021_1K-JPG/Marble021_1K-JPG_NormalGL.jpg',
    roughnessMap: 'assets/textures/Marble021_1K-JPG/Marble021_1K-JPG_Roughness.jpg',
    // aoMap: 'PavingStones092_1K_AmbientOcclusion.jpg',
  })

  const bias = size / 2
  const mounted = useRef<boolean>(false)
  const [position, setPosition] = useState<[number, number]>([positionToCoordinate(x), positionToCoordinate(y)])
  const prevX = usePrevious<Position>(x)
  const prevY = usePrevious<Position>(y)

  const [_x, _y] = position

  useEffect(() => {
    if (mounted.current) {
      animate(timeFraction => 1 - Math.sin(Math.acos(timeFraction)), progress => {
        setPosition([
          x > prevX! ? progress * 100 + _x : x < prevX! ? _x - progress * 100 : _x,
          y > prevY! ? progress * 100 + _y : y < prevY! ? _y - progress * 100 : _y,
        ])
      }, 100)
    } else {
      mounted.current = true
    }
  }, [x, y])

  return (
    <group
      onClick={onClick}
      position={[_x, 0, _y]}
    >
      <mesh
        rotation={[gradToRad(-90), 0, 0]}
        position={[bias, 0, bias]}
      >
        <planeGeometry args={[size, size]}/>
        <meshStandardMaterial {...texture} />
      </mesh>
    </group>
  )
}

export default Square
