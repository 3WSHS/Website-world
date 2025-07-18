import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function createRoomScene(container) {
  // Remove previous children
  while (container.firstChild) container.removeChild(container.firstChild);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff); // white background

  // Add bright ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); // strong white light
  scene.add(ambientLight);

  const camera = new THREE.PerspectiveCamera(70, container.offsetWidth / container.offsetHeight, 0.1, 100);
  camera.position.set(0, 2, 8);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 2, 0);
  controls.update();

  // Ensure correct size on first load
  function resizeRoom() {
    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.offsetWidth, container.offsetHeight);
  }
  resizeRoom();
  window.addEventListener('resize', resizeRoom);

  // White walls (cylinder) - make much larger
  const wallRadius = 12;
  const wallHeight = 10;
  const wallGeo = new THREE.CylinderGeometry(wallRadius, wallRadius, wallHeight, 48, 1, true);
  const wallMat = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.BackSide }); // white walls
  const walls = new THREE.Mesh(wallGeo, wallMat);
  scene.add(walls);

  // White ceiling (dome) - match new radius
  const domeGeo = new THREE.SphereGeometry(wallRadius, 48, 24, 0, Math.PI * 2, 0, Math.PI / 2);
  const domeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.BackSide }); // white dome
  const dome = new THREE.Mesh(domeGeo, domeMat);
  dome.position.y = wallHeight / 2;
  scene.add(dome);

  // White grid floor - match new radius, but only show inside the circle
  const floorSize = wallRadius * 2;
  const gridDivisions = 32;
  // Create the grid as usual, but use a stencil or alpha mask to only show it within the circle
  // Remove the old gridHelper
  // Instead, create a custom grid using lines and only add points within the circle
  const gridGroup = new THREE.Group();
  for (let i = -gridDivisions / 2; i <= gridDivisions / 2; i++) {
    const t = i / (gridDivisions / 2);
    const x = t * wallRadius;
    // Vertical lines
    const pointsV = [];
    for (let y = -wallRadius; y <= wallRadius; y += floorSize / gridDivisions) {
      if (x * x + y * y <= wallRadius * wallRadius) {
        pointsV.push(new THREE.Vector3(x, 0.01, y));
      }
    }
    if (pointsV.length > 1) {
      const geoV = new THREE.BufferGeometry().setFromPoints(pointsV);
      const matV = new THREE.LineBasicMaterial({ color: 0x000000 }); // black grid lines
      const lineV = new THREE.Line(geoV, matV);
      gridGroup.add(lineV);
    }
    // Horizontal lines
    const pointsH = [];
    for (let y = -wallRadius; y <= wallRadius; y += floorSize / gridDivisions) {
      if (x * x + y * y <= wallRadius * wallRadius) {
        pointsH.push(new THREE.Vector3(y, 0.01, x));
      }
    }
    if (pointsH.length > 1) {
      const geoH = new THREE.BufferGeometry().setFromPoints(pointsH);
      const matH = new THREE.LineBasicMaterial({ color: 0x000000 }); // black grid lines
      const lineH = new THREE.Line(geoH, matH);
      gridGroup.add(lineH);
    }
  }
  scene.add(gridGroup);

  // White floor (under grid)
  const floorGeo = new THREE.CircleGeometry(wallRadius, 128);
  const floorMat = new THREE.MeshStandardMaterial({ color: 0xffffff }); // white floor
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.rotation.x = -Math.PI / 2;
  scene.add(floor);

  // Curved panoramic window: 120 degree section of a cylinder
  const windowRadius = wallRadius - 0.05; // just inside the wall
  const windowHeight = 3.5; // taller window
  const windowTheta = 2 * Math.PI / 3; // 120 degrees
  const windowSegments = 64;
  const windowGeo = new THREE.CylinderGeometry(
    windowRadius,
    windowRadius,
    windowHeight,
    windowSegments,
    1,
    true,
    -windowTheta / 2,
    windowTheta
  );
  // Load the city panorama texture
  const loader = new THREE.TextureLoader();
  const windowTexture = loader.load('/city-panorama.png');
  windowTexture.minFilter = THREE.LinearFilter;
  windowTexture.wrapS = THREE.ClampToEdgeWrapping;
  windowTexture.wrapT = THREE.ClampToEdgeWrapping;
  const windowMat = new THREE.MeshBasicMaterial({ map: windowTexture, side: THREE.BackSide });
  const windowMesh = new THREE.Mesh(windowGeo, windowMat);
  windowMesh.position.y = 2.25; // lower the window so the bottom is near the ground
  scene.add(windowMesh);

  // Inverted-arch (concave) top black door
  const doorWidth = 3.5;
  const doorHeight = 4.5;
  const curveRadius = doorWidth / 2;
  const rectHeight = doorHeight - curveRadius;

  // Create the door shape: rectangle with a downward (concave) semicircular top
  const doorShape = new THREE.Shape();
  doorShape.moveTo(-doorWidth/2, 0); // bottom left
  doorShape.lineTo(-doorWidth/2, doorHeight); // up left side
  // Draw downward (concave) arc from left to right
  doorShape.absarc(0, doorHeight, curveRadius, Math.PI, 0, true);
  doorShape.lineTo(doorWidth/2, 0); // down right side
  doorShape.lineTo(-doorWidth/2, 0); // close shape

  const doorGeo = new THREE.ShapeGeometry(doorShape);
  const doorMat = new THREE.MeshBasicMaterial({ color: 0x000000 }); // solid black
  const doorMesh = new THREE.Mesh(doorGeo, doorMat);
  // Place the doorway flush with the back wall, bottom exactly at y=0
  doorMesh.geometry.translate(0, -doorHeight / 2, 0);
  doorMesh.position.set(0, 0, -(windowRadius - 0.01));
  scene.add(doorMesh);

  // Create multiple glowing white rims for bloom effect
  const rimLayers = [];
  const rimScales = [1.02, 1.05, 1.08, 1.12, 1.16];
  const rimOpacities = [0.9, 0.6, 0.4, 0.2, 0.1];
  
  for (let i = 0; i < rimScales.length; i++) {
    const rimGeo = new THREE.ShapeGeometry(doorShape);
    const rimMat = new THREE.MeshBasicMaterial({ 
      color: 0xffffff, 
      emissive: 0xffffff, 
      emissiveIntensity: 3,
      transparent: true,
      opacity: 0
    });
    const doorRim = new THREE.Mesh(rimGeo, rimMat);
    doorRim.geometry.translate(0, -doorHeight / 2, 0);
    doorRim.position.set(0, 0, -(windowRadius - 0.02 - i * 0.01)); // layered in front
    doorRim.scale.set(rimScales[i], rimScales[i], 1);
    scene.add(doorRim);
    rimLayers.push({ mesh: doorRim, targetOpacity: rimOpacities[i] });
  }

  // Add click detection and hover effect for the door
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  
  // Hover effect
  renderer.domElement.addEventListener('pointermove', (event) => {
    const rect = renderer.domElement.getBoundingClientRect();
    const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    mouse.set(mouseX, mouseY);
    
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(doorMesh);
    
    if (intersects.length > 0) {
      // Show glowing rim layers on hover with bloom effect
      rimLayers.forEach(layer => {
        layer.mesh.material.opacity = layer.targetOpacity;
      });
      renderer.domElement.style.cursor = 'pointer';
    } else {
      // Hide glowing rim layers when not hovering
      rimLayers.forEach(layer => {
        layer.mesh.material.opacity = 0;
      });
      renderer.domElement.style.cursor = 'default';
    }
  });
  
  // Click detection
  renderer.domElement.addEventListener('pointerdown', (event) => {
    const rect = renderer.domElement.getBoundingClientRect();
    const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    mouse.set(mouseX, mouseY);
    
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(doorMesh);
    
    if (intersects.length > 0) {
      console.log('Door clicked! Opening about page...');
      console.log('URL being opened:', 'https://www.3wshs.com');
      const newWindow = window.open('https://www.3wshs.com', '_blank');
      console.log('New window opened:', newWindow);
    }
  });

  // Add a back button
  const button = document.createElement('button');
  button.textContent = 'Back to City';
  button.style.position = 'absolute';
  button.style.top = '20px';
  button.style.left = '20px';
  button.style.zIndex = '10';
  button.style.fontSize = '1.2em';
  button.style.padding = '0.5em 1.2em';
  button.style.background = '#fff';
  button.style.border = '1px solid #333';
  button.style.borderRadius = '8px';
  button.style.cursor = 'pointer';
  container.appendChild(button);

  let stop = false;
  button.onclick = () => {
    stop = true;
    container.dispatchEvent(new CustomEvent('backToCity'));
  };

  function animate() {
    if (stop) return;
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  // --- Futuristic pillar ---
  // Main pillar: more metallic, slightly tinted
  const pillarHeight = 2.2;
  const pillarRadius = 0.25;
  const pillarGeo = new THREE.CylinderGeometry(pillarRadius, pillarRadius, pillarHeight, 48);
  const pillarMat = new THREE.MeshPhysicalMaterial({ color: 0x222a3a, metalness: 1, roughness: 0.18, clearcoat: 0.5, reflectivity: 0.7 });
  const pillar = new THREE.Mesh(pillarGeo, pillarMat);
  pillar.position.set(0, pillarHeight / 2, 0);
  scene.add(pillar);

  // Glowing accent rings (all white)
  const ringColors = [0xffffff, 0xffffff, 0xffffff];
  const ringY = [pillarHeight * 0.05, pillarHeight * 0.5, pillarHeight * 0.95];
  for (let i = 0; i < 3; i++) {
    const ringGeo = new THREE.TorusGeometry(pillarRadius * 1.08, 0.035, 16, 48);
    const ringMat = new THREE.MeshBasicMaterial({ color: ringColors[i] });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.set(0, ringY[i], 0);
    ring.rotation.x = Math.PI / 2;
    scene.add(ring);
  }

  // Glowing inner core (vertical cylinder)
  const coreGeo = new THREE.CylinderGeometry(pillarRadius * 0.22, pillarRadius * 0.22, pillarHeight * 1.04, 24);
  const coreMat = new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.7 });
  const core = new THREE.Mesh(coreGeo, coreMat);
  core.position.set(0, pillarHeight / 2, 0);
  scene.add(core);

  // Glowing orb (smaller, white, with bloom)
  const orbRadius = 0.32;
  const orbGeo = new THREE.SphereGeometry(orbRadius, 32, 32);
  const orbMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 2, metalness: 0.5, roughness: 0.1 });
  const orb = new THREE.Mesh(orbGeo, orbMat);
  orb.position.set(0, pillarHeight + orbRadius + 0.15, 0);
  scene.add(orb);

  // Add a point light for glow effect (white)
  const orbLight = new THREE.PointLight(0xffffff, 2, 10, 2);
  orbLight.position.copy(orb.position);
  scene.add(orbLight);

  // --- Bloom effect for orb ---
  // Only add bloom if not already present (for this scene)
  // We'll use a simple approach: render the orb with a strong emissive and let the renderer's exposure show the bloom
  // If you want a true postprocessing bloom, you can add THREE.UnrealBloomPass here if you set up EffectComposer for this scene
  // Animate orb floating up and down
  let orbBaseY = orb.position.y;
  function animateOrb() {
    const t = performance.now() * 0.001;
    orb.position.y = orbBaseY + Math.sin(t * 2) * 0.18;
    orbLight.position.y = orb.position.y;
    requestAnimationFrame(animateOrb);
  }
  animateOrb();

  // --- Rotating small orbs around the central orb (nucleus effect) ---
  const electronCount = 5;
  const electronRadius = 0.08;
  // Move electrons closer to the main orb
  const electronOrbitRadii = [0.38, 0.44, 0.5, 0.56, 0.62];
  const electronOrbitHeights = [0.1, 0.18, -0.12, 0.22, -0.16];
  const electronMeshes = [];
  const electronLines = [];
  for (let i = 0; i < electronCount; i++) {
    const geo = new THREE.SphereGeometry(electronRadius, 16, 16);
    const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 1.2 });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);
    electronMeshes.push(mesh);
    // Create a line from orb to electron
    const lineGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0, 0)
    ]);
    const lineMat = new THREE.LineBasicMaterial({ color: 0xffffff });
    const line = new THREE.Line(lineGeo, lineMat);
    scene.add(line);
    electronLines.push(line);
  }
  // Animate electrons in circular orbits and update lines
  function animateElectrons() {
    const t = performance.now() * 0.001;
    for (let i = 0; i < electronCount; i++) {
      const angle = t * (0.7 + 0.2 * i) + i * (Math.PI * 2 / electronCount);
      const r = electronOrbitRadii[i % electronOrbitRadii.length];
      const h = electronOrbitHeights[i % electronOrbitHeights.length];
      const ex = Math.cos(angle) * r;
      const ey = pillarHeight + orbRadius + 0.15 + h;
      const ez = Math.sin(angle) * r;
      electronMeshes[i].position.set(ex, ey, ez);
      // Update line geometry to connect orb to electron
      const positions = electronLines[i].geometry.attributes.position.array;
      positions[0] = 0; // orb x
      positions[1] = pillarHeight + orbRadius + 0.15; // orb y
      positions[2] = 0; // orb z
      positions[3] = ex;
      positions[4] = ey;
      positions[5] = ez;
      electronLines[i].geometry.attributes.position.needsUpdate = true;
    }
    requestAnimationFrame(animateElectrons);
  }
  animateElectrons();

  // --- Add galaxy stars above the dome ---
  const starCount = 600;
  const starRadius = wallRadius * 2.2;
  const starGeometry = new THREE.BufferGeometry();
  const starPositions = [];
  for (let i = 0; i < starCount; i++) {
    // Random point on upper hemisphere
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(1 - Math.random()); // uniform on hemisphere
    const r = starRadius * (0.92 + 0.08 * Math.random());
    const x = Math.sin(phi) * Math.cos(theta) * r;
    const y = Math.abs(Math.cos(phi) * r) + wallHeight * 0.2;
    const z = Math.sin(phi) * Math.sin(theta) * r;
    starPositions.push(x, y, z);
  }
  starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
  const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.08 });
  const stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);

  // --- Add see-through gridded dome ceiling ---
  const gridDomeRadius = wallRadius;
  const gridDomeLatLines = 16;
  const gridDomeLonLines = 32;
  const gridDomeGroup = new THREE.Group();
  // Latitude lines (hemisphere)
  for (let i = 1; i < gridDomeLatLines / 2; i++) {
    const lat = (i / (gridDomeLatLines / 2)) * (Math.PI / 2);
    const r = Math.sin(lat) * gridDomeRadius;
    const y = Math.cos(lat) * gridDomeRadius + wallHeight / 2;
    const points = [];
    for (let j = 0; j <= gridDomeLonLines; j++) {
      const lon = (j / gridDomeLonLines) * Math.PI * 2;
      const x = Math.cos(lon) * r;
      const z = Math.sin(lon) * r;
      points.push(new THREE.Vector3(x, y, z));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0xffffff }));
    gridDomeGroup.add(line);
  }
  // Longitude lines (hemisphere)
  for (let i = 0; i < gridDomeLonLines; i++) {
    const lon = (i / gridDomeLonLines) * Math.PI * 2;
    const points = [];
    for (let j = 0; j <= gridDomeLatLines / 2; j++) {
      const lat = (j / (gridDomeLatLines / 2)) * (Math.PI / 2);
      const r = Math.sin(lat) * gridDomeRadius;
      const y = Math.cos(lat) * gridDomeRadius + wallHeight / 2;
      const x = Math.cos(lon) * r;
      const z = Math.sin(lon) * r;
      points.push(new THREE.Vector3(x, y, z));
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0xffffff }));
    gridDomeGroup.add(line);
  }
  scene.add(gridDomeGroup);

  // --- Add black hemisphere behind the gridded dome ceiling ---
  const blackDomeGeo = new THREE.SphereGeometry(wallRadius, 48, 24, 0, Math.PI * 2, 0, Math.PI / 2);
  const blackDomeMat = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide });
  const blackDome = new THREE.Mesh(blackDomeGeo, blackDomeMat);
  blackDome.position.y = wallHeight / 2;
  scene.add(blackDome);

  // --- Futuristic top pillar coming down from the ceiling ---
  // Calculate the gap so the top pillar stops just above the orb
  const orbTopY = pillarHeight + orbRadius + 0.15 + orbRadius; // orb center + orb radius
  const topPillarBottomY = orbTopY + 0.08; // small gap above orb
  const topPillarHeight = wallHeight - topPillarBottomY;
  const topPillarRadius = pillarRadius;
  const topPillarGeo = new THREE.CylinderGeometry(topPillarRadius, topPillarRadius, topPillarHeight, 48);
  const topPillarMat = new THREE.MeshPhysicalMaterial({ color: 0x222a3a, metalness: 1, roughness: 0.18, clearcoat: 0.5, reflectivity: 0.7 });
  const topPillar = new THREE.Mesh(topPillarGeo, topPillarMat);
  // Position: from ceiling down, just above the orb
  topPillar.position.set(0, wallHeight - topPillarHeight / 2, 0);
  scene.add(topPillar);

  // Glowing accent rings for top pillar
  for (let i = 0; i < 3; i++) {
    const ringGeo = new THREE.TorusGeometry(topPillarRadius * 1.08, 0.035, 16, 48);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    // Place rings at top, middle, bottom of the top pillar
    ring.position.set(0, wallHeight - (i * (topPillarHeight / 2)), 0);
    ring.rotation.x = Math.PI / 2;
    scene.add(ring);
  }

  // Glowing inner core for top pillar
  const topCoreGeo = new THREE.CylinderGeometry(topPillarRadius * 0.22, topPillarRadius * 0.22, topPillarHeight * 1.04, 24);
  const topCoreMat = new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.7 });
  const topCore = new THREE.Mesh(topCoreGeo, topCoreMat);
  topCore.position.set(0, wallHeight - topPillarHeight / 2, 0);
  scene.add(topCore);

  // --- Add curved desks with computers on each side ---
  function addCurvedDeskWithComputers(angleStart, angleEnd, radius, y) {
    // Desk: a thick arc
    const deskThickness = 0.18;
    const deskWidth = 0.7;
    const deskSegments = 32;
    const arcLength = angleEnd - angleStart;
    const deskGeo = new THREE.TorusGeometry(radius, deskWidth / 2, deskSegments, 64, arcLength);
    const deskMat = new THREE.MeshBasicMaterial({ color: 0xffffff }); // always white, not affected by lighting
    const desk = new THREE.Mesh(deskGeo, deskMat);
    desk.position.y = y;
    desk.rotation.x = Math.PI / 2;
    desk.rotation.z = angleStart + arcLength / 2;
    scene.add(desk);
    // Remove computers and chairs for now; only add the desk arc itself
  }
  // Remove left/right desks, add a single desk arc in front of the window
  // The window arc is centered at angle 0, spans windowTheta
  // Place the desk arc right against the wall and rotate it to hug the wall closely
  // Use a larger radius and a wider arc
  const deskRadius = wallRadius - 0.45; // just inside the wall
  const deskArc = windowTheta * 1.18; // slightly wider than the window
  // Shift the desk arc further to the right to line up with the window
  const deskOffset = 0.38; // more positive = more right
  addCurvedDeskWithComputers(-deskArc/2 + deskOffset, deskArc/2 + deskOffset, deskRadius, 0.82);

  // Return cleanup function
  return function cleanupRoomScene() {
    stop = true;
    window.removeEventListener('resize', resizeRoom);
    if (renderer.domElement && renderer.domElement.parentNode === container) {
      container.removeChild(renderer.domElement);
    }
    if (button && button.parentNode === container) {
      container.removeChild(button);
    }
  };
}
