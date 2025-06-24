import * as THREE from 'three';
import {Castle} from './Castle.jsx'
import {Perf} from 'r3f-perf'
import BVHEcctrl from "bvhecctrl";
import {
    StaticCollider,
} from "bvhecctrl";

import {KeyboardControls, Sky, CameraControls, Grid} from '@react-three/drei'
import {Character} from './Character.jsx'
import {Rain} from './Rain.jsx'
import React, {useRef} from 'react'
import {Spotlight} from './Spotlight.jsx'
import {useFrame} from '@react-three/fiber'
import {button, useControls} from 'leva'


export function Experience() {

    const keyboardMap = [
        {name: "forward", keys: ["ArrowUp", "KeyW"]},
        {name: "backward", keys: ["ArrowDown", "KeyS"]},
        {name: "leftward", keys: ["ArrowLeft", "KeyA"]},
        {name: "rightward", keys: ["ArrowRight", "KeyD"]},
        {name: "jump", keys: ["Space"]},
        {name: "run", keys: ["Shift"]},
    ];

    const ecctrlRef = useRef(null);
    const camControlRef = useRef(null);

    useControls('Camera Controls', {
        CameraLock: button(() => {
            camControlRef.current?.lockPointer()
        }),
    })

    useFrame(() => {
        if (ecctrlRef.current.group)
            camControlRef.current.moveTo(
                ecctrlRef.current.group.position.x,
                ecctrlRef.current.group.position.y + 0.3,
                ecctrlRef.current.group.position.z,
                true
            )
    });


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
            <CameraControls
                ref={camControlRef}
                smoothTime={0.1}
                // colliderMeshes={colliderMeshesArray}
                makeDefault
            />
            <ambientLight intensity={1.5}/>
            {/*<Spotlight/>*/}

            <KeyboardControls map={keyboardMap}>
                <BVHEcctrl ref={ecctrlRef} debug colliderCapsuleArgs={[0.3, 1.2, 4, 8]}>
                    <Character animation={"Idle"}/>
                </BVHEcctrl>
            </KeyboardControls>

            <Grid
                args={[300, 300]}
                sectionColor={"lightgray"}
                cellColor={"gray"}
                position={[0, 0.01, 0]}
                userData={{camExcludeCollision: true}} // this won't be collide by camera ray
            />
            <StaticCollider debug>
                {/*<Castle*/}
                {/*    position={[0, -1, -10]}*/}
                {/*    rotation={[0, -Math.PI / 2, 0]}*/}
                {/*/>*/}
                <mesh
                    receiveShadow={true}
                    scale={[150, 150, 1]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[0, 0, 0]}
                >
                    <planeGeometry
                        args={[20, 20]}
                    />
                    <meshStandardMaterial
                        color='lightblue'
                        side={THREE.DoubleSide}
                    />
                </mesh>
            </StaticCollider>

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