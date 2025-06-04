import React, {useRef, useEffect} from 'react'
import {useFrame, useThree} from '@react-three/fiber'
import {useHelper, useTexture} from '@react-three/drei'
import * as THREE from 'three'
import {useControls} from 'leva'


export function Spotlight({defaultTargetDistance = 100}) {
    const spotLightRef = useRef(null)
    const spotLightTargetRef = useRef(null)

    const {camera, raycaster, pointer} = useThree()
    const goboTexture = useTexture('./images/cookie_flashlight.png')

    /*const {penumbra, intensity, angle} = useControls('Flashlight', {
        penumbra: {value: 0.3, min: 0, max: 1, step: 0.01},
        intensity: {value: 300, min: 0, max: 1000, step: 1},
        angle: {value: Math.PI / 12, min: 0, max: Math.PI / 2, step: 0.01}
    })*/

    // useHelper(spotLightRef, THREE.SpotLightHelper, 'white') // Helper will be white

    useEffect(() => {
        if (spotLightRef.current && spotLightTargetRef.current) {
            spotLightRef.current.target = spotLightTargetRef.current
        }
    }, [])

    const targetPosition = new THREE.Vector3()
    const cameraLookAt = new THREE.Vector3()

    useFrame(() => {
        if (!spotLightRef.current || !spotLightTargetRef.current) return
        spotLightRef.current.position.copy(camera.position)
        raycaster.setFromCamera(pointer, camera)
        camera.getWorldDirection(cameraLookAt)
        targetPosition.copy(raycaster.ray.origin).addScaledVector(raycaster.ray.direction, defaultTargetDistance)
        spotLightTargetRef.current.position.copy(targetPosition)
    })

    return (
        <>
            <spotLight
                ref={spotLightRef}
                map={goboTexture}
                angle={Math.PI / 12}
                penumbra={0.05}
                intensity={1500}
                castShadow={true}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-near={0.5}
                shadow-camera-far={150}
                shadow-bias={-0.001}
            />
            <object3D ref={spotLightTargetRef}/>
        </>
    )
}