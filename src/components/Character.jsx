import React, {useEffect, useRef} from 'react'
import {useGLTF, useAnimations} from '@react-three/drei'
import {button, useControls} from 'leva'

export function Character({animation, ...props}) {
    const group = useRef()
    const {nodes, materials, animations} = useGLTF('./models/character.glb')
    const {actions} = useAnimations(animations, group)

    const {walk} = useControls({
        backgroundColor: '#1dffff',

        // 'button': button(() => test()),
    })
    console.log('actions', actions)

    useEffect(() => {
        actions[animation]?.reset().fadeIn(0.24).play();
        return () => actions?.[animation]?.fadeOut(0.24);
    }, [animation, actions]);

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <skinnedMesh
                        name="Joints"
                        geometry={nodes.Joints.geometry}
                        material={materials.Alpha_Joints_MAT}
                        skeleton={nodes.Joints.skeleton}
                    />
                    <skinnedMesh
                        name="Surface"
                        geometry={nodes.Surface.geometry}
                        material={materials.Alpha_Body_MAT}
                        skeleton={nodes.Surface.skeleton}
                    />
                    <primitive object={nodes.mixamorigHips}/>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('./models/character.glb')