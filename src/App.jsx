import './App.css'
import {Leva, useControls} from 'leva'
import {Canvas} from '@react-three/fiber'
import * as THREE from 'three'
import {OrbitControls, PerspectiveCamera} from '@react-three/drei'
import {Experience} from './components/Experience.jsx'

function App() {

    const {backgroundColor} = useControls({
        backgroundColor: '#1dffff'
    })

    return (
        <>
            <Leva/>
            <Canvas
                dpr={[1, 2]}
                gl={{
                    toneMapping: 4,
                    antialias: true,
                    outputColorSpace: THREE.SRGBColorSpace,
                    stencil: true
                }}
            >
                <OrbitControls
                    name='orbit_controls'
                    makeDefault={true}
                />
                <axesHelper args={[10]}/>
                <color
                    attach='background'
                    args={[backgroundColor]}
                />
                <PerspectiveCamera
                    name='camera'
                    makeDefault={true}
                    fov={45}
                    near={0.1}
                    far={200}
                    position={[0, 5, 10]}
                />
                <Experience/>
            </Canvas>
        </>

    )
}

export default App