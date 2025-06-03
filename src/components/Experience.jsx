import * as THREE from 'three';
import {Castle} from './Castle.jsx'
import {Perf} from 'r3f-perf'
import {Sky} from '@react-three/drei'
import {Character} from './Character.jsx'


export function Experience() {
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

            <Sky
                distance={450000}
                sunPosition={[0, 1, 0]}
                inclination={0}
                azimuth={0.25}
            />

            {/* Ground plane */}
            <mesh scale={[150, 150, 1]} position={[0, -1.05, 0]} dispose={null} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[1, 1]}/>
                <meshBasicMaterial
                    color='#56cb4e'
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* Lights */}
            <ambientLight intensity={0.5}/>

            {/* Castle*/}
            <Castle position={[0, -1, -10]} rotation={[0, -Math.PI / 2, 0]}/>

            {/* Character */}
            <Character/>
        </>
    )
}