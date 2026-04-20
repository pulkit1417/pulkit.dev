'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import * as THREE from 'three';

const LOGO = 'PULKIT.DEV';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const overlayRef   = useRef<HTMLDivElement>(null);
  const topPanelRef  = useRef<HTMLDivElement>(null);
  const botPanelRef  = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const logoRef      = useRef<HTMLDivElement>(null);
  const barFillRef   = useRef<HTMLDivElement>(null);
  const barWrapRef   = useRef<HTMLDivElement>(null);
  const counterRef   = useRef<HTMLSpanElement>(null);
  const taglineRef   = useRef<HTMLParagraphElement>(null);
  const lettersRef   = useRef<(HTMLSpanElement | null)[]>([]);
  const cornerRefs   = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem('pg_loaded')) {
      setVisible(false);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    /* ── Three.js scene ─────────────────────────────── */
    const W = 320, H = 320;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.z = 4.5;

    // ── Ring group (gyroscope atom) ──
    const ringGroup = new THREE.Group();
    scene.add(ringGroup);

    const ringMat = (opacity = 0.9) => new THREE.MeshBasicMaterial({
      color: 0xffd700,
      wireframe: true,
      transparent: true,
      opacity,
    });

    // Three rings at 60° increments around Y axis
    const rings: THREE.Mesh[] = [];
    [0, 60, 120].forEach((deg, i) => {
      const geo  = new THREE.TorusGeometry(1.4, 0.012, 8, 120);
      const mesh = new THREE.Mesh(geo, ringMat(0.9 - i * 0.15));
      // Tilt each ring differently
      mesh.rotation.x = THREE.MathUtils.degToRad(deg);
      mesh.rotation.z = THREE.MathUtils.degToRad(deg * 0.5);
      ringGroup.add(mesh);
      rings.push(mesh);
    });

    // Dotted orbit particles on ring paths
    const orbitMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.04,
      transparent: true,
      opacity: 0,
    });
    const orbitGeo = new THREE.BufferGeometry();
    const orbitPositions: number[] = [];
    rings.forEach((ring) => {
      for (let t = 0; t < Math.PI * 2; t += Math.PI / 18) {
        const x = Math.cos(t) * 1.4;
        const y = Math.sin(t) * 1.4;
        const vec = new THREE.Vector3(x, y, 0).applyEuler(ring.rotation);
        orbitPositions.push(vec.x, vec.y, vec.z);
      }
    });
    orbitGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(orbitPositions), 3));
    const orbitPoints = new THREE.Points(orbitGeo, orbitMat);
    scene.add(orbitPoints);

    // Glowing center sphere
    const sphereGeo = new THREE.SphereGeometry(0.18, 32, 32);
    const sphereMat = new THREE.MeshBasicMaterial({ color: 0xffd700, transparent: true, opacity: 0 });
    const sphere    = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(sphere);

    // Faint outer halo ring
    const haloGeo  = new THREE.TorusGeometry(1.85, 0.004, 4, 200);
    const haloMat  = new THREE.MeshBasicMaterial({ color: 0xffd700, transparent: true, opacity: 0 });
    const halo     = new THREE.Mesh(haloGeo, haloMat);
    scene.add(halo);



    let rafId: number;
    const tick = () => {
      rafId = requestAnimationFrame(tick);
      // Each ring rotates on its own axis at different speed
      rings[0].rotation.y += 0.012;
      rings[1].rotation.z += 0.009;
      rings[2].rotation.x += 0.007;
      ringGroup.rotation.y += 0.004;
      ringGroup.rotation.x += 0.002;
      halo.rotation.z += 0.003;
      renderer.render(scene, camera);
    };
    tick();


    /* ── GSAP intro timeline ─────────────────────────────── */
    const tl = gsap.timeline({ delay: 0.1 });

    // Corners draw in
    tl.fromTo(
      cornerRefs.current.filter(Boolean),
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.08, ease: 'back.out(2)' },
    );

    // Three.js rings fade in + group scales up
    rings.forEach((ring, i) => {
      tl.to((ring.material as THREE.MeshBasicMaterial), { opacity: 0.9 - i * 0.15, duration: 1, ease: 'power2.out' }, i === 0 ? '-=0.2' : '<0.1');
    });
    tl.to(orbitMat,  { opacity: 0.6, duration: 1,   ease: 'power2.out' }, '<');
    tl.to(sphereMat, { opacity: 1,   duration: 0.8, ease: 'power2.out' }, '<0.2');
    tl.to(haloMat,   { opacity: 0.25, duration: 1.2, ease: 'power2.out' }, '<');
    tl.fromTo(ringGroup.scale,
      { x: 0.3, y: 0.3, z: 0.3 },
      { x: 1,   y: 1,   z: 1,   duration: 1.2, ease: 'back.out(1.4)' },
      '<-0.8',
    );


    // Logo letters stagger in
    tl.fromTo(
      lettersRef.current.filter(Boolean),
      { opacity: 0, y: 30, rotateX: -90 },
      { opacity: 1, y: 0, rotateX: 0, duration: 0.55, stagger: 0.06, ease: 'back.out(2)' },
      '-=0.6',
    );

    // Tagline
    tl.fromTo(taglineRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      '-=0.2',
    );

    // Progress bar wrapper fades in
    tl.fromTo(barWrapRef.current,
      { opacity: 0, scaleX: 0.8 },
      { opacity: 1, scaleX: 1, duration: 0.5, ease: 'power2.out' },
      '-=0.2',
    );

    // Bar fill + counter
    tl.to(barFillRef.current, { width: '100%', duration: 1.8, ease: 'power1.inOut' }, '-=0.1');

    const counter = { val: 0 };
    gsap.to(counter, {
      val: 100,
      duration: 1.8,
      delay: tl.duration() - 1.9,
      ease: 'power1.inOut',
      onUpdate() {
        if (counterRef.current) counterRef.current.textContent = `${Math.round(counter.val)}%`;
      },
    });

    // Hold at 100%, then exit
    tl.call(() => {
      sessionStorage.setItem('pg_loaded', 'true');

      const exit = gsap.timeline({
        onComplete() {
          setVisible(false);
          cancelAnimationFrame(rafId);
          renderer.dispose();
        },
      });

      exit
        .to(logoRef.current,   { y: -40, opacity: 0, duration: 0.4, ease: 'power3.in' })
        .to(barWrapRef.current, { opacity: 0, duration: 0.3 }, '<')
        .to(taglineRef.current, { opacity: 0, duration: 0.3 }, '<')
        .to(canvas, { opacity: 0, scale: 1.15, duration: 0.5, ease: 'power2.in' }, '<0.1')
        .to(cornerRefs.current.filter(Boolean), { opacity: 0, scale: 0.5, stagger: 0.05, duration: 0.3 }, '<')
        // Split panel exit — top goes up, bottom goes down
        .to(topPanelRef.current, { yPercent: -100, duration: 0.75, ease: 'power4.inOut' }, '-=0.1')
        .to(botPanelRef.current, { yPercent: 100, duration: 0.75, ease: 'power4.inOut' }, '<');
    });

    return () => {
      cancelAnimationFrame(rafId);
      renderer.dispose();
    };
  }, []);

  if (!visible) return null;

  return (
    <div ref={overlayRef} className="fixed inset-0 z-[9999] pointer-events-auto overflow-hidden">
      {/* Split panels for exit animation */}
      <div ref={topPanelRef} className="absolute inset-x-0 top-0 h-1/2 bg-[#050505]" />
      <div ref={botPanelRef} className="absolute inset-x-0 bottom-0 h-1/2 bg-[#050505]" />

      {/* Corner decorations */}
      {['top-6 left-6', 'top-6 right-6', 'bottom-6 left-6', 'bottom-6 right-6'].map((pos, i) => (
        <div
          key={i}
          ref={el => { cornerRefs.current[i] = el; }}
          className={`absolute ${pos} w-8 h-8 opacity-0`}
          style={{
            borderTop:    i < 2 ? '1px solid rgba(255,215,0,0.4)' : undefined,
            borderBottom: i >= 2 ? '1px solid rgba(255,215,0,0.4)' : undefined,
            borderLeft:   i % 2 === 0 ? '1px solid rgba(255,215,0,0.4)' : undefined,
            borderRight:  i % 2 === 1 ? '1px solid rgba(255,215,0,0.4)' : undefined,
          }}
        />
      ))}

      {/* Main content — sits above the two panels */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6">

        {/* Three.js canvas */}
        <canvas
          ref={canvasRef}
          width={320}
          height={320}
          className="drop-shadow-[0_0_40px_rgba(255,215,0,0.15)]"
        />

        {/* Logo */}
        <div
          ref={logoRef}
          className="flex items-center tracking-[0.25em] font-black"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', perspective: '800px' }}
        >
          {LOGO.split('').map((ch, i) => (
            <span
              key={i}
              ref={el => { lettersRef.current[i] = el; }}
              style={{ display: 'inline-block', opacity: 0 }}
              className={ch === '.' ? 'text-primary' : 'text-white'}
            >
              {ch}
            </span>
          ))}
        </div>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="text-xs font-bold tracking-[0.4em] text-gray-500 uppercase opacity-0"
        >
          Crafting the experience
        </p>

        {/* Progress bar */}
        <div ref={barWrapRef} className="w-64 flex flex-col items-end gap-2 opacity-0">
          <span
            ref={counterRef}
            className="text-[10px] font-black text-primary tracking-widest tabular-nums"
          >
            0%
          </span>
          <div className="w-full h-[2px] bg-white/8 rounded-full overflow-hidden">
            <div
              ref={barFillRef}
              className="h-full rounded-full"
              style={{
                width: '0%',
                background: 'linear-gradient(90deg, rgba(255,215,0,0.6), #ffd700)',
                boxShadow: '0 0 12px rgba(255,215,0,0.6)',
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
