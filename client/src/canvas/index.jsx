import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'
import Item from './Item'
import Backdrop from './Backdrop'
import CameraRig from './CameraRig'
import { AmbientLight } from 'three'

const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset='city' />
      <CameraRig>
        {/* <Backdrop /> */}
        <Center>
          <Item />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel