'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Stars() {
    const ref = useRef<THREE.Points>(null);
    const [sphere] = useMemo(() => {
        const positions = new Float32Array(5000 * 3);
        for (let i = 0; i < 5000 * 3; i++) {
            const pseudoRandom = Math.sin(i * 12.9898) * 43758.5453;
            positions[i] = (pseudoRandom - Math.floor(pseudoRandom) - 0.5) * 3;
        }
        return [positions];
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#ffce33"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

export default function ThreeBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none w-screen h-screen">
            <Canvas camera={{ position: [0, 0, 1] }} style={{ width: '100vw', height: '100vh', display: 'block' }}>
                <Stars />
            </Canvas>
        </div>
    );
}
