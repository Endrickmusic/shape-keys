import { Canvas } from "@react-three/fiber"

import "./index.css"
import { Model } from "./Model"

function App() {
  return (
    <>
      {/* <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-gray-300 to-gray-500"></div> */}
      <Canvas>
        <ambientLight intensity={5.5} />
        <pointLight position={[0, 3, 3]} intensity={10.5} />
        <Model />
      </Canvas>
    </>
  )
}

export default App
