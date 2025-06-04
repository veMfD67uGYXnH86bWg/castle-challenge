import {AppearanceMode, VFXEmitter, VFXParticles} from "wawa-vfx"

export function Rain() {
    return (
        <>
            {/* Step 1: Define your particle system */}
            <VFXParticles
                name="rain" // A unique identifier for this particle system
                settings={{
                    nbParticles: 100000, // Maximum number of particles to allocate
                    gravity: [0, 0, 0], // Apply gravity (x, y, z)
                    fadeSize: [0, 0], // Size fade in/out settings
                    fadeOpacity: [0, 0], // Opacity fade in/out settings
                    renderMode: "stretchBillboard", // "billboard" or "mesh" or "stretchBillboard"
                    intensity: 3, // Brightness multiplier
                    appearance: AppearanceMode.Square, // Define the default appearance to be plane (default) or circular
                    // easing: "easeLinear", // add easing to the particle animations (see EaseFunction in vfxs/types.ts)
                }}
            />

            {/* Step 2: Define your emitter */}
            <VFXEmitter
                // debug // Show debug visualization
                emitter="rain" // Target the particle system by name
                settings={{
                    "duration": 1,
                    "delay": 0,
                    "nbParticles": 3000,
                    "spawnMode": "time",
                    "loop": true,
                    "startPositionMin": [-20, 20, -30],
                    "startPositionMax": [20, 30, 10],
                    "startRotationMin": [0, 0, 0],
                    "startRotationMax": [0, 0, 0],
                    "particlesLifetime": [0.6, 5],
                    "speed": [5, 18],
                    "directionMin": [0, -1, 0],
                    "directionMax": [0.3, -1, 0.3],
                    "rotationSpeedMin": [0, 0, 0],
                    "rotationSpeedMax": [0, 0, 0],
                    "colorStart": ["#474658", "#474658"],
                    "colorEnd": ["#474658", "#474658"],
                    "size": [0.1, 0.15]
                }}
            />
        </>
    )
}