import React from 'react'
import {useGLTF} from '@react-three/drei'

export function Character(props) {
    const {nodes} = useGLTF('./models/character.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow={true}
                receiveShadow={true}
                geometry={nodes.character.geometry}
            >
                <meshStandardMaterial
                    color='lightgrey'
                />
            </mesh>
        </group>
    )
}

useGLTF.preload('./models/character.glb')