import React from 'react'
import {useGLTF} from '@react-three/drei'

export function Castle(props) {
    const {nodes, materials} = useGLTF('./models/castle.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow={true}
                receiveShadow={true}
                geometry={nodes.Castle_Cube032_1.geometry}
                material={materials['78909C']}
            />
            <mesh
                castShadow={true}
                receiveShadow={true}
                geometry={nodes.Castle_Cube032_1_1.geometry}
                material={materials['455A64']}
            />
            <mesh
                castShadow={true}
                receiveShadow={true}
                geometry={nodes.Castle_Cube032_1_2.geometry}
                material={materials['795548']}
            />
        </group>
    )
}

useGLTF.preload('./models/castle.glb')