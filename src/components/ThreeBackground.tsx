'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function ParticleSwarm() {
  const ref = useRef<THREE.Points>(null);
  const particlesCount = 3000;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for(let i = 0; i < particlesCount * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 8; // Spread across a wider area
    }
    return pos;
  }, [particlesCount]);

  useFrame((state, delta) => {
    if(ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
      
      const elapsedTime = state.clock.getElapsedTime();
      ref.current.position.y = Math.sin(elapsedTime * 0.3) * 0.3;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial 
          transparent 
          color="#ffd700" 
          size={0.012} 
          sizeAttenuation={true} 
          depthWrite={false} 
          blending={THREE.AdditiveBlending} 
        />
      </Points>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-20 bg-[#020202]">
      <Canvas camera={{ position: [0, 0, 3] }} gl={{ antialias: false, alpha: false }}>
         <ParticleSwarm />
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#020202]/60 to-[#020202] z-10 pointer-events-none"></div>
    </div>
  );
}
