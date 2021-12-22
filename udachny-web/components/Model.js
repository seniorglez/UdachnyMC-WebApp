/*
Auto-generated by: https://github.com/pmndrs/gltfjsx

This file has been modified to change  the position and scale of the meshes,
so do not expect to get this output using the tool over the gltf file.
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from "three"

export default function Model({ ...props }) {
  const group = useRef()
  let theta = 0
  const { nodes, materials } = useGLTF('/aaaa.gltf')
  useFrame(() => group.current.rotation.set(0.35, 5 * Math.sin(THREE.Math.degToRad((theta += 0.06))), 0))
  
  
  return (
    <group ref={group} {...props} dispose={null} scale={75}>
      <mesh
        geometry={nodes.pCube1.geometry}
        material={materials.aiStandardSurface4}
        position={[0, 0.0074, 0]}
        rotation={[0, 0, -Math.PI]}
        scale={[3.38, 0.36, 3.38]}
      />
      <mesh
        geometry={nodes.pCube3.geometry}
        material={materials.aiStandardSurface5}
        position={[0, -0.01, 0]}
        rotation={[0, 0, -Math.PI]}
        scale={[3.38, 3.11, 3.38]}
      />
    </group>
  )
}

useGLTF.preload('/aaaa.gltf')
