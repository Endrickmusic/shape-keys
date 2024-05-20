import { useRef, useEffect } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("./models/shapekey_05.glb")
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    console.log(actions)
    actions["Action"].play()
  }, [])

  return (
    <group
      position={[-12, -4, 0]}
      scale={[2, 2, 2]}
      ref={group}
      {...props}
      dispose={null}
    >
      <group name="Scene">
        <mesh
          name="Icosphere"
          castShadow
          receiveShadow
          geometry={nodes.Icosphere.geometry}
          material={nodes.Icosphere.material}
          morphTargetDictionary={nodes.Icosphere.morphTargetDictionary}
          morphTargetInfluences={nodes.Icosphere.morphTargetInfluences}
        />
      </group>
    </group>
  )
}

useGLTF.preload("./models/shapekey_05.glb")
