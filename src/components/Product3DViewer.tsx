import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { RotateCw, Maximize2, Compass, Eye, ChevronDown, ChevronUp } from 'lucide-react';
import { ProductFinish } from '../types';

interface Product3DViewerProps {
  productName: string;
  category: string;
  finishes: ProductFinish[];
  activeFinish: string;
  onSelectFinish: (finishName: string) => void;
}

export const Product3DViewer: React.FC<Product3DViewerProps> = ({
  productName,
  category,
  finishes,
  activeFinish,
  onSelectFinish,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isControlsCollapsed, setIsControlsCollapsed] = useState(false);
  const [activePreset, setActivePreset] = useState<'perspective' | 'front' | 'side' | 'top'>('perspective');
  const [autoRotate, setAutoRotate] = useState(true);

  // References for mutable Three.js state across renders
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const metalMaterialsRef = useRef<THREE.MeshStandardMaterial[]>([]);
  const requestRenderRef = useRef<() => void>(() => {});

  // Update materials when activeFinish changes
  useEffect(() => {
    const finishObj = finishes.find((f) => f.name === activeFinish);
    if (!finishObj) return;

    let hexColor = 0xbfa06b;
    let roughness = 0.22;
    let metalness = 0.95;

    if (activeFinish.toLowerCase().includes('black')) {
      hexColor = 0x1c1b1a;
      roughness = 0.65;
      metalness = 0.2;
    } else if (activeFinish.toLowerCase().includes('nickel')) {
      hexColor = 0x8a8885;
      roughness = 0.25;
      metalness = 0.92;
    } else if (activeFinish.toLowerCase().includes('bronze')) {
      hexColor = 0x5c4838;
      roughness = 0.35;
      metalness = 0.88;
    } else if (activeFinish.toLowerCase().includes('chrome')) {
      hexColor = 0xe5e7eb;
      roughness = 0.08;
      metalness = 0.98;
    } else if (activeFinish.toLowerCase().includes('sandstone') || activeFinish.toLowerCase().includes('travertine')) {
      hexColor = 0xd9cbba;
      roughness = 0.82;
      metalness = 0.05;
    }

    metalMaterialsRef.current.forEach((mat) => {
      mat.color.setHex(hexColor);
      mat.roughness = roughness;
      mat.metalness = metalness;
      mat.needsUpdate = true;
    });

    requestRenderRef.current();
  }, [activeFinish, finishes]);

  // Set camera presets smoothly
  const handleCameraPreset = (preset: 'perspective' | 'front' | 'side' | 'top') => {
    setActivePreset(preset);
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!camera || !controls) return;

    if (preset === 'perspective') {
      camera.position.set(2.8, 2.2, 3.2);
      controls.target.set(0, 1.2, 0);
    } else if (preset === 'front') {
      camera.position.set(0, 1.3, 4.2);
      controls.target.set(0, 1.2, 0);
    } else if (preset === 'side') {
      camera.position.set(4.2, 1.3, 0);
      controls.target.set(0, 1.2, 0);
    } else if (preset === 'top') {
      camera.position.set(0.1, 4.5, 0.1);
      controls.target.set(0, 1.0, 0);
    }
    controls.update();
    requestRenderRef.current();
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software WebGL per Three.js skill
    const isSoftwareGl = (() => {
      const gl = document.createElement('canvas').getContext('webgl2');
      if (!gl) return true;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 420;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf6f3ee);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(2.8, 2.2, 3.2);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // Studio Environment (Mandatory RoomEnvironment)
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // Studio 3-point lighting
    const ambientLight = new THREE.AmbientLight(0xfff8f0, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff6ea, 2.2);
    keyLight.position.set(3, 5, 3);
    keyLight.castShadow = !isSoftwareGl;
    if (!isSoftwareGl) {
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      keyLight.shadow.camera.near = 0.5;
      keyLight.shadow.camera.far = 15;
      keyLight.shadow.bias = -0.0005;
      keyLight.shadow.normalBias = 0.02;
    }
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xdbe7ff, 1.0);
    fillLight.position.set(-3, 2, -2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 1.4);
    rimLight.position.set(0, 4, -4);
    scene.add(rimLight);

    // Ground Contact Shadow
    const shadowGeo = new THREE.PlaneGeometry(3.5, 3.5);
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const ctx = shadowCanvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(128, 128, 15, 128, 128, 110);
      grad.addColorStop(0, 'rgba(36, 32, 28, 0.42)');
      grad.addColorStop(0.5, 'rgba(36, 32, 28, 0.16)');
      grad.addColorStop(1, 'rgba(36, 32, 28, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 256, 256);
    }
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = 0.005;
    scene.add(shadowMesh);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = !isSoftwareGl;
    controls.dampingFactor = 0.05;
    controls.target.set(0, 1.2, 0);
    controls.minDistance = 1.6;
    controls.maxDistance = 6.0;
    controls.maxPolarAngle = Math.PI / 2 - 0.02; // do not go below ground
    controlsRef.current = controls;

    // Shared Architectural PBR Material
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0xbfa06b,
      roughness: 0.22,
      metalness: 0.95,
      envMapIntensity: 1.2,
    });
    metalMaterialsRef.current = [metalMat];

    // Procedural 3D Model: Architectural Ensemble based on Category
    const modelGroup = new THREE.Group();

    if (category.toLowerCase().includes('shower')) {
      // Shower Head Rose Model (6 composite parts)
      // 1. Ceiling mount flange
      const flangeGeo = new THREE.CylinderGeometry(0.3, 0.32, 0.08, 36);
      const flange = new THREE.Mesh(flangeGeo, metalMat);
      flange.position.y = 2.4;
      modelGroup.add(flange);

      // 2. Drop rod
      const rodGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.7, 24);
      const rod = new THREE.Mesh(rodGeo, metalMat);
      rod.position.y = 2.0;
      modelGroup.add(rod);

      // 3. Swivel ball joint
      const ballGeo = new THREE.SphereGeometry(0.14, 24, 24);
      const ball = new THREE.Mesh(ballGeo, metalMat);
      ball.position.y = 1.62;
      modelGroup.add(ball);

      // 4. Ultra-slim shower rose plate (300mm diameter scaled)
      const roseGeo = new THREE.CylinderGeometry(1.2, 1.2, 0.04, 48);
      const rose = new THREE.Mesh(roseGeo, metalMat);
      rose.position.y = 1.55;
      rose.castShadow = !isSoftwareGl;
      modelGroup.add(rose);

      // 5. Chamfered bevel rim
      const rimGeo = new THREE.TorusGeometry(1.2, 0.025, 16, 48);
      const rim = new THREE.Mesh(rimGeo, metalMat);
      rim.rotation.x = Math.PI / 2;
      rim.position.y = 1.55;
      modelGroup.add(rim);

      // 6. Nozzle face plate
      const nozzleMat = new THREE.MeshStandardMaterial({
        color: 0x333333,
        roughness: 0.8,
        metalness: 0.1,
      });
      const nozzlePlateGeo = new THREE.CylinderGeometry(1.15, 1.15, 0.01, 36);
      const nozzlePlate = new THREE.Mesh(nozzlePlateGeo, nozzleMat);
      nozzlePlate.position.y = 1.53;
      modelGroup.add(nozzlePlate);
    } else {
      // Sleek Architectural Single-Lever Basin Mixer (7 composite parts)
      // 1. Ground deck escutcheon ring
      const baseRingGeo = new THREE.CylinderGeometry(0.38, 0.42, 0.06, 36);
      const baseRing = new THREE.Mesh(baseRingGeo, metalMat);
      baseRing.position.y = 0.03;
      baseRing.castShadow = !isSoftwareGl;
      modelGroup.add(baseRing);

      // 2. Vertical main cylindrical riser column
      const columnGeo = new THREE.CylinderGeometry(0.24, 0.24, 1.7, 36);
      const column = new THREE.Mesh(columnGeo, metalMat);
      column.position.y = 0.9;
      column.castShadow = !isSoftwareGl;
      modelGroup.add(column);

      // 3. Middle architectural knurled trim collar
      const collarGeo = new THREE.CylinderGeometry(0.26, 0.26, 0.14, 36);
      const collar = new THREE.Mesh(collarGeo, metalMat);
      collar.position.y = 1.45;
      modelGroup.add(collar);

      // 4. Horizontal minimalist spout arm
      const spoutArmGeo = new THREE.CylinderGeometry(0.14, 0.14, 1.25, 28);
      const spoutArm = new THREE.Mesh(spoutArmGeo, metalMat);
      spoutArm.rotation.z = -Math.PI / 2;
      spoutArm.position.set(0.65, 1.55, 0);
      spoutArm.castShadow = !isSoftwareGl;
      modelGroup.add(spoutArm);

      // 5. Spout elbow curve connector
      const elbowGeo = new THREE.SphereGeometry(0.18, 24, 24);
      const elbow = new THREE.Mesh(elbowGeo, metalMat);
      elbow.position.set(0.02, 1.55, 0);
      modelGroup.add(elbow);

      // 6. Downturned aerator nozzle tip
      const tipGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.18, 24);
      const tip = new THREE.Mesh(tipGeo, metalMat);
      tip.position.set(1.22, 1.46, 0);
      modelGroup.add(tip);

      // 7. Top precision joystick lever handle
      const handleBaseGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.12, 32);
      const handleBase = new THREE.Mesh(handleBaseGeo, metalMat);
      handleBase.position.y = 1.8;
      modelGroup.add(handleBase);

      const leverGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.65, 24);
      const lever = new THREE.Mesh(leverGeo, metalMat);
      lever.rotation.x = 0.35;
      lever.position.set(0, 2.05, 0.15);
      lever.castShadow = !isSoftwareGl;
      modelGroup.add(lever);
    }

    scene.add(modelGroup);

    // Demand-driven Render pacing loop
    let frameId = 0;
    let renderBusy = false;
    let renderDirty = false;

    function requestRender() {
      if (renderBusy) {
        renderDirty = true;
        return;
      }
      renderBusy = true;
      frameId = requestAnimationFrame(() => {
        renderDirty = false;
        if (autoRotate) {
          modelGroup.rotation.y += 0.005;
        }
        controls.update();
        renderer.render(scene, camera);
        renderBusy = false;
        if (renderDirty || autoRotate) {
          requestRender();
        }
      });
    }

    requestRenderRef.current = requestRender;
    controls.addEventListener('change', requestRender);
    requestRender();

    // Resize handling
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      requestRender();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      controls.dispose();
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [category, autoRotate]);

  return (
    <div className="relative w-full h-[460px] sm:h-[500px] bg-[#F7F4EE] rounded-[3px] overflow-hidden border border-[#DDD5C8] select-none flex flex-col items-center justify-center">
      {/* 3D Canvas Mount Point */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top Spec Badges - Minimal, static, zero pulsating dots */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-white/95 border border-[#DDD5C8] text-[11px] font-semibold tracking-wider uppercase text-[#584636] rounded-full shadow-xs">
            Interactive 3D Architectural CAD
          </span>
          <span className="hidden sm:inline px-2.5 py-1 bg-[#24211E] text-white text-[10px] font-mono rounded-full">
            Three.js PBR Studio
          </span>
        </div>

        <div className="pointer-events-auto flex items-center gap-2">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            title="Toggle 360° turntable rotation"
            className={`p-2 rounded-full border transition-all cursor-pointer shadow-xs ${
              autoRotate
                ? 'bg-[#725C48] text-white border-transparent'
                : 'bg-white/90 text-stone-700 hover:text-black border-[#DDD5C8]'
            }`}
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Collapsible Bottom Control Dock (Zero Viewport Occlusion per threejs/SKILL.md) */}
      <div
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-xl transition-all duration-300 z-20 ${
          isControlsCollapsed ? 'translate-y-[calc(100%-36px)]' : 'translate-y-0'
        }`}
      >
        {/* Collapse / Expand Toggle Button */}
        <div className="flex justify-center -mb-[1px]">
          <button
            onClick={() => setIsControlsCollapsed(!isControlsCollapsed)}
            className="px-3.5 py-1 bg-white border-t border-x border-[#DDD5C8] text-[10.5px] font-medium tracking-wider uppercase text-stone-700 hover:text-black rounded-t-[4px] shadow-xs flex items-center gap-1 cursor-pointer"
          >
            {isControlsCollapsed ? (
              <>
                <ChevronUp className="w-3.5 h-3.5" />
                <span>Show 3D Finish & Camera Controls</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-3.5 h-3.5" />
                <span>Hide Controls</span>
              </>
            )}
          </button>
        </div>

        {/* Dock Controls Card */}
        <div className="bg-white/95 border border-[#DDD5C8] rounded-[3px] p-3 sm:p-4 shadow-xl space-y-3">
          {/* Finish Material Switcher */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] uppercase tracking-wider text-stone-600 font-semibold shrink-0">
              PBR Finish:
            </span>
            <div className="flex items-center gap-2 overflow-x-auto py-1">
              {finishes.map((f) => (
                <button
                  key={f.code}
                  onClick={() => onSelectFinish(f.name)}
                  className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center cursor-pointer shadow-xs ${
                    activeFinish === f.name
                      ? 'border-[#725C48] ring-2 ring-[#725C48]/40 scale-110'
                      : 'border-white/80 hover:scale-105'
                  }`}
                  style={{ backgroundColor: f.hex }}
                  title={f.name}
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-[#1C1917] truncate max-w-[120px]">
              {activeFinish}
            </span>
          </div>

          {/* Camera Angles & Reset */}
          <div className="flex items-center justify-between border-t border-[#ECE5DA] pt-2.5">
            <span className="text-[10.5px] uppercase tracking-wider text-stone-500 font-medium">
              View Angle:
            </span>
            <div className="flex items-center gap-1.5">
              {(['perspective', 'front', 'side', 'top'] as const).map((view) => (
                <button
                  key={view}
                  onClick={() => handleCameraPreset(view)}
                  className={`px-2.5 py-1 text-[10.5px] tracking-wide rounded-[2px] capitalize transition-colors cursor-pointer ${
                    activePreset === view
                      ? 'bg-[#725C48] text-white font-semibold'
                      : 'bg-[#F2EDE5] hover:bg-[#E7E0D3] text-stone-800'
                  }`}
                >
                  {view}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
