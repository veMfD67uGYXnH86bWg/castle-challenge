import * as THREE from 'three';
import {Castle} from './Castle.jsx'
import {Perf} from 'r3f-perf'
import {KeyboardControls, Sky} from '@react-three/drei'
import {Character} from './Character.jsx'
import {Rain} from './Rain.jsx'
import Ecctrl, {EcctrlAnimation} from "ecctrl"
import {Physics, RigidBody} from '@react-three/rapier'
import React from 'react'
import {Spotlight} from './Spotlight.jsx'


export function Experience() {

    const keyboardMap = [
        {name: "forward", keys: ["ArrowUp", "KeyW"]},
        {name: "backward", keys: ["ArrowDown", "KeyS"]},
        {name: "leftward", keys: ["ArrowLeft", "KeyA"]},
        {name: "rightward", keys: ["ArrowRight", "KeyD"]},
        {name: "jump", keys: ["Space"]},
        {name: "run", keys: ["Shift"]},
        // Optional animation key map
        // {name: "action1", keys: ["1"]},
        // {name: "action2", keys: ["2"]},
        // {name: "action3", keys: ["3"]},
        // {name: "action4", keys: ["KeyF"]},
    ];


    return (
        <>
            {/*<mesh position={[0, 0, 0]} dispose={null}>
                <sphereGeometry args={[1, 32, 32]}/>
                <meshBasicMaterial color='blue'/>
            </mesh>*/}

            <Perf
                position='top-left'
                deepAnalyze={false}
                style={{
                    'zIndex': 0
                }}
            />

            {/*<Sky
                distance={450000}
                sunPosition={[0, 1, 0]}
                inclination={0}
                azimuth={0.25}
            />*/}

            {/* Rain Particles*/}
            {/*<Rain/>*/}

            {/* Lights */}
            <ambientLight intensity={0.2}/>
            <Spotlight/>

            <Character/>
            <Castle
                position={[0, -1, -10]}
                rotation={[0, -Math.PI / 2, 0]}
            />
            <mesh
                receiveShadow={true}
                scale={[150, 150, 1]}
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -1.05, 0]}
            >
                <planeGeometry
                    args={[20, 20]}
                />
                <meshStandardMaterial
                    color='#56cb4e'
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/*<Physics
                // debug={physics}
                timeStep="vary"
            >
                 Keyboard preset
                <KeyboardControls map={keyboardMap}>
                     Character Control
                    <Ecctrl>
                         Character
                        <Character/>
                    </Ecctrl>
                </KeyboardControls>

                 Castle
                <Castle position={[0, -1, -10]} rotation={[0, -Math.PI / 2, 0]}/>
                 Ground plane
                <RigidBody>
                    <mesh scale={[150, 150, 1]} position={[0, -1.05, 0]} dispose={null} rotation={[-Math.PI / 2, 0, 0]}>
                        <planeGeometry args={[1, 1]}/>
                        <meshBasicMaterial
                            color='#56cb4e'
                            side={THREE.DoubleSide}
                        />
                    </mesh>
                </RigidBody>
            </Physics>*/}
        </>
    )
}