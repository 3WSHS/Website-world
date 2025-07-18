import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { createRoomScene } from '../public/room.js';

// Place these at the very top of the file, before any function:
let raycaster = null;
let mouse = null;
let lastHoveredGroup = null;

let billboardMeshes = [];
let scene, camera, renderer, controls;
// Car animation data
let carObjects = [];
let teleportTarget = null;
let teleportProgress = 0;
let teleportStart = null;
let teleportFrom = null;
let teleportTo = null;
let jungleObjects = [];
// Store references to main towers for hover effects
window._mainTowerMeshes = [];
window._mainTowerGroups = [];
window._mainTowerMeshToGroup = new Map();

// Add a unique main hub tower next to the park
function addMainHubTower(parkCenter, parkWidth, parkDepth) {
    // Place the tower just outside the park, on the north side
    const towerX = parkCenter.x;
    const towerZ = parkCenter.z - parkDepth / 2 - 2.5;
    const towerHeight = 16;
    const towerRadius = 1.7;
    // Main tower body (cylinder)
    const towerGeo = new THREE.CylinderGeometry(towerRadius, towerRadius * 0.7, towerHeight, 32, 1, true);
    const towerMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.7, metalness: 0.5, roughness: 0.3 });
    const tower = new THREE.Mesh(towerGeo, towerMat);
    tower.position.set(towerX, towerHeight / 2, towerZ);
    scene.add(tower);
    // Add black outline to main tower
    const towerEdges = new THREE.EdgesGeometry(towerGeo);
    const towerOutline = new THREE.LineSegments(towerEdges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));
    towerOutline.position.copy(tower.position);
    scene.add(towerOutline);
    // Glowing ring accent near the top
    const ringGeo = new THREE.TorusGeometry(towerRadius + 0.18, 0.13, 12, 32);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.set(towerX, towerHeight - 1.2, towerZ);
    ring.rotation.x = Math.PI / 2;
    scene.add(ring);
    // --- Futuristic Mushroom Cap Roof ---
    const capRadius = towerRadius * 3.8;
    const capGeo = new THREE.SphereGeometry(capRadius, 40, 32, 0, Math.PI * 2, 0, Math.PI / 1.45);
    const capMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0xffffff,
        emissiveIntensity: 1.2,
        transparent: false,
        opacity: 1,
        metalness: 0.7,
        roughness: 0.18
    });
    const cap = new THREE.Mesh(capGeo, capMat);
    cap.position.set(towerX, towerHeight + capRadius * 0.32, towerZ);
    cap.scale.y = 0.38; // flatten the cap for a mushroom look
    scene.add(cap);

    // Black ring on top of the mushroom cap
    const topRingRadius = capRadius * 0.97; // closer to the cap edge
    const topRingTube = 0.22; // thicker ring
    const topRingGeo = new THREE.TorusGeometry(topRingRadius, topRingTube, 32, 80);
    const topRingMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const topRing = new THREE.Mesh(topRingGeo, topRingMat);
    // Place the ring just above the cap center for visibility
    topRing.position.set(towerX, cap.position.y + topRingTube * 0.5, towerZ);
    topRing.rotation.x = Math.PI / 2;
    scene.add(topRing);

    // Large black ring (window) just below the mushroom cap
    const windowRingRadius = capRadius * 0.93;
    const windowRingTube = 0.18;
    const windowRingGeo = new THREE.TorusGeometry(windowRingRadius, windowRingTube, 32, 80);
    const windowRingMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const windowRing = new THREE.Mesh(windowRingGeo, windowRingMat);
    windowRing.position.set(towerX, cap.position.y - (capRadius * 0.38) + windowRingTube * 0.5, towerZ);
    windowRing.rotation.x = Math.PI / 2;
    scene.add(windowRing);

    // Glowing ring at the base of the cap
    const mushRingGeo = new THREE.TorusGeometry(capRadius * 0.98, 0.13, 16, 48);
    const mushRingMat = new THREE.MeshBasicMaterial({ color: 0xffffff, emissive: 0x66ffff, emissiveIntensity: 2 });
    const mushRing = new THREE.Mesh(mushRingGeo, mushRingMat);
    mushRing.position.set(towerX, towerHeight + 0.1, towerZ);
    mushRing.rotation.x = Math.PI / 2;
    scene.add(mushRing);

    // Radial glowing lines (gills) under the cap
    const gillGroup = new THREE.Group();
    const gillCount = 18;
    const gillLen = capRadius * 0.92;
    for (let i = 0; i < gillCount; i++) {
        const angle = (i / gillCount) * Math.PI * 2;
        const x = Math.cos(angle) * gillLen;
        const z = Math.sin(angle) * gillLen;
        const points = [
            new THREE.Vector3(0, towerHeight + 0.13, 0),
            new THREE.Vector3(x, towerHeight + 0.13, z)
        ];
        const gillGeo = new THREE.BufferGeometry().setFromPoints(points);
        const gillMat = new THREE.LineBasicMaterial({ color: 0x66ffff });
        const gill = new THREE.Line(gillGeo, gillMat);
        gillGroup.add(gill);
    }
    gillGroup.position.set(towerX, 0, towerZ);
    scene.add(gillGroup);
    // --- End Mushroom Cap Roof ---
    // Add a white wireframe overlay for a digital look
    const wireGeo = new THREE.CylinderGeometry(towerRadius, towerRadius * 0.7, towerHeight, 16, 1, true);
    const wireMat = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true });
    const wire = new THREE.Mesh(wireGeo, wireMat);
    wire.position.set(towerX, towerHeight / 2, towerZ);
    scene.add(wire);
    // Add a 3D label above the main hub tower (now floating higher above the spire/sphere)
    const labelCanvas = document.createElement('canvas');
    labelCanvas.width = 256;
    labelCanvas.height = 64;
    const ctx = labelCanvas.getContext('2d');
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, labelCanvas.width, labelCanvas.height);
    ctx.font = 'bold 36px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#000';
    ctx.fillText('Main Tower', labelCanvas.width / 2, labelCanvas.height / 2);
    const labelTexture = new THREE.CanvasTexture(labelCanvas);
    const labelMat = new THREE.MeshBasicMaterial({ map: labelTexture, transparent: true });
    const labelGeo = new THREE.PlaneGeometry(3.5, 0.9);
    const labelMesh = new THREE.Mesh(labelGeo, labelMat);
    labelMesh.position.set(towerX, towerHeight + capRadius * 0.9 + 2.5, towerZ);
    labelMesh.userData.isLabel = true;
    labelMesh.userData.baseY = towerHeight + capRadius * 0.9 + 2.5;
    scene.add(labelMesh);
    // Store for animation (billboard effect)
    if (!window._buildingLabels) window._buildingLabels = [];
    window._buildingLabels.push(labelMesh);
    // Store references to main towers for hover effects
    window._mainTowerMeshes.push(tower);
    const mainHubGroup = [tower, ring, wire, cap, mushRing, gillGroup];
    window._mainTowerGroups.push(mainHubGroup);
    for (const m of mainHubGroup) {
        window._mainTowerMeshes.push(m);
        window._mainTowerMeshToGroup.set(m, mainHubGroup);
    }
}

// Add 5 more distinct towers to the city
function addDistinctTowers(parkCenter, parkWidth, parkDepth) {
    const towerConfigs = [
        // Each config: { x, z, type, height, color, accent }
        { x: -12, z: 14, type: 'cylinder', height: 13, color: 0xffffff, accent: 'ring' },
        { x: 16, z: -10, type: 'box', height: 11, color: 0xffffff, accent: 'grid' },
        { x: -18, z: -16, type: 'cone', height: 15, color: 0xffffff, accent: 'topSphere' },
        { x: 18, z: 18, type: 'octa', height: 10, color: 0xffffff, accent: 'wire' },
        { x: 0, z: 22, type: 'multi', height: 12, color: 0xffffff, accent: 'multi' },
    ];
    for (const cfg of towerConfigs) {
        // Avoid park area
        if (
            cfg.x > parkCenter.x - parkWidth / 2 && cfg.x < parkCenter.x + parkWidth / 2 &&
            cfg.z > parkCenter.z - parkDepth / 2 && cfg.z < parkCenter.z + parkDepth / 2
        ) continue;
        let mesh, accentMesh;
        if (cfg.type === 'cylinder') {
            mesh = new THREE.Mesh(
                new THREE.CylinderGeometry(1.1, 1.1, cfg.height, 24, 1, true),
                new THREE.MeshStandardMaterial({ color: cfg.color, emissive: 0xffffff, emissiveIntensity: 0.5, metalness: 0.4 })
            );
            mesh.position.set(cfg.x, cfg.height / 2, cfg.z);
            // Add black outline
            const cylEdges = new THREE.EdgesGeometry(mesh.geometry);
            const cylOutline = new THREE.LineSegments(cylEdges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));
            cylOutline.position.copy(mesh.position);
            scene.add(cylOutline);
            // Ensure cylinder tower is added to hover group
            let group = [mesh];
            window._mainTowerMeshes.push(mesh);
            window._mainTowerMeshToGroup.set(mesh, group);
            
            // Store reference to Real Estate Hub for click detection
            window._cylinderTowerGroup = group;
            // Accent: glowing ring
            if (cfg.accent === 'ring') {
                const ringMin = 1.2;
                const ringMax = cfg.height - 1.2;
                // Create three stacked rings with vertical offsets
                const numRings = 3;
                const ringSpacing = 0.6; // vertical distance between rings
                const ringRadius = 1.3;
                const ringParams = [];
                for (let i = 0; i < numRings; i++) {
                    const ringGeo = new THREE.TorusGeometry(ringRadius, 0.13, 12, 32);
                const ringMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
                    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
                    // The middle ring is at offset 0, others are above/below
                    ringMesh.userData.offset = (i - 1) * ringSpacing;
                    ringMesh.position.set(cfg.x, ringMax + ringMesh.userData.offset, cfg.z);
                    ringMesh.rotation.x = Math.PI / 2;
                    ringMesh.userData.ringMin = ringMin;
                    ringMesh.userData.ringMax = ringMax;
                    ringParams.push(ringMesh);
                    scene.add(ringMesh);
                }
                window._cylinderRingMeshes = ringParams;
                // Add futuristic roof: glowing disc + tall spire + glowing sphere + rotating gridded ring + wireframe dome
                const roofY = cfg.height + 0.1;
                // Glowing disc
                const discGeo = new THREE.CylinderGeometry(1.35, 1.35, 0.18, 32);
                const discMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 2, metalness: 0.7, roughness: 0.2 });
                const disc = new THREE.Mesh(discGeo, discMat);
                disc.position.set(cfg.x, roofY, cfg.z);
                scene.add(disc);
                // Tall glowing spire
                const spireHeight = 2.2;
                const spireGeo = new THREE.CylinderGeometry(0.13, 0.22, spireHeight, 16);
                const spireMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 1.5, metalness: 0.8, roughness: 0.2 });
                const spire = new THREE.Mesh(spireGeo, spireMat);
                spire.position.set(cfg.x, roofY + spireHeight / 2 + 0.09, cfg.z);
                scene.add(spire);
                // Glowing sphere at the tip
                const sphereGeo = new THREE.SphereGeometry(0.28, 18, 18);
                const sphereMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 2, metalness: 0.7, roughness: 0.2 });
                const sphere = new THREE.Mesh(sphereGeo, sphereMat);
                sphere.position.set(cfg.x, roofY + spireHeight + 0.28, cfg.z);
                scene.add(sphere);
                // Rotating gridded ring above the disc
                const gridRingGeo = new THREE.TorusGeometry(1.7, 0.06, 16, 48);
                const gridRingMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
                const gridRing = new THREE.Mesh(gridRingGeo, gridRingMat);
                gridRing.position.set(cfg.x, roofY + 0.45, cfg.z);
                scene.add(gridRing);
                window._cylinderGridRing = gridRing;
                // Transparent wireframe dome
                const domeGeo = new THREE.SphereGeometry(1.35, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2);
                const domeMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.25 });
                const dome = new THREE.Mesh(domeGeo, domeMat);
                dome.position.set(cfg.x, roofY + 0.13, cfg.z);
                scene.add(dome);
                // Add all roof elements and rings to hover group
                group.push(...ringParams, disc, spire, sphere, gridRing, dome);
                for (const m of group) {
                    window._mainTowerMeshes.push(m);
                    window._mainTowerMeshToGroup.set(m, group);
                }
            }
        } else if (cfg.type === 'box') {
            // Create a glass tower with hexagonal base and stepped design
            const baseRadius = 1.8;
            const segments = 6;
            
            // Main hexagonal tower
            mesh = new THREE.Mesh(
                new THREE.CylinderGeometry(baseRadius, baseRadius, cfg.height * 0.8, segments, 1, false),
                new THREE.MeshStandardMaterial({ 
                    color: 0xffffff, 
                    transparent: true, 
                    opacity: 0.8, 
                    metalness: 0.9, 
                    roughness: 0.1,
                    emissive: 0xffffff,
                    emissiveIntensity: 1.5
                })
            );
            mesh.position.set(cfg.x, (cfg.height * 0.8) / 2, cfg.z);
            
            // Store reference to Art Museum for click detection
            window._boxTowerMesh = mesh;
            
            // Add black grid overlay to main tower (custom horizontal and vertical lines)
            const mainGridGroup = new THREE.Group();
            const mainGridRings = 8; // number of horizontal rings
            const mainGridVerts = segments; // number of vertical lines
            const mainHeight = cfg.height * 0.8;
            for (let i = 1; i < mainGridRings; i++) {
                const y = mesh.position.y - mainHeight/2 + (mainHeight * i / mainGridRings);
                const ringGeo = new THREE.CircleGeometry(baseRadius, 64);
                const ringMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const ring = new THREE.LineLoop(ringGeo, ringMat);
                ring.position.set(cfg.x, y, cfg.z);
                ring.rotation.x = Math.PI/2;
                mainGridGroup.add(ring);
            }
            for (let i = 0; i < mainGridVerts; i++) {
                const theta = (i / mainGridVerts) * Math.PI * 2;
                const x = Math.cos(theta) * baseRadius;
                const z = Math.sin(theta) * baseRadius;
                const lineGeo = new THREE.BufferGeometry().setFromPoints([
                    new THREE.Vector3(cfg.x + x, mesh.position.y - mainHeight/2, cfg.z + z),
                    new THREE.Vector3(cfg.x + x, mesh.position.y + mainHeight/2, cfg.z + z)
                ]);
                const lineMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const line = new THREE.Line(lineGeo, lineMat);
                line.userData.originalColor = 0xffffff;
                mainGridGroup.add(line);
            }
            scene.add(mainGridGroup);
            
            // Add glass edge highlights
            const glassEdges = new THREE.EdgesGeometry(mesh.geometry);
            const glassOutline = new THREE.LineSegments(glassEdges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));
            glassOutline.position.copy(mesh.position);
            scene.add(glassOutline);
            
            // Add stepped middle section
            const middleRadius = baseRadius * 0.7;
            const middleHeight = cfg.height * 0.15;
            const middleMesh = new THREE.Mesh(
                new THREE.CylinderGeometry(middleRadius, middleRadius, middleHeight, segments, 1, false),
                new THREE.MeshStandardMaterial({ 
                    color: 0xffffff, 
                    transparent: true, 
                    opacity: 0.85, 
                    metalness: 0.9, 
                    roughness: 0.1,
                    emissive: 0xffffff,
                    emissiveIntensity: 2.0
                })
            );
            middleMesh.position.set(cfg.x, cfg.height * 0.8 + middleHeight / 2, cfg.z);
            scene.add(middleMesh);
            
            // Add black grid overlay to middle section (custom horizontal and vertical lines)
            const middleGridGroup = new THREE.Group();
            const middleGridRings = 3;
            const middleGridVerts = segments;
            for (let i = 1; i < middleGridRings; i++) {
                const y = middleMesh.position.y - middleHeight/2 + (middleHeight * i / middleGridRings);
                const ringGeo = new THREE.CircleGeometry(middleRadius, 64);
                const ringMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const ring = new THREE.LineLoop(ringGeo, ringMat);
                ring.position.set(cfg.x, y, cfg.z);
                ring.rotation.x = Math.PI/2;
                middleGridGroup.add(ring);
            }
            for (let i = 0; i < middleGridVerts; i++) {
                const theta = (i / middleGridVerts) * Math.PI * 2;
                const x = Math.cos(theta) * middleRadius;
                const z = Math.sin(theta) * middleRadius;
                const lineGeo = new THREE.BufferGeometry().setFromPoints([
                    new THREE.Vector3(cfg.x + x, middleMesh.position.y - middleHeight/2, cfg.z + z),
                    new THREE.Vector3(cfg.x + x, middleMesh.position.y + middleHeight/2, cfg.z + z)
                ]);
                const lineMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const line = new THREE.Line(lineGeo, lineMat);
                line.userData.originalColor = 0xffffff;
                middleGridGroup.add(line);
            }
            scene.add(middleGridGroup);
            
            // Add middle section edges
            const middleEdges = new THREE.EdgesGeometry(middleMesh.geometry);
            const middleOutline = new THREE.LineSegments(middleEdges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));
            middleOutline.position.copy(middleMesh.position);
            scene.add(middleOutline);
            
            // Add glass dome roof
            const domeRadius = middleRadius * 0.8;
            const domeHeight = cfg.height * 0.05;
            const domeMesh = new THREE.Mesh(
                new THREE.SphereGeometry(domeRadius, segments * 2, segments, 0, Math.PI * 2, 0, Math.PI / 2),
                new THREE.MeshStandardMaterial({ 
                    color: 0xffffff, 
                    transparent: true, 
                    opacity: 0.9, 
                    metalness: 0.95, 
                    roughness: 0.05,
                    emissive: 0xffffff,
                    emissiveIntensity: 2.5
                })
            );
            domeMesh.position.set(cfg.x, cfg.height * 0.8 + middleHeight + domeRadius, cfg.z);
            scene.add(domeMesh);
            
            // Add black grid overlay to dome (custom latitude and longitude lines)
            const domeGridGroup = new THREE.Group();
            const domeLatLines = 4;
            const domeLonLines = segments * 2;
            for (let i = 1; i < domeLatLines; i++) {
                const phi = (i / domeLatLines) * (Math.PI/2);
                const r = Math.sin(phi) * domeRadius;
                const y = Math.cos(phi) * domeRadius + domeMesh.position.y - domeRadius;
                const ringGeo = new THREE.CircleGeometry(r, 64);
                const ringMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const ring = new THREE.LineLoop(ringGeo, ringMat);
                ring.position.set(cfg.x, y, cfg.z);
                ring.rotation.x = Math.PI/2;
                domeGridGroup.add(ring);
            }
            for (let i = 0; i < domeLonLines; i++) {
                const theta = (i / domeLonLines) * Math.PI * 2;
                const points = [];
                for (let j = 0; j <= 16; j++) {
                    const phi = (j / 16) * (Math.PI/2);
                    const r = Math.sin(phi) * domeRadius;
                    const y = Math.cos(phi) * domeRadius + domeMesh.position.y - domeRadius;
                    const x = Math.cos(theta) * r;
                    const z = Math.sin(theta) * r;
                    points.push(new THREE.Vector3(cfg.x + x, y, cfg.z + z));
                }
                const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
                const lineMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const line = new THREE.Line(lineGeo, lineMat);
                line.userData.originalColor = 0xffffff;
                domeGridGroup.add(line);
            }
            scene.add(domeGridGroup);
            
            // Add dome edges
            const domeEdges = new THREE.EdgesGeometry(domeMesh.geometry);
            const domeOutline = new THREE.LineSegments(domeEdges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));
            domeOutline.position.copy(domeMesh.position);
            scene.add(domeOutline);
            
            // Add antenna on top
            const antennaHeight = 1.5;
            const antennaMesh = new THREE.Mesh(
                new THREE.CylinderGeometry(0.05, 0.05, antennaHeight, 8, 1, false),
                new THREE.MeshStandardMaterial({ 
                    color: 0xffffff, 
                    emissive: 0xffffff, 
                    emissiveIntensity: 2.5,
                    metalness: 0.8,
                    roughness: 0.2
                })
            );
            antennaMesh.position.set(cfg.x, cfg.height * 0.8 + middleHeight + domeRadius + antennaHeight / 2, cfg.z);
            scene.add(antennaMesh);
            
            // Add glowing tip
            const tipMesh = new THREE.Mesh(
                new THREE.SphereGeometry(0.08, 8, 8),
                new THREE.MeshStandardMaterial({ 
                    color: 0x00ffff, 
                    emissive: 0x00ffff, 
                    emissiveIntensity: 3.5,
                    metalness: 0.9,
                    roughness: 0.1
                })
            );
            tipMesh.position.set(cfg.x, cfg.height * 0.8 + middleHeight + domeRadius + antennaHeight + 0.08, cfg.z);
            scene.add(tipMesh);
            
            // Store references for animation
            window._glassTowerMeshes = [mesh, middleMesh, domeMesh, antennaMesh, tipMesh];
            
            // Accent: animated light ring at the very top
            if (cfg.accent === 'grid') {
                // Create small rotating light ring at the very top of the building
                const ringRadius = 0.3;
                const ringGeo = new THREE.TorusGeometry(ringRadius, 0.06, 6, 24);
                const ringMat = new THREE.MeshBasicMaterial({ 
                    color: 0xffffff, 
                    emissive: 0xffffff, 
                    emissiveIntensity: 4.0 
                });
                accentMesh = new THREE.Mesh(ringGeo, ringMat);
                accentMesh.position.set(cfg.x, cfg.height * 0.8 + cfg.height * 0.15 + 1.8 + 1.5 + 0.16 + 0.3, cfg.z);
                accentMesh.rotation.x = Math.PI / 2;
                accentMesh.userData.rotationSpeed = 0.03;
                scene.add(accentMesh);
            }
            // Only now, after all are defined, add to hover group
            let group = [mesh, middleMesh, domeMesh, antennaMesh, tipMesh];
            if (typeof disc !== 'undefined' && disc.isMesh) group.push(disc);
            if (typeof spire !== 'undefined' && spire.isMesh) group.push(spire);
            if (typeof sphere !== 'undefined' && sphere.isMesh) group.push(sphere);
            if (typeof gridRing !== 'undefined' && gridRing.isMesh) group.push(gridRing);
            if (typeof dome !== 'undefined' && dome.isMesh) group.push(dome);
            for (const m of group) {
                window._mainTowerMeshes.push(m);
                window._mainTowerMeshToGroup.set(m, group);
            }
        } else if (cfg.type === 'box') {
            // Create a glass tower with hexagonal base and stepped design
            const baseRadius = 1.8;
            const segments = 6;
            
            // Main hexagonal tower
            mesh = new THREE.Mesh(
                new THREE.CylinderGeometry(baseRadius, baseRadius, cfg.height * 0.8, segments, 1, false),
                new THREE.MeshStandardMaterial({ 
                    color: 0xffffff, 
                    transparent: true, 
                    opacity: 0.8, 
                    metalness: 0.9, 
                    roughness: 0.1,
                    emissive: 0xffffff,
                    emissiveIntensity: 1.5
                })
            );
            mesh.position.set(cfg.x, (cfg.height * 0.8) / 2, cfg.z);
            
            // Store reference to Art Museum for click detection
            window._boxTowerMesh = mesh;
            
            // Add black grid overlay to main tower (custom horizontal and vertical lines)
            const mainGridGroup = new THREE.Group();
            const mainGridRings = 8; // number of horizontal rings
            const mainGridVerts = segments; // number of vertical lines
            const mainHeight = cfg.height * 0.8;
            for (let i = 1; i < mainGridRings; i++) {
                const y = mesh.position.y - mainHeight/2 + (mainHeight * i / mainGridRings);
                const ringGeo = new THREE.CircleGeometry(baseRadius, 64);
                const ringMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const ring = new THREE.LineLoop(ringGeo, ringMat);
                ring.position.set(cfg.x, y, cfg.z);
                ring.rotation.x = Math.PI/2;
                mainGridGroup.add(ring);
            }
            for (let i = 0; i < mainGridVerts; i++) {
                const theta = (i / mainGridVerts) * Math.PI * 2;
                const x = Math.cos(theta) * baseRadius;
                const z = Math.sin(theta) * baseRadius;
                const lineGeo = new THREE.BufferGeometry().setFromPoints([
                    new THREE.Vector3(cfg.x + x, mesh.position.y - mainHeight/2, cfg.z + z),
                    new THREE.Vector3(cfg.x + x, mesh.position.y + mainHeight/2, cfg.z + z)
                ]);
                const lineMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const line = new THREE.Line(lineGeo, lineMat);
                line.userData.originalColor = 0xffffff;
                mainGridGroup.add(line);
            }
            scene.add(mainGridGroup);
            
            // Add glass edge highlights
            const glassEdges = new THREE.EdgesGeometry(mesh.geometry);
            const glassOutline = new THREE.LineSegments(glassEdges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));
            glassOutline.position.copy(mesh.position);
            scene.add(glassOutline);
            
            // Add stepped middle section
            const middleRadius = baseRadius * 0.7;
            const middleHeight = cfg.height * 0.15;
            const middleMesh = new THREE.Mesh(
                new THREE.CylinderGeometry(middleRadius, middleRadius, middleHeight, segments, 1, false),
                new THREE.MeshStandardMaterial({ 
                    color: 0xffffff, 
                    transparent: true, 
                    opacity: 0.85, 
                    metalness: 0.9, 
                    roughness: 0.1,
                    emissive: 0xffffff,
                    emissiveIntensity: 2.0
                })
            );
            middleMesh.position.set(cfg.x, cfg.height * 0.8 + middleHeight / 2, cfg.z);
            scene.add(middleMesh);
            
            // Add black grid overlay to middle section (custom horizontal and vertical lines)
            const middleGridGroup = new THREE.Group();
            const middleGridRings = 3;
            const middleGridVerts = segments;
            for (let i = 1; i < middleGridRings; i++) {
                const y = middleMesh.position.y - middleHeight/2 + (middleHeight * i / middleGridRings);
                const ringGeo = new THREE.CircleGeometry(middleRadius, 64);
                const ringMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const ring = new THREE.LineLoop(ringGeo, ringMat);
                ring.position.set(cfg.x, y, cfg.z);
                ring.rotation.x = Math.PI/2;
                middleGridGroup.add(ring);
            }
            for (let i = 0; i < middleGridVerts; i++) {
                const theta = (i / middleGridVerts) * Math.PI * 2;
                const x = Math.cos(theta) * middleRadius;
                const z = Math.sin(theta) * middleRadius;
                const lineGeo = new THREE.BufferGeometry().setFromPoints([
                    new THREE.Vector3(cfg.x + x, middleMesh.position.y - middleHeight/2, cfg.z + z),
                    new THREE.Vector3(cfg.x + x, middleMesh.position.y + middleHeight/2, cfg.z + z)
                ]);
                const lineMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const line = new THREE.Line(lineGeo, lineMat);
                line.userData.originalColor = 0xffffff;
                middleGridGroup.add(line);
            }
            scene.add(middleGridGroup);
            
            // Add middle section edges
            const middleEdges = new THREE.EdgesGeometry(middleMesh.geometry);
            const middleOutline = new THREE.LineSegments(middleEdges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));
            middleOutline.position.copy(middleMesh.position);
            scene.add(middleOutline);
            
            // Add glass dome roof
            const domeRadius = middleRadius * 0.8;
            const domeHeight = cfg.height * 0.05;
            const domeMesh = new THREE.Mesh(
                new THREE.SphereGeometry(domeRadius, segments * 2, segments, 0, Math.PI * 2, 0, Math.PI / 2),
                new THREE.MeshStandardMaterial({ 
                    color: 0xffffff, 
                    transparent: true, 
                    opacity: 0.9, 
                    metalness: 0.95, 
                    roughness: 0.05,
                    emissive: 0xffffff,
                    emissiveIntensity: 2.5
                })
            );
            domeMesh.position.set(cfg.x, cfg.height * 0.8 + middleHeight + domeRadius, cfg.z);
            scene.add(domeMesh);
            
            // Add black grid overlay to dome (custom latitude and longitude lines)
            const domeGridGroup = new THREE.Group();
            const domeLatLines = 4;
            const domeLonLines = segments * 2;
            for (let i = 1; i < domeLatLines; i++) {
                const phi = (i / domeLatLines) * (Math.PI/2);
                const r = Math.sin(phi) * domeRadius;
                const y = Math.cos(phi) * domeRadius + domeMesh.position.y - domeRadius;
                const ringGeo = new THREE.CircleGeometry(r, 64);
                const ringMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const ring = new THREE.LineLoop(ringGeo, ringMat);
                ring.position.set(cfg.x, y, cfg.z);
                ring.rotation.x = Math.PI/2;
                domeGridGroup.add(ring);
            }
            for (let i = 0; i < domeLonLines; i++) {
                const theta = (i / domeLonLines) * Math.PI * 2;
                const points = [];
                for (let j = 0; j <= 16; j++) {
                    const phi = (j / 16) * (Math.PI/2);
                    const r = Math.sin(phi) * domeRadius;
                    const y = Math.cos(phi) * domeRadius + domeMesh.position.y - domeRadius;
                    const x = Math.cos(theta) * r;
                    const z = Math.sin(theta) * r;
                    points.push(new THREE.Vector3(cfg.x + x, y, cfg.z + z));
                }
                const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
                const lineMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const line = new THREE.Line(lineGeo, lineMat);
                line.userData.originalColor = 0xffffff;
                domeGridGroup.add(line);
            }
            scene.add(domeGridGroup);
            
            // Add dome edges
            const domeEdges = new THREE.EdgesGeometry(domeMesh.geometry);
            const domeOutline = new THREE.LineSegments(domeEdges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));
            domeOutline.position.copy(domeMesh.position);
            scene.add(domeOutline);
            
            // Add antenna on top
            const antennaHeight = 1.5;
            const antennaMesh = new THREE.Mesh(
                new THREE.CylinderGeometry(0.05, 0.05, antennaHeight, 8, 1, false),
                new THREE.MeshStandardMaterial({ 
                    color: 0xffffff, 
                    emissive: 0xffffff, 
                    emissiveIntensity: 2.5,
                    metalness: 0.8,
                    roughness: 0.2
                })
            );
            antennaMesh.position.set(cfg.x, cfg.height * 0.8 + middleHeight + domeRadius + antennaHeight / 2, cfg.z);
            scene.add(antennaMesh);
            
            // Add glowing tip
            const tipMesh = new THREE.Mesh(
                new THREE.SphereGeometry(0.08, 8, 8),
                new THREE.MeshStandardMaterial({ 
                    color: 0x00ffff, 
                    emissive: 0x00ffff, 
                    emissiveIntensity: 3.5,
                    metalness: 0.9,
                    roughness: 0.1
                })
            );
            tipMesh.position.set(cfg.x, cfg.height * 0.8 + middleHeight + domeRadius + antennaHeight + 0.08, cfg.z);
            scene.add(tipMesh);
            
            // Store references for animation
            window._glassTowerMeshes = [mesh, middleMesh, domeMesh, antennaMesh, tipMesh];
            
            // Accent: animated light ring at the very top
            if (cfg.accent === 'grid') {
                // Create small rotating light ring at the very top of the building
                const ringRadius = 0.3;
                const ringGeo = new THREE.TorusGeometry(ringRadius, 0.06, 6, 24);
                const ringMat = new THREE.MeshBasicMaterial({ 
                    color: 0xffffff, 
                    emissive: 0xffffff, 
                    emissiveIntensity: 4.0 
                });
                accentMesh = new THREE.Mesh(ringGeo, ringMat);
                accentMesh.position.set(cfg.x, cfg.height * 0.8 + cfg.height * 0.15 + 1.8 + 1.5 + 0.16 + 0.3, cfg.z);
                accentMesh.rotation.x = Math.PI / 2;
                accentMesh.userData.rotationSpeed = 0.03;
                scene.add(accentMesh);
            }
            // Only now, after all are defined, add to hover group
            let group = [mesh, middleMesh, domeMesh, antennaMesh, tipMesh];
            if (typeof disc !== 'undefined' && disc.isMesh) group.push(disc);
            if (typeof spire !== 'undefined' && spire.isMesh) group.push(spire);
            if (typeof sphere !== 'undefined' && sphere.isMesh) group.push(sphere);
            if (typeof gridRing !== 'undefined' && gridRing.isMesh) group.push(gridRing);
            if (typeof dome !== 'undefined' && dome.isMesh) group.push(dome);
            for (const m of group) {
                window._mainTowerMeshes.push(m);
                window._mainTowerMeshToGroup.set(m, group);
            }
        } else if (cfg.type === 'box') {
            // Create a glass tower with hexagonal base and stepped design
            const baseRadius = 1.8;
            const segments = 6;
            
            // Main hexagonal tower
            mesh = new THREE.Mesh(
                new THREE.CylinderGeometry(baseRadius, baseRadius, cfg.height * 0.8, segments, 1, false),
                new THREE.MeshStandardMaterial({ 
                    color: 0xffffff, 
                    transparent: true, 
                    opacity: 0.8, 
                    metalness: 0.9, 
                    roughness: 0.1,
                    emissive: 0xffffff,
                    emissiveIntensity: 1.5
                })
            );
            mesh.position.set(cfg.x, (cfg.height * 0.8) / 2, cfg.z);
            
            // Store reference to Art Museum for click detection
            window._boxTowerMesh = mesh;
            
            // Add black grid overlay to main tower (custom horizontal and vertical lines)
            const mainGridGroup = new THREE.Group();
            const mainGridRings = 8; // number of horizontal rings
            const mainGridVerts = segments; // number of vertical lines
            const mainHeight = cfg.height * 0.8;
            for (let i = 1; i < mainGridRings; i++) {
                const y = mesh.position.y - mainHeight/2 + (mainHeight * i / mainGridRings);
                const ringGeo = new THREE.CircleGeometry(baseRadius, 64);
                const ringMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const ring = new THREE.LineLoop(ringGeo, ringMat);
                ring.position.set(cfg.x, y, cfg.z);
                ring.rotation.x = Math.PI/2;
                mainGridGroup.add(ring);
            }
            for (let i = 0; i < mainGridVerts; i++) {
                const theta = (i / mainGridVerts) * Math.PI * 2;
                const x = Math.cos(theta) * baseRadius;
                const z = Math.sin(theta) * baseRadius;
                const lineGeo = new THREE.BufferGeometry().setFromPoints([
                    new THREE.Vector3(cfg.x + x, mesh.position.y - mainHeight/2, cfg.z + z),
                    new THREE.Vector3(cfg.x + x, mesh.position.y + mainHeight/2, cfg.z + z)
                ]);
                const lineMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const line = new THREE.Line(lineGeo, lineMat);
                line.userData.originalColor = 0xffffff;
                mainGridGroup.add(line);
            }
            scene.add(mainGridGroup);
            
            // Add glass edge highlights
            const glassEdges = new THREE.EdgesGeometry(mesh.geometry);
            const glassOutline = new THREE.LineSegments(glassEdges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));
            glassOutline.position.copy(mesh.position);
            scene.add(glassOutline);
            
            // Add stepped middle section
            const middleRadius = baseRadius * 0.7;
            const middleHeight = cfg.height * 0.15;
            const middleMesh = new THREE.Mesh(
                new THREE.CylinderGeometry(middleRadius, middleRadius, middleHeight, segments, 1, false),
                new THREE.MeshStandardMaterial({ 
                    color: 0xffffff, 
                    transparent: true, 
                    opacity: 0.85, 
                    metalness: 0.9, 
                    roughness: 0.1,
                    emissive: 0xffffff,
                    emissiveIntensity: 2.0
                })
            );
            middleMesh.position.set(cfg.x, cfg.height * 0.8 + middleHeight / 2, cfg.z);
            scene.add(middleMesh);
            
            // Add black grid overlay to middle section (custom horizontal and vertical lines)
            const middleGridGroup = new THREE.Group();
            const middleGridRings = 3;
            const middleGridVerts = segments;
            for (let i = 1; i < middleGridRings; i++) {
                const y = middleMesh.position.y - middleHeight/2 + (middleHeight * i / middleGridRings);
                const ringGeo = new THREE.CircleGeometry(middleRadius, 64);
                const ringMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const ring = new THREE.LineLoop(ringGeo, ringMat);
                ring.position.set(cfg.x, y, cfg.z);
                ring.rotation.x = Math.PI/2;
                middleGridGroup.add(ring);
            }
            for (let i = 0; i < middleGridVerts; i++) {
                const theta = (i / middleGridVerts) * Math.PI * 2;
                const x = Math.cos(theta) * middleRadius;
                const z = Math.sin(theta) * middleRadius;
                const lineGeo = new THREE.BufferGeometry().setFromPoints([
                    new THREE.Vector3(cfg.x + x, middleMesh.position.y - middleHeight/2, cfg.z + z),
                    new THREE.Vector3(cfg.x + x, middleMesh.position.y + middleHeight/2, cfg.z + z)
                ]);
                const lineMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const line = new THREE.Line(lineGeo, lineMat);
                line.userData.originalColor = 0xffffff;
                middleGridGroup.add(line);
            }
            scene.add(middleGridGroup);
            
            // Add middle section edges
            const middleEdges = new THREE.EdgesGeometry(middleMesh.geometry);
            const middleOutline = new THREE.LineSegments(middleEdges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));
            middleOutline.position.copy(middleMesh.position);
            scene.add(middleOutline);
            
            // Add glass dome roof
            const domeRadius = middleRadius * 0.8;
            const domeHeight = cfg.height * 0.05;
            const domeMesh = new THREE.Mesh(
                new THREE.SphereGeometry(domeRadius, segments * 2, segments, 0, Math.PI * 2, 0, Math.PI / 2),
                new THREE.MeshStandardMaterial({ 
                    color: 0xffffff, 
                    transparent: true, 
                    opacity: 0.9, 
                    metalness: 0.95, 
                    roughness: 0.05,
                    emissive: 0xffffff,
                    emissiveIntensity: 2.5
                })
            );
            domeMesh.position.set(cfg.x, cfg.height * 0.8 + middleHeight + domeRadius, cfg.z);
            scene.add(domeMesh);
            
            // Add black grid overlay to dome (custom latitude and longitude lines)
            const domeGridGroup = new THREE.Group();
            const domeLatLines = 4;
            const domeLonLines = segments * 2;
            for (let i = 1; i < domeLatLines; i++) {
                const phi = (i / domeLatLines) * (Math.PI/2);
                const r = Math.sin(phi) * domeRadius;
                const y = Math.cos(phi) * domeRadius + domeMesh.position.y - domeRadius;
                const ringGeo = new THREE.CircleGeometry(r, 64);
                const ringMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const ring = new THREE.LineLoop(ringGeo, ringMat);
                ring.position.set(cfg.x, y, cfg.z);
                ring.rotation.x = Math.PI/2;
                domeGridGroup.add(ring);
            }
            for (let i = 0; i < domeLonLines; i++) {
                const theta = (i / domeLonLines) * Math.PI * 2;
                const points = [];
                for (let j = 0; j <= 16; j++) {
                    const phi = (j / 16) * (Math.PI/2);
                    const r = Math.sin(phi) * domeRadius;
                    const y = Math.cos(phi) * domeRadius + domeMesh.position.y - domeRadius;
                    const x = Math.cos(theta) * r;
                    const z = Math.sin(theta) * r;
                    points.push(new THREE.Vector3(cfg.x + x, y, cfg.z + z));
                }
                const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
                const lineMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const line = new THREE.Line(lineGeo, lineMat);
                line.userData.originalColor = 0xffffff;
                domeGridGroup.add(line);
            }
            scene.add(domeGridGroup);
            
            // Add dome edges
            const domeEdges = new THREE.EdgesGeometry(domeMesh.geometry);
            const domeOutline = new THREE.LineSegments(domeEdges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));
            domeOutline.position.copy(domeMesh.position);
            scene.add(domeOutline);
            
            // Add antenna on top
            const antennaHeight = 1.5;
            const antennaMesh = new THREE.Mesh(
                new THREE.CylinderGeometry(0.05, 0.05, antennaHeight, 8, 1, false),
                new THREE.MeshStandardMaterial({ 
                    color: 0xffffff, 
                    emissive: 0xffffff, 
                    emissiveIntensity: 2.5,
                    metalness: 0.8,
                    roughness: 0.2
                })
            );
            antennaMesh.position.set(cfg.x, cfg.height * 0.8 + middleHeight + domeRadius + antennaHeight / 2, cfg.z);
            scene.add(antennaMesh);
            
            // Add glowing tip
            const tipMesh = new THREE.Mesh(
                new THREE.SphereGeometry(0.08, 8, 8),
                new THREE.MeshStandardMaterial({ 
                    color: 0x00ffff, 
                    emissive: 0x00ffff, 
                    emissiveIntensity: 3.5,
                    metalness: 0.9,
                    roughness: 0.1
                })
            );
            tipMesh.position.set(cfg.x, cfg.height * 0.8 + middleHeight + domeRadius + antennaHeight + 0.08, cfg.z);
            scene.add(tipMesh);
            
            // Store references for animation
            window._glassTowerMeshes = [mesh, middleMesh, domeMesh, antennaMesh, tipMesh];
            
            // Accent: animated light ring at the very top
            if (cfg.accent === 'grid') {
                // Create small rotating light ring at the very top of the building
                const ringRadius = 0.3;
                const ringGeo = new THREE.TorusGeometry(ringRadius, 0.06, 6, 24);
                const ringMat = new THREE.MeshBasicMaterial({ 
                    color: 0xffffff, 
                    emissive: 0xffffff, 
                    emissiveIntensity: 4.0 
                });
                accentMesh = new THREE.Mesh(ringGeo, ringMat);
                accentMesh.position.set(cfg.x, cfg.height * 0.8 + cfg.height * 0.15 + 1.8 + 1.5 + 0.16 + 0.3, cfg.z);
                accentMesh.rotation.x = Math.PI / 2;
                accentMesh.userData.rotationSpeed = 0.03;
                scene.add(accentMesh);
            }
            // Only now, after all are defined, add to hover group
            let group = [mesh, middleMesh, domeMesh, antennaMesh, tipMesh];
            if (typeof disc !== 'undefined' && disc.isMesh) group.push(disc);
            if (typeof spire !== 'undefined' && spire.isMesh) group.push(spire);
            if (typeof sphere !== 'undefined' && sphere.isMesh) group.push(sphere);
            if (typeof gridRing !== 'undefined' && gridRing.isMesh) group.push(gridRing);
            if (typeof dome !== 'undefined' && dome.isMesh) group.push(dome);
            for (const m of group) {
                window._mainTowerMeshes.push(m);
                window._mainTowerMeshToGroup.set(m, group);
            }
        } else if (cfg.type === 'box') {
            // Create a glass tower with hexagonal base and stepped design
            const baseRadius = 1.8;
            const segments = 6;
            
            // Main hexagonal tower
            mesh = new THREE.Mesh(
                new THREE.CylinderGeometry(baseRadius, baseRadius, cfg.height * 0.8, segments, 1, false),
                new THREE.MeshStandardMaterial({ 
                    color: 0xffffff, 
                    transparent: true, 
                    opacity: 0.8, 
                    metalness: 0.9, 
                    roughness: 0.1,
                    emissive: 0xffffff,
                    emissiveIntensity: 1.5
                })
            );
            mesh.position.set(cfg.x, (cfg.height * 0.8) / 2, cfg.z);
            
            // Store reference to Art Museum for click detection
            window._boxTowerMesh = mesh;
            
            // Add black grid overlay to main tower (custom horizontal and vertical lines)
            const mainGridGroup = new THREE.Group();
            const mainGridRings = 8; // number of horizontal rings
            const mainGridVerts = segments; // number of vertical lines
            const mainHeight = cfg.height * 0.8;
            for (let i = 1; i < mainGridRings; i++) {
                const y = mesh.position.y - mainHeight/2 + (mainHeight * i / mainGridRings);
                const ringGeo = new THREE.CircleGeometry(baseRadius, 64);
                const ringMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const ring = new THREE.LineLoop(ringGeo, ringMat);
                ring.position.set(cfg.x, y, cfg.z);
                ring.rotation.x = Math.PI/2;
                mainGridGroup.add(ring);
            }
            for (let i = 0; i < mainGridVerts; i++) {
                const theta = (i / mainGridVerts) * Math.PI * 2;
                const x = Math.cos(theta) * baseRadius;
                const z = Math.sin(theta) * baseRadius;
                const lineGeo = new THREE.BufferGeometry().setFromPoints([
                    new THREE.Vector3(cfg.x + x, mesh.position.y - mainHeight/2, cfg.z + z),
                    new THREE.Vector3(cfg.x + x, mesh.position.y + mainHeight/2, cfg.z + z)
                ]);
                const lineMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const line = new THREE.Line(lineGeo, lineMat);
                line.userData.originalColor = 0xffffff;
                mainGridGroup.add(line);
            }
            scene.add(mainGridGroup);
            
            // Add glass edge highlights
            const glassEdges = new THREE.EdgesGeometry(mesh.geometry);
            const glassOutline = new THREE.LineSegments(glassEdges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));
            glassOutline.position.copy(mesh.position);
            scene.add(glassOutline);
            
            // Add stepped middle section
            const middleRadius = baseRadius * 0.7;
            const middleHeight = cfg.height * 0.15;
            const middleMesh = new THREE.Mesh(
                new THREE.CylinderGeometry(middleRadius, middleRadius, middleHeight, segments, 1, false),
                new THREE.MeshStandardMaterial({ 
                    color: 0xffffff, 
                    transparent: true, 
                    opacity: 0.85, 
                    metalness: 0.9, 
                    roughness: 0.1,
                    emissive: 0xffffff,
                    emissiveIntensity: 2.0
                })
            );
            middleMesh.position.set(cfg.x, cfg.height * 0.8 + middleHeight / 2, cfg.z);
            scene.add(middleMesh);
            
            // Add black grid overlay to middle section (custom horizontal and vertical lines)
            const middleGridGroup = new THREE.Group();
            const middleGridRings = 3;
            const middleGridVerts = segments;
            for (let i = 1; i < middleGridRings; i++) {
                const y = middleMesh.position.y - middleHeight/2 + (middleHeight * i / middleGridRings);
                const ringGeo = new THREE.CircleGeometry(middleRadius, 64);
                const ringMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const ring = new THREE.LineLoop(ringGeo, ringMat);
                ring.position.set(cfg.x, y, cfg.z);
                ring.rotation.x = Math.PI/2;
                middleGridGroup.add(ring);
            }
            for (let i = 0; i < middleGridVerts; i++) {
                const theta = (i / middleGridVerts) * Math.PI * 2;
                const x = Math.cos(theta) * middleRadius;
                const z = Math.sin(theta) * middleRadius;
                const lineGeo = new THREE.BufferGeometry().setFromPoints([
                    new THREE.Vector3(cfg.x + x, middleMesh.position.y - middleHeight/2, cfg.z + z),
                    new THREE.Vector3(cfg.x + x, middleMesh.position.y + middleHeight/2, cfg.z + z)
                ]);
                const lineMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const line = new THREE.Line(lineGeo, lineMat);
                line.userData.originalColor = 0xffffff;
                middleGridGroup.add(line);
            }
            scene.add(middleGridGroup);
            
            // Add middle section edges
            const middleEdges = new THREE.EdgesGeometry(middleMesh.geometry);
            const middleOutline = new THREE.LineSegments(middleEdges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));
            middleOutline.position.copy(middleMesh.position);
            scene.add(middleOutline);
            
            // Add glass dome roof
            const domeRadius = middleRadius * 0.8;
            const domeHeight = cfg.height * 0.05;
            const domeMesh = new THREE.Mesh(
                new THREE.SphereGeometry(domeRadius, segments * 2, segments, 0, Math.PI * 2, 0, Math.PI / 2),
                new THREE.MeshStandardMaterial({ 
                    color: 0xffffff, 
                    transparent: true, 
                    opacity: 0.9, 
                    metalness: 0.95, 
                    roughness: 0.05,
                    emissive: 0xffffff,
                    emissiveIntensity: 2.5
                })
            );
            domeMesh.position.set(cfg.x, cfg.height * 0.8 + middleHeight + domeRadius, cfg.z);
            scene.add(domeMesh);
            
            // Add black grid overlay to dome (custom latitude and longitude lines)
            const domeGridGroup = new THREE.Group();
            const domeLatLines = 4;
            const domeLonLines = segments * 2;
            for (let i = 1; i < domeLatLines; i++) {
                const phi = (i / domeLatLines) * (Math.PI/2);
                const r = Math.sin(phi) * domeRadius;
                const y = Math.cos(phi) * domeRadius + domeMesh.position.y - domeRadius;
                const ringGeo = new THREE.CircleGeometry(r, 64);
                const ringMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const ring = new THREE.LineLoop(ringGeo, ringMat);
                ring.position.set(cfg.x, y, cfg.z);
                ring.rotation.x = Math.PI/2;
                domeGridGroup.add(ring);
            }
            for (let i = 0; i < domeLonLines; i++) {
                const theta = (i / domeLonLines) * Math.PI * 2;
                const points = [];
                for (let j = 0; j <= 16; j++) {
                    const phi = (j / 16) * (Math.PI/2);
                    const r = Math.sin(phi) * domeRadius;
                    const y = Math.cos(phi) * domeRadius + domeMesh.position.y - domeRadius;
                    const x = Math.cos(theta) * r;
                    const z = Math.sin(theta) * r;
                    points.push(new THREE.Vector3(cfg.x + x, y, cfg.z + z));
                }
                const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
                const lineMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const line = new THREE.Line(lineGeo, lineMat);
                line.userData.originalColor = 0xffffff;
                domeGridGroup.add(line);
            }
            scene.add(domeGridGroup);
            
            // Add dome edges
            const domeEdges = new THREE.EdgesGeometry(domeMesh.geometry);
            const domeOutline = new THREE.LineSegments(domeEdges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));
            domeOutline.position.copy(domeMesh.position);
            scene.add(domeOutline);
            
            // Add antenna on top
            const antennaHeight = 1.5;
            const antennaMesh = new THREE.Mesh(
                new THREE.CylinderGeometry(0.05, 0.05, antennaHeight, 8, 1, false),
                new THREE.MeshStandardMaterial({ 
                    color: 0xffffff, 
                    emissive: 0xffffff, 
                    emissiveIntensity: 2.5,
                    metalness: 0.8,
                    roughness: 0.2
                })
            );
            antennaMesh.position.set(cfg.x, cfg.height * 0.8 + middleHeight + domeRadius + antennaHeight / 2, cfg.z);
            scene.add(antennaMesh);
            
            // Add glowing tip
            const tipMesh = new THREE.Mesh(
                new THREE.SphereGeometry(0.08, 8, 8),
                new THREE.MeshStandardMaterial({ 
                    color: 0x00ffff, 
                    emissive: 0x00ffff, 
                    emissiveIntensity: 3.5,
                    metalness: 0.9,
                    roughness: 0.1
                })
            );
            tipMesh.position.set(cfg.x, cfg.height * 0.8 + middleHeight + domeRadius + antennaHeight + 0.08, cfg.z);
            scene.add(tipMesh);
            
            // Store references for animation
            window._glassTowerMeshes = [mesh, middleMesh, domeMesh, antennaMesh, tipMesh];
            
            // Accent: animated light ring at the very top
            if (cfg.accent === 'grid') {
                // Create small rotating light ring at the very top of the building
                const ringRadius = 0.3;
                const ringGeo = new THREE.TorusGeometry(ringRadius, 0.06, 6, 24);
                const ringMat = new THREE.MeshBasicMaterial({ 
                    color: 0xffffff, 
                    emissive: 0xffffff, 
                    emissiveIntensity: 4.0 
                });
                accentMesh = new THREE.Mesh(ringGeo, ringMat);
                accentMesh.position.set(cfg.x, cfg.height * 0.8 + cfg.height * 0.15 + 1.8 + 1.5 + 0.16 + 0.3, cfg.z);
                accentMesh.rotation.x = Math.PI / 2;
                accentMesh.userData.rotationSpeed = 0.03;
                scene.add(accentMesh);
            }
            // Only now, after all are defined, add to hover group
            let group = [mesh, middleMesh, domeMesh, antennaMesh, tipMesh];
            if (typeof disc !== 'undefined' && disc.isMesh) group.push(disc);
            if (typeof spire !== 'undefined' && spire.isMesh) group.push(spire);
            if (typeof sphere !== 'undefined' && sphere.isMesh) group.push(sphere);
            if (typeof gridRing !== 'undefined' && gridRing.isMesh) group.push(gridRing);
            if (typeof dome !== 'undefined' && dome.isMesh) group.push(dome);
            for (const m of group) {
                window._mainTowerMeshes.push(m);
                window._mainTowerMeshToGroup.set(m, group);
            }
        } else if (cfg.type === 'box') {
            // Create a glass tower with hexagonal base and stepped design
            const baseRadius = 1.8;
            const segments = 6;
            
            // Main hexagonal tower
            mesh = new THREE.Mesh(
                new THREE.CylinderGeometry(baseRadius, baseRadius, cfg.height * 0.8, segments, 1, false),
                new THREE.MeshStandardMaterial({ 
                    color: 0xffffff, 
                    transparent: true, 
                    opacity: 0.8, 
                    metalness: 0.9, 
                    roughness: 0.1,
                    emissive: 0xffffff,
                    emissiveIntensity: 1.5
                })
            );
            mesh.position.set(cfg.x, (cfg.height * 0.8) / 2, cfg.z);
            
            // Store reference to Art Museum for click detection
            window._boxTowerMesh = mesh;
            
            // Add black grid overlay to main tower (custom horizontal and vertical lines)
            const mainGridGroup = new THREE.Group();
            const mainGridRings = 8; // number of horizontal rings
            const mainGridVerts = segments; // number of vertical lines
            const mainHeight = cfg.height * 0.8;
            for (let i = 1; i < mainGridRings; i++) {
                const y = mesh.position.y - mainHeight/2 + (mainHeight * i / mainGridRings);
                const ringGeo = new THREE.CircleGeometry(baseRadius, 64);
                const ringMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const ring = new THREE.LineLoop(ringGeo, ringMat);
                ring.position.set(cfg.x, y, cfg.z);
                ring.rotation.x = Math.PI/2;
                mainGridGroup.add(ring);
            }
            for (let i = 0; i < mainGridVerts; i++) {
                const theta = (i / mainGridVerts) * Math.PI * 2;
                const x = Math.cos(theta) * baseRadius;
                const z = Math.sin(theta) * baseRadius;
                const lineGeo = new THREE.BufferGeometry().setFromPoints([
                    new THREE.Vector3(cfg.x + x, mesh.position.y - mainHeight/2, cfg.z + z),
                    new THREE.Vector3(cfg.x + x, mesh.position.y + mainHeight/2, cfg.z + z)
                ]);
                const lineMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const line = new THREE.Line(lineGeo, lineMat);
                line.userData.originalColor = 0xffffff;
                mainGridGroup.add(line);
            }
            scene.add(mainGridGroup);
            
            // Add glass edge highlights
            const glassEdges = new THREE.EdgesGeometry(mesh.geometry);
            const glassOutline = new THREE.LineSegments(glassEdges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));
            glassOutline.position.copy(mesh.position);
            scene.add(glassOutline);
            
            // Add stepped middle section
            const middleRadius = baseRadius * 0.7;
            const middleHeight = cfg.height * 0.15;
            const middleMesh = new THREE.Mesh(
                new THREE.CylinderGeometry(middleRadius, middleRadius, middleHeight, segments, 1, false),
                new THREE.MeshStandardMaterial({ 
                    color: 0xffffff, 
                    transparent: true, 
                    opacity: 0.85, 
                    metalness: 0.9, 
                    roughness: 0.1,
                    emissive: 0xffffff,
                    emissiveIntensity: 2.0
                })
            );
            middleMesh.position.set(cfg.x, cfg.height * 0.8 + middleHeight / 2, cfg.z);
            scene.add(middleMesh);
            
            // Add black grid overlay to middle section (custom horizontal and vertical lines)
            const middleGridGroup = new THREE.Group();
            const middleGridRings = 3;
            const middleGridVerts = segments;
            for (let i = 1; i < middleGridRings; i++) {
                const y = middleMesh.position.y - middleHeight/2 + (middleHeight * i / middleGridRings);
                const ringGeo = new THREE.CircleGeometry(middleRadius, 64);
                const ringMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const ring = new THREE.LineLoop(ringGeo, ringMat);
                ring.position.set(cfg.x, y, cfg.z);
                ring.rotation.x = Math.PI/2;
                middleGridGroup.add(ring);
            }
            for (let i = 0; i < middleGridVerts; i++) {
                const theta = (i / middleGridVerts) * Math.PI * 2;
                const x = Math.cos(theta) * middleRadius;
                const z = Math.sin(theta) * middleRadius;
                const lineGeo = new THREE.BufferGeometry().setFromPoints([
                    new THREE.Vector3(cfg.x + x, middleMesh.position.y - middleHeight/2, cfg.z + z),
                    new THREE.Vector3(cfg.x + x, middleMesh.position.y + middleHeight/2, cfg.z + z)
                ]);
                const lineMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const line = new THREE.Line(lineGeo, lineMat);
                line.userData.originalColor = 0xffffff;
                middleGridGroup.add(line);
            }
            scene.add(middleGridGroup);
            
            // Add middle section edges
            const middleEdges = new THREE.EdgesGeometry(middleMesh.geometry);
            const middleOutline = new THREE.LineSegments(middleEdges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));
            middleOutline.position.copy(middleMesh.position);
            scene.add(middleOutline);
            
            // Add glass dome roof
            const domeRadius = middleRadius * 0.8;
            const domeHeight = cfg.height * 0.05;
            const domeMesh = new THREE.Mesh(
                new THREE.SphereGeometry(domeRadius, segments * 2, segments, 0, Math.PI * 2, 0, Math.PI / 2),
                new THREE.MeshStandardMaterial({ 
                    color: 0xffffff, 
                    transparent: true, 
                    opacity: 0.9, 
                    metalness: 0.95, 
                    roughness: 0.05,
                    emissive: 0xffffff,
                    emissiveIntensity: 2.5
                })
            );
            domeMesh.position.set(cfg.x, cfg.height * 0.8 + middleHeight + domeRadius, cfg.z);
            scene.add(domeMesh);
            
            // Add black grid overlay to dome (custom latitude and longitude lines)
            const domeGridGroup = new THREE.Group();
            const domeLatLines = 4;
            const domeLonLines = segments * 2;
            for (let i = 1; i < domeLatLines; i++) {
                const phi = (i / domeLatLines) * (Math.PI/2);
                const r = Math.sin(phi) * domeRadius;
                const y = Math.cos(phi) * domeRadius + domeMesh.position.y - domeRadius;
                const ringGeo = new THREE.CircleGeometry(r, 64);
                const ringMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const ring = new THREE.LineLoop(ringGeo, ringMat);
                ring.position.set(cfg.x, y, cfg.z);
                ring.rotation.x = Math.PI/2;
                domeGridGroup.add(ring);
            }
            for (let i = 0; i < domeLonLines; i++) {
                const theta = (i / domeLonLines) * Math.PI * 2;
                const points = [];
                for (let j = 0; j <= 16; j++) {
                    const phi = (j / 16) * (Math.PI/2);
                    const r = Math.sin(phi) * domeRadius;
                    const y = Math.cos(phi) * domeRadius + domeMesh.position.y - domeRadius;
                    const x = Math.cos(theta) * r;
                    const z = Math.sin(theta) * r;
                    points.push(new THREE.Vector3(cfg.x + x, y, cfg.z + z));
                }
                const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
                const lineMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const line = new THREE.Line(lineGeo, lineMat);
                line.userData.originalColor = 0xffffff;
                domeGridGroup.add(line);
            }
            scene.add(domeGridGroup);
            
            // Add dome edges
            const domeEdges = new THREE.EdgesGeometry(domeMesh.geometry);
            const domeOutline = new THREE.LineSegments(domeEdges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));
            domeOutline.position.copy(domeMesh.position);
            scene.add(domeOutline);
            
            // Add antenna on top
            const antennaHeight = 1.5;
            const antennaMesh = new THREE.Mesh(
                new THREE.CylinderGeometry(0.05, 0.05, antennaHeight, 8, 1, false),
                new THREE.MeshStandardMaterial({ 
                    color: 0xffffff, 
                    emissive: 0xffffff, 
                    emissiveIntensity: 2.5,
                    metalness: 0.8,
                    roughness: 0.2
                })
            );
            antennaMesh.position.set(cfg.x, cfg.height * 0.8 + middleHeight + domeRadius + antennaHeight / 2, cfg.z);
            scene.add(antennaMesh);
            
            // Add glowing tip
            const tipMesh = new THREE.Mesh(
                new THREE.SphereGeometry(0.08, 8, 8),
                new THREE.MeshStandardMaterial({ 
                    color: 0x00ffff, 
                    emissive: 0x00ffff, 
                    emissiveIntensity: 3.5,
                    metalness: 0.9,
                    roughness: 0.1
                })
            );
            tipMesh.position.set(cfg.x, cfg.height * 0.8 + middleHeight + domeRadius + antennaHeight + 0.08, cfg.z);
            scene.add(tipMesh);
            
            // Store references for animation
            window._glassTowerMeshes = [mesh, middleMesh, domeMesh, antennaMesh, tipMesh];
            
            // Accent: animated light ring at the very top
            if (cfg.accent === 'grid') {
                // Create small rotating light ring at the very top of the building
                const ringRadius = 0.3;
                const ringGeo = new THREE.TorusGeometry(ringRadius, 0.06, 6, 24);
                const ringMat = new THREE.MeshBasicMaterial({ 
                    color: 0xffffff, 
                    emissive: 0xffffff, 
                    emissiveIntensity: 4.0 
                });
                accentMesh = new THREE.Mesh(ringGeo, ringMat);
                accentMesh.position.set(cfg.x, cfg.height * 0.8 + cfg.height * 0.15 + 1.8 + 1.5 + 0.16 + 0.3, cfg.z);
                accentMesh.rotation.x = Math.PI / 2;
                accentMesh.userData.rotationSpeed = 0.03;
                scene.add(accentMesh);
            }
            // Only now, after all are defined, add to hover group
            let group = [mesh, middleMesh, domeMesh, antennaMesh, tipMesh];
            if (typeof disc !== 'undefined' && disc.isMesh) group.push(disc);
            if (typeof spire !== 'undefined' && spire.isMesh) group.push(spire);
            if (typeof sphere !== 'undefined' && sphere.isMesh) group.push(sphere);
            if (typeof gridRing !== 'undefined' && gridRing.isMesh) group.push(gridRing);
            if (typeof dome !== 'undefined' && dome.isMesh) group.push(dome);
            for (const m of group) {
                window._mainTowerMeshes.push(m);
                window._mainTowerMeshToGroup.set(m, group);
            }
        } else if (cfg.type === 'cone') {
            mesh = new THREE.Mesh(
                new THREE.ConeGeometry(1.3, cfg.height, 18, 1, true),
                new THREE.MeshStandardMaterial({ color: cfg.color, emissive: 0xffffff, emissiveIntensity: 0.5, metalness: 0.5 })
            );
            mesh.position.set(cfg.x, cfg.height / 2, cfg.z);
            // Add black outline
            const coneEdges = new THREE.EdgesGeometry(mesh.geometry);
            const coneOutline = new THREE.LineSegments(coneEdges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));
            coneOutline.position.copy(mesh.position);
            scene.add(coneOutline);
            // Accent: top sphere
            if (cfg.accent === 'topSphere') {
                const topGeo = new THREE.SphereGeometry(0.7, 16, 16);
                const topMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 1.2 });
                accentMesh = new THREE.Mesh(topGeo, topMat);
                accentMesh.position.set(cfg.x, cfg.height + 0.7, cfg.z);
            }
            // Add black grid overlay ONLY for Tower 3
            if (window._buildingLabels && window._buildingLabels.length === 3) {
                const gridGeo = new THREE.WireframeGeometry(mesh.geometry);
                const gridMat = new THREE.LineBasicMaterial({ color: 0x000000 });
                const grid = new THREE.LineSegments(gridGeo, gridMat);
                grid.position.copy(mesh.position);
                scene.add(grid);
            }
            let group = [mesh];
            window._mainTowerMeshes.push(mesh);
            window._mainTowerMeshToGroup.set(mesh, group);
            
            // Store reference to 3WSHS Store for click detection
            window._coneTowerGroup = group;
        } else if (cfg.type === 'octa') {
            mesh = new THREE.Mesh(
                new THREE.OctahedronGeometry(2.1, 0),
                new THREE.MeshStandardMaterial({ color: cfg.color, emissive: 0xffffff, emissiveIntensity: 0.5, metalness: 0.4 })
            );
            mesh.scale.y = cfg.height / 4.2;
            mesh.position.set(cfg.x, cfg.height / 2, cfg.z);
            // Add black outline
            const octaEdges = new THREE.EdgesGeometry(mesh.geometry);
            const octaOutline = new THREE.LineSegments(octaEdges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));
            octaOutline.position.copy(mesh.position);
            octaOutline.scale.copy(mesh.scale);
            scene.add(octaOutline);
            // Store reference for animation
            window._diamondMesh = mesh;
            window._diamondOutline = octaOutline;
            // Accent: wireframe
            if (cfg.accent === 'wire') {
                const wireGeo = new THREE.OctahedronGeometry(2.15, 0);
                const wireMat = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true });
                accentMesh = new THREE.Mesh(wireGeo, wireMat);
                accentMesh.scale.y = cfg.height / 4.2;
                accentMesh.position.copy(mesh.position);
            }
            let group = [mesh];
            window._mainTowerMeshes.push(mesh);
            window._mainTowerMeshToGroup.set(mesh, group);
            
            // Store reference to Marketing Hub for click detection
            window._octaTowerGroup = group;
        } else if (cfg.type === 'multi') {
            // Multi-segmented: cylinder base + cone top
            mesh = new THREE.Mesh(
                new THREE.CylinderGeometry(1.1, 1.5, cfg.height * 0.7, 18, 1, true),
                new THREE.MeshStandardMaterial({ color: cfg.color, emissive: 0xffffff, emissiveIntensity: 0.5, metalness: 0.4 })
            );
            mesh.position.set(cfg.x, (cfg.height * 0.7) / 2, cfg.z);
            // Add black outline to cylinder base
            const multiCylEdges = new THREE.EdgesGeometry(mesh.geometry);
            const multiCylOutline = new THREE.LineSegments(multiCylEdges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));
            multiCylOutline.position.copy(mesh.position);
            scene.add(multiCylOutline);
            const cone = new THREE.Mesh(
                new THREE.ConeGeometry(1.1, cfg.height * 0.3, 18, 1, true),
                new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 1.0 })
            );
            cone.position.set(cfg.x, cfg.height * 0.7 + (cfg.height * 0.3) / 2, cfg.z);
            scene.add(cone);
            // Add black outline to cone top
            const multiConeEdges = new THREE.EdgesGeometry(cone.geometry);
            const multiConeOutline = new THREE.LineSegments(multiConeEdges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }));
            multiConeOutline.position.copy(cone.position);
            scene.add(multiConeOutline);
            // After both mesh and cone are defined and added to scene:
            let group = [mesh, cone];
            window._mainTowerMeshes.push(mesh);
            window._mainTowerMeshes.push(cone);
            window._mainTowerMeshToGroup.set(mesh, group);
            window._mainTowerMeshToGroup.set(cone, group);
            
            // Store reference to Ink Tower for click detection
            window._multiTowerGroup = group;
        } else {
            // For all other towers, just use mesh
            let group = [mesh];
            window._mainTowerMeshes.push(mesh);
            window._mainTowerMeshToGroup.set(mesh, group);
        }
        scene.add(mesh);
        if (accentMesh) scene.add(accentMesh);
        // Add a floating 3D label above each main building with a unique name
        let towerLabel = 'Tower';
        if (cfg.type === 'cylinder') towerLabel = 'Real Estate Hub';
        if (cfg.type === 'box') towerLabel = 'Art Museum';
        if (cfg.type === 'cone') towerLabel = '3WSHS Store';
        if (cfg.type === 'octa') towerLabel = 'Marketing Hub';
        if (cfg.type === 'multi') towerLabel = 'Ink Tower';
        const labelCanvas = document.createElement('canvas');
        labelCanvas.width = 256;
        labelCanvas.height = 64;
        const ctx = labelCanvas.getContext('2d');
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, labelCanvas.width, labelCanvas.height);
        ctx.font = 'bold 36px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#000';
        ctx.fillText(towerLabel, labelCanvas.width / 2, labelCanvas.height / 2);
        const labelTexture = new THREE.CanvasTexture(labelCanvas);
        const labelMat = new THREE.MeshBasicMaterial({ map: labelTexture, transparent: true });
        const labelGeo = new THREE.PlaneGeometry(3.5, 0.9);
        const labelMesh = new THREE.Mesh(labelGeo, labelMat);
        // Compute top Y for each building type
        let topY = mesh.position.y + (cfg.height / 2);
        if (cfg.type === 'cylinder' && cfg.accent === 'ring') topY = cfg.height + 2.5;
        if (cfg.type === 'box') topY = cfg.height * 0.8 + cfg.height * 0.15 + 1.8 + 1.5 + 0.16 + 2.2;
        if (cfg.type === 'cone') topY = mesh.position.y + cfg.height / 2 + 1.5;
        if (cfg.type === 'octa') topY = mesh.position.y + (cfg.height / 2) * mesh.scale.y + 2.2;
        if (cfg.type === 'multi') topY = mesh.position.y + (cfg.height * 0.7) / 2 + (cfg.height * 0.3) + 2.2;
        labelMesh.position.set(cfg.x, topY, cfg.z);
        labelMesh.userData.baseY = topY;
        scene.add(labelMesh);
        // Store for animation (billboard effect)
        if (!window._buildingLabels) window._buildingLabels = [];
        window._buildingLabels.push(labelMesh);
        // For non-main towers, just use mesh for hover/bloom logic
        window._mainTowerMeshes.push(mesh);
        window._mainTowerMeshToGroup.set(mesh, [mesh]);
        // Glowing white edge lines (vertical edges and roofline)
        const edgeMatGlow = new THREE.MeshBasicMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 2 });
        const edgeThickness = 0.04;
        // Vertical edges
        for (let ex = -1; ex <= 1; ex += 2) {
          for (let ez = -1; ez <= 1; ez += 2) {
            const edgeGeo = new THREE.BoxGeometry(edgeThickness, cfg.height, edgeThickness);
            const edge = new THREE.Mesh(edgeGeo, edgeMatGlow.clone());
            edge.position.set(mesh.position.x + ex, mesh.position.y, mesh.position.z + ez);
            scene.add(edge);
          }
        }
        // Roofline edges
        for (let ex = -1; ex <= 1; ex += 2) {
          for (let ez = -1; ez <= 1; ez += 2) {
            const roofGeo = new THREE.BoxGeometry(2 - edgeThickness, edgeThickness, edgeThickness);
            const roofEdgeX = new THREE.Mesh(roofGeo, edgeMatGlow.clone());
            roofEdgeX.position.set(mesh.position.x, mesh.position.y + cfg.height / 2, mesh.position.z + ez);
            scene.add(roofEdgeX);
            const roofGeoZ = new THREE.BoxGeometry(edgeThickness, edgeThickness, 2 - edgeThickness);
            const roofEdgeZ = new THREE.Mesh(roofGeoZ, edgeMatGlow.clone());
            roofEdgeZ.position.set(mesh.position.x + ex, mesh.position.y + cfg.height / 2, mesh.position.z);
            scene.add(roofEdgeZ);
          }
        }
        // Animated glowing circuit lines on facade
        if (!window._circuitLines) window._circuitLines = [];
        const numCircuits = 1 + Math.floor(Math.random() * 2);
        for (let c = 0; c < numCircuits; c++) {
          const cy = 0.5 + Math.random() * (cfg.height - 1.2);
          const cLen = 0.7 + Math.random() * 0.7;
          const cGeo = new THREE.BoxGeometry(0.06, cLen, 0.04);
          const cMat = new THREE.MeshBasicMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 2 });
          const cMesh = new THREE.Mesh(cGeo, cMat);
          cMesh.position.set(mesh.position.x + 1.01, cy, mesh.position.z + (Math.random() - 0.5) * 1.2);
          scene.add(cMesh);
          window._circuitLines.push(cMesh);
        }
        // Glowing white edges on top (normal layer)
        const edges = new THREE.EdgesGeometry(mesh.geometry);
        const lineMat = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 1 });
        const line = new THREE.LineSegments(edges, lineMat);
        line.position.copy(mesh.position);
        scene.add(line);

        // Glowing white edges for bloom (bloom layer)
        const bloomLineMat = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 3 });
        const bloomLine = new THREE.LineSegments(edges, bloomLineMat);
        bloomLine.position.copy(mesh.position);
        bloomLine.layers.set(1); // Set to bloom layer
        scene.add(bloomLine);
    }
}

function init() {
    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // pure black
    scene.fog = null; // Remove fog for deep space visibility

    // Camera
    camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        2000 // Increased far clipping plane
    );
    camera.position.set(20, 25, 30);
    camera.lookAt(0, 0, 0);

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('scene-container').appendChild(renderer.domElement);

    // OrbitControls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 5, 0);
    controls.update();

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); // brighter for testing
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0x88aaff, 1);
    dirLight.position.set(20, 40, 20);
    scene.add(dirLight);
    // Sci-fi colored point light
    const sciFiLight = new THREE.PointLight(0x00ffff, 1, 100);
    sciFiLight.position.set(0, 30, 0);
    scene.add(sciFiLight);

    // Ground plane (pure black)
    const groundGeo = new THREE.PlaneGeometry(60, 60);
    const groundMat = new THREE.MeshStandardMaterial({ color: 0x000000 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0;
    ground.receiveShadow = true;
    scene.add(ground);

    // Park parameters
    const parkCenter = { x: 0, z: 0 };
    const parkWidth = 10;
    const parkDepth = 10;

    // Add straight, irregularly spaced roads
    addStraightCityRoads();

    // Add street lamps along roads
    addStreetLamps();

    // Add animated cars
    addAnimatedCars();

    // Add park (green rectangle)
    addPark(parkCenter, parkWidth, parkDepth);

    // City buildings with glowing white edges
    const cityWidth = 10;
    const cityDepth = 10;
    const spacing = 4;
    // Store building bounding boxes
    const buildingBounds = [];
    for (let x = -cityWidth / 2; x < cityWidth / 2; x++) {
        for (let z = -cityDepth / 2; z < cityDepth / 2; z++) {
            // Skip buildings inside the park area
            if (
                x * spacing > parkCenter.x - parkWidth / 2 &&
                x * spacing < parkCenter.x + parkWidth / 2 &&
                z * spacing > parkCenter.z - parkDepth / 2 &&
                z * spacing < parkCenter.z + parkDepth / 2
            ) {
                continue;
            }
            const height = Math.random() * 8 + 2;
            // Black building material
            const buildingMat = new THREE.MeshStandardMaterial({ color: 0x000000 });
            const buildingGeo = new THREE.BoxGeometry(2, height, 2);
            const building = new THREE.Mesh(buildingGeo, buildingMat);
            building.position.set(x * spacing, height / 2, z * spacing);
            building.castShadow = true;
            building.receiveShadow = true;
            scene.add(building);

            // If this building is white, add a black outline
            if (buildingMat.color.getHex() === 0xffffff) {
                const whiteEdges = new THREE.EdgesGeometry(buildingGeo);
                const whiteOutline = new THREE.LineSegments(whiteEdges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 3 }));
                whiteOutline.position.copy(building.position);
                scene.add(whiteOutline);
            }

            // Store building bounds for tree collision
            buildingBounds.push({
                x: x * spacing,
                z: z * spacing,
                half: 1.1 // half-width/half-depth of building (2/2 + margin)
            });

            // Add glowing windows to building
            const windowRows = Math.floor(height / 1.2);
            const windowCols = 2 + Math.floor(Math.random() * 2); // 2 or 3 columns
            const windowWidth = 0.25;
            const windowHeight = 0.4;
            const windowDepth = 0.06;
            const windowColor = 0xffffff;
            const buildingHalf = 1; // since box is 2 units wide/deep
            for (let side = 0; side < 4; side++) {
                let angle = side * Math.PI / 2;
                let dx = Math.cos(angle);
                let dz = Math.sin(angle);
                for (let row = 0; row < windowRows; row++) {
                    for (let col = 0; col < windowCols; col++) {
                        // Randomly skip some windows for variety
                        if (Math.random() < 0.25) continue;
                        let y = 0.7 + row * (height - 1.4) / Math.max(1, windowRows - 1);
                        let offset = (windowCols - 1) / 2;
                        // Place window flush with building face
                        let faceOffset = buildingHalf - windowDepth / 2 + 0.001; // small epsilon to avoid z-fighting
                        let wx = building.position.x + dx * faceOffset + dz * (col - offset) * 0.7;
                        let wz = building.position.z + dz * faceOffset + dx * (col - offset) * 0.7;
                        let wy = y;
                        const winGeo = new THREE.BoxGeometry(windowWidth, windowHeight, windowDepth);
                        const winMat = new THREE.MeshBasicMaterial({ color: windowColor, emissive: windowColor, emissiveIntensity: 1 });
                        const win = new THREE.Mesh(winGeo, winMat);
                        win.position.set(wx, wy, wz);
                        // Orient window to face outward
                        win.rotation.y = angle;
                        scene.add(win);
                    }
                }
            }
            // Add a giant digital billboard to some buildings
            if (Math.random() < 0.18) { // ~18% of buildings get a billboard
                const billboardSides = [0, 1, 2, 3];
                const side = billboardSides[Math.floor(Math.random() * billboardSides.length)];
                let angle = side * Math.PI / 2;
                let dx = Math.cos(angle);
                let dz = Math.sin(angle);
                // Billboard size
                const bbWidth = 1.2 + Math.random() * 0.8; // 1.2 to 2.0 wide
                let bbHeight = Math.max(1.2, height * 0.45 + Math.random() * 0.5);
                bbHeight = Math.min(bbHeight, height - 0.3); // never exceed building height minus margin
                const bbDepth = 0.08;
                // Place billboard flush with building face
                let faceOffset = buildingHalf + bbDepth / 2 - 0.002; // flush, never inside
                const bbGeo = new THREE.BoxGeometry(bbWidth, bbHeight, bbDepth);
                const bbMat = new THREE.MeshStandardMaterial({ color: 0x111111, emissive: 0xffffff, emissiveIntensity: 2 });
                const bb = new THREE.Mesh(bbGeo, bbMat);
                // Center billboard vertically on building face
                const bbY = building.position.y;
                const bbX = building.position.x + dx * faceOffset;
                const bbZ = building.position.z + dz * faceOffset;
                bb.position.set(bbX, bbY, bbZ);
                bb.rotation.y = angle + Math.PI / 2;
                scene.add(bb);
                billboardMeshes.push(bb);
            }
            // Add a rooftop billboard to some buildings
            if (Math.random() < 0.13) { // ~13% of buildings get a rooftop billboard
                const rbWidth = 1.2 + Math.random() * 1.2;
                const rbHeight = 0.38 + Math.random() * 0.32;
                const rbDepth = 0.12;
                const rbGeo = new THREE.BoxGeometry(rbWidth, rbHeight, rbDepth);
                const rbMat = new THREE.MeshStandardMaterial({ color: 0x111111, emissive: 0xffffff, emissiveIntensity: 2 });
                const rb = new THREE.Mesh(rbGeo, rbMat);
                // Place at top center, slightly above the building
                rb.position.set(building.position.x, building.position.y + height / 2 + rbHeight / 2 + 0.08, building.position.z);
                // Randomly rotate around Y for variety
                rb.rotation.y = Math.random() * Math.PI * 2;
                scene.add(rb);
                billboardMeshes.push(rb);
            }

            // Black outlines for contrast
            const blackEdges = new THREE.EdgesGeometry(buildingGeo);
            const blackLineMat = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 3 });
            const blackLine = new THREE.LineSegments(blackEdges, blackLineMat);
            blackLine.position.copy(building.position);
            scene.add(blackLine);
            
            // Glowing white edges on top
            const edges = new THREE.EdgesGeometry(buildingGeo);
            const lineMat = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 1 });
            const line = new THREE.LineSegments(edges, lineMat);
            line.position.copy(building.position);
            scene.add(line);
        }
    }

    // Add trees (avoid park area and buildings)
    addTrees(cityWidth, cityDepth, spacing, parkCenter, parkWidth, parkDepth, buildingBounds);

    // Add extra trees inside the park
    addParkTrees(parkCenter, parkWidth, parkDepth, 8);

    // Add main hub tower next to the park
    addMainHubTower(parkCenter, parkWidth, parkDepth);

    // Add 5 more distinct towers to the city
    addDistinctTowers(parkCenter, parkWidth, parkDepth);

    // Add a large gridded sphere around the city using latitude and longitude lines for a sci-fi dome effect.
    addGriddedSphere();

    // Add stars beyond the city dome
    addStarsBeyondDome();

    // Add mountains and greenery beyond the city
    addSurroundingMountains();
    addOuterGriddedTrees();

    // Add animated space objects
    addAnimatedSpaceObjects();

    addSecondDome();
    setupTeleportRaycast();
    addJungleSceneInSecondDome();
    setJungleSceneVisibility(false);

    // Add city dome click handler
    addCityDomeClickable();

    window.addEventListener('resize', onWindowResize, false);

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    lastHoveredGroup = null;

    // At the top-level, after renderer is created in init(), add this:
    renderer.domElement.addEventListener('pointermove', (event) => {
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    });

    // ... in init(), after renderer is created and appended ...
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.2, 0.4, 0.15);
    window._bloomComposer = new EffectComposer(renderer);
    window._bloomComposer.addPass(renderScene);
    window._bloomComposer.addPass(bloomPass);

    // Add click detection for Main Tower to open 3D room
    renderer.domElement.addEventListener('pointerdown', (event) => {
        const rect = renderer.domElement.getBoundingClientRect();
        const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        const clickMouse = new THREE.Vector2(mouseX, mouseY);
        raycaster.setFromCamera(clickMouse, camera);
        
        // Check for Main Tower click
        const mainTowerGroup = window._mainTowerGroups && window._mainTowerGroups[0];
        if (mainTowerGroup) {
            const intersects = raycaster.intersectObjects(mainTowerGroup, true);
            if (intersects.length > 0) {
                createRoomScene(renderer.domElement);
                renderer.domElement.addEventListener('backToCity', () => {
                    createCityScene(renderer.domElement);
                }, { once: true });
                return;
            }
        }
        
        // Check for Art Museum click
        if (window._boxTowerMesh) {
            console.log('Art Museum mesh found, checking for intersection...');
            const intersects = raycaster.intersectObject(window._boxTowerMesh, true);
            console.log('Art Museum intersects:', intersects.length);
            if (intersects.length > 0) {
                console.log('Art Museum clicked! Opening art museum...');
                window.open('https://www.3wshs.com/art-museum', '_blank');
                return;
            }
        } else {
            console.log('Art Museum mesh not found in window._boxTowerMesh');
        }
        
        // Check for Ink Tower click
        if (window._multiTowerGroup) {
            console.log('Ink Tower group found, checking for intersection...');
            const intersects = raycaster.intersectObjects(window._multiTowerGroup, true);
            console.log('Ink Tower intersects:', intersects.length);
            if (intersects.length > 0) {
                console.log('Ink Tower clicked! Opening tattoo designs...');
                window.open('https://www.3wshs.com/tattoodesigns', '_blank');
                return;
            }
        } else {
            console.log('Ink Tower group not found in window._multiTowerGroup');
        }
        
        // Check for Marketing Hub click
        if (window._octaTowerGroup) {
            console.log('Marketing Hub group found, checking for intersection...');
            const intersects = raycaster.intersectObjects(window._octaTowerGroup, true);
            console.log('Marketing Hub intersects:', intersects.length);
            if (intersects.length > 0) {
                console.log('Marketing Hub clicked! Opening Marketing Hub...');
                window.open('https://www.3wshs.com/marketing', '_blank');
                return;
            }
        } else {
            console.log('Marketing Hub group not found in window._octaTowerGroup');
        }
        
        // Check for Real Estate Hub click
        if (window._cylinderTowerGroup) {
            console.log('Real Estate Hub group found, checking for intersection...');
            const intersects = raycaster.intersectObjects(window._cylinderTowerGroup, true);
            console.log('Real Estate Hub intersects:', intersects.length);
            if (intersects.length > 0) {
                console.log('Real Estate Hub clicked! Opening Real Estate Media...');
                window.open('https://www.3wshs.com/realestatemedia', '_blank');
                return;
            }
        } else {
            console.log('Real Estate Hub group not found in window._cylinderTowerGroup');
        }
        
        // Check for 3WSHS Store click
        if (window._coneTowerGroup) {
            console.log('3WSHS Store group found, checking for intersection...');
            const intersects = raycaster.intersectObjects(window._coneTowerGroup, true);
            console.log('3WSHS Store intersects:', intersects.length);
            if (intersects.length > 0) {
                console.log('3WSHS Store clicked! Opening shop...');
                window.open('https://www.3wshs.com/shop', '_blank');
                return;
            }
        } else {
            console.log('3WSHS Store group not found in window._coneTowerGroup');
        }
    });
}

function addStraightCityRoads() {
    const roadY = 0.051;
    const roadColor = 0x111111;
    const edgeColor = 0xcccccc;
    const dashColor = 0xcccccc;
    const edgeWidth = 0.08;
    const dashWidth = 0.05;
    const dashLength = 1.0;
    const dashGap = 0.7;
    const roadWidth = 2.5;
    const width = 60;
    const depth = 60;

    // Irregularly spaced positions for roads
    const xPositions = [-28, -20, -13, -7, 0, 6, 13, 21, 28];
    const zPositions = [-28, -19, -12, -5, 2, 10, 18, 25, 28];
    const intersectionThreshold = roadWidth / 2 + edgeWidth / 2 + 0.1;

    // Vertical roads
    for (let x of xPositions) {
        // Road surface
        const roadGeo = new THREE.BoxGeometry(roadWidth, 0.03, depth);
        const roadMat = new THREE.MeshStandardMaterial({ color: roadColor });
        const road = new THREE.Mesh(roadGeo, roadMat);
        road.position.set(x, roadY, 0);
        scene.add(road);
        // Edge lines (left/right), but skip at intersections
        for (let side of [-1, 1]) {
            let lastZ = -depth / 2;
            for (let zCross of [...zPositions, depth / 2]) {
                let zStart = lastZ;
                let zEnd = zCross - roadWidth / 2;
                if (zEnd > zStart) {
                    const edgeGeo = new THREE.BoxGeometry(edgeWidth, 0.031, zEnd - zStart);
                    const edgeMat = new THREE.MeshStandardMaterial({ color: edgeColor });
                    const edge = new THREE.Mesh(edgeGeo, edgeMat);
                    edge.position.set(x + side * (roadWidth / 2 - edgeWidth / 2), roadY + 0.001, (zStart + zEnd) / 2);
                    scene.add(edge);
                }
                lastZ = zCross + roadWidth / 2;
            }
        }
        // Dashed center line (skip at intersections)
        for (let z = -depth / 2 + dashLength / 2; z < depth / 2; z += dashLength + dashGap) {
            // Check if this dash is at an intersection
            let isIntersection = false;
            for (let zCross of zPositions) {
                if (Math.abs(z - zCross) < intersectionThreshold) {
                    isIntersection = true;
                    break;
                }
            }
            if (isIntersection) continue;
            const dashGeo = new THREE.BoxGeometry(dashWidth, 0.032, dashLength);
            const dashMat = new THREE.MeshStandardMaterial({ color: dashColor });
            const dash = new THREE.Mesh(dashGeo, dashMat);
            dash.position.set(x, roadY + 0.002, z);
            scene.add(dash);
        }
    }
    // Horizontal roads
    for (let z of zPositions) {
        // Road surface
        const roadGeo = new THREE.BoxGeometry(width, 0.03, roadWidth);
        const roadMat = new THREE.MeshStandardMaterial({ color: roadColor });
        const road = new THREE.Mesh(roadGeo, roadMat);
        road.position.set(0, roadY, z);
        scene.add(road);
        // Edge lines (top/bottom), but skip at intersections
        for (let side of [-1, 1]) {
            let lastX = -width / 2;
            for (let xCross of [...xPositions, width / 2]) {
                let xStart = lastX;
                let xEnd = xCross - roadWidth / 2;
                if (xEnd > xStart) {
                    const edgeGeo = new THREE.BoxGeometry(xEnd - xStart, 0.031, edgeWidth);
                    const edgeMat = new THREE.MeshStandardMaterial({ color: edgeColor });
                    const edge = new THREE.Mesh(edgeGeo, edgeMat);
                    edge.position.set((xStart + xEnd) / 2, roadY + 0.001, z + side * (roadWidth / 2 - edgeWidth / 2));
                    scene.add(edge);
                }
                lastX = xCross + roadWidth / 2;
            }
        }
        // Dashed center line (skip at intersections)
        for (let x = -width / 2 + dashLength / 2; x < width / 2; x += dashLength + dashGap) {
            // Check if this dash is at an intersection
            let isIntersection = false;
            for (let xCross of xPositions) {
                if (Math.abs(x - xCross) < intersectionThreshold) {
                    isIntersection = true;
                    break;
                }
            }
            if (isIntersection) continue;
            const dashGeo = new THREE.BoxGeometry(dashLength, 0.032, dashWidth);
            const dashMat = new THREE.MeshStandardMaterial({ color: dashColor });
            const dash = new THREE.Mesh(dashGeo, dashMat);
            dash.position.set(x, roadY + 0.002, z);
            scene.add(dash);
        }
    }
}

function addStreetLamps() {
    // Use the same road positions as addStraightCityRoads
    const roadLampY = 2.2;
    const poleHeight = 2.2;
    const poleRadius = 0.07;
    const lampRadius = 0.18;
    const lampColor = 0xffffff;
    const cityWidth = 60;
    const cityDepth = 60;
    const parkCenter = { x: 0, z: 0 };
    const parkWidth = 10;
    const parkDepth = 10;
    // Road positions (should match addStraightCityRoads)
    const xPositions = [-28, -20, -13, -7, 0, 6, 13, 21, 28];
    const zPositions = [-28, -19, -12, -5, 2, 10, 18, 25, 28];
    // Place lamps along vertical roads
    for (let x of xPositions) {
        for (let z = -cityDepth / 2 + 2; z < cityDepth / 2; z += 6) {
            // Avoid park area
            if (
                x > parkCenter.x - parkWidth / 2 && x < parkCenter.x + parkWidth / 2 &&
                z > parkCenter.z - parkDepth / 2 && z < parkCenter.z + parkDepth / 2
            ) continue;
            // Gridded base (white wireframe)
            const baseGeo = new THREE.CylinderGeometry(poleRadius * 1.7, poleRadius * 1.7, 0.22, 12, 1, true);
            const baseMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
            const base = new THREE.Mesh(baseGeo, baseMat);
            base.position.set(x - 1.2, 0.11, z);
            scene.add(base);
            // Pole
            const poleGeo = new THREE.CylinderGeometry(poleRadius, poleRadius, poleHeight, 8);
            const poleMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
            const pole = new THREE.Mesh(poleGeo, poleMat);
            pole.position.set(x - 1.2, poleHeight / 2, z);
            scene.add(pole);
            // Lamp head
            const lampGeo = new THREE.SphereGeometry(lampRadius, 12, 12);
            const lampMat = new THREE.MeshStandardMaterial({ color: lampColor, emissive: lampColor, emissiveIntensity: 3 });
            const lamp = new THREE.Mesh(lampGeo, lampMat);
            lamp.position.set(x - 1.2, poleHeight + lampRadius * 0.7, z);
            scene.add(lamp);
        }
    }
    // Place lamps along horizontal roads
    for (let z of zPositions) {
        for (let x = -cityWidth / 2 + 2; x < cityWidth / 2; x += 6) {
            // Avoid park area
            if (
                x > parkCenter.x - parkWidth / 2 && x < parkCenter.x + parkWidth / 2 &&
                z > parkCenter.z - parkDepth / 2 && z < parkCenter.z + parkDepth / 2
            ) continue;
            // Gridded base (white wireframe)
            const baseGeo = new THREE.CylinderGeometry(poleRadius * 1.7, poleRadius * 1.7, 0.22, 12, 1, true);
            const baseMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
            const base = new THREE.Mesh(baseGeo, baseMat);
            base.position.set(x, 0.11, z - 1.2);
            scene.add(base);
            // Pole
            const poleGeo = new THREE.CylinderGeometry(poleRadius, poleRadius, poleHeight, 8);
            const poleMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
            const pole = new THREE.Mesh(poleGeo, poleMat);
            pole.position.set(x, poleHeight / 2, z - 1.2);
            scene.add(pole);
            // Lamp head
            const lampGeo = new THREE.SphereGeometry(lampRadius, 12, 12);
            const lampMat = new THREE.MeshStandardMaterial({ color: lampColor, emissive: lampColor, emissiveIntensity: 3 });
            const lamp = new THREE.Mesh(lampGeo, lampMat);
            lamp.position.set(x, poleHeight + lampRadius * 0.7, z - 1.2);
            scene.add(lamp);
        }
    }
}

function addPark(center, width, depth) {
    // Draw a white grid for the park
    const gridGroup = new THREE.Group();
    const gridColor = 0xffffff;
    const gridMaterial = new THREE.LineBasicMaterial({ color: gridColor });
    const gridSpacing = 1;
    // Vertical lines
    for (let x = -width / 2; x <= width / 2; x += gridSpacing) {
        const points = [
            new THREE.Vector3(center.x + x, 0.11, center.z - depth / 2),
            new THREE.Vector3(center.x + x, 0.11, center.z + depth / 2)
        ];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, gridMaterial);
        gridGroup.add(line);
    }
    // Horizontal lines
    for (let z = -depth / 2; z <= depth / 2; z += gridSpacing) {
        const points = [
            new THREE.Vector3(center.x - width / 2, 0.11, center.z + z),
            new THREE.Vector3(center.x + width / 2, 0.11, center.z + z)
        ];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, gridMaterial);
        gridGroup.add(line);
    }
    scene.add(gridGroup);
}

function addTrees(cityWidth, cityDepth, spacing, parkCenter, parkWidth, parkDepth, buildingBounds) {
    const numTrees = 40;
    for (let i = 0; i < numTrees; i++) {
        // Place trees randomly but not in the center or park
        const x = (Math.random() - 0.5) * cityWidth * spacing * 0.9;
        const z = (Math.random() - 0.5) * cityDepth * spacing * 0.9;
        // Avoid placing trees too close to the center or inside the park
        if (
            (Math.abs(x) < 4 && Math.abs(z) < 4) ||
            (x > parkCenter.x - parkWidth / 2 && x < parkCenter.x + parkWidth / 2 &&
             z > parkCenter.z - parkDepth / 2 && z < parkCenter.z + parkDepth / 2)
        ) continue;
        // Avoid placing trees inside any building
        let inBuilding = false;
        for (const b of buildingBounds) {
            if (Math.abs(x - b.x) < b.half + 0.7 && Math.abs(z - b.z) < b.half + 0.7) {
                inBuilding = true;
                break;
            }
        }
        if (inBuilding) continue;
        // Trunk (white wireframe)
        const trunkGeo = new THREE.CylinderGeometry(0.2, 0.3, 1.5, 12, 1, true);
        const trunkMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
        const trunk = new THREE.Mesh(trunkGeo, trunkMat);
        trunk.position.set(x, 0.75, z);
        // Foliage (white wireframe)
        const foliageGeo = new THREE.SphereGeometry(0.9, 12, 12);
        const foliageMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
        const foliage = new THREE.Mesh(foliageGeo, foliageMat);
        foliage.position.set(x, 1.7, z);
        scene.add(trunk);
        scene.add(foliage);
    }
}

function addParkTrees(center, width, depth, numTrees) {
    const gridRows = Math.ceil(Math.sqrt(numTrees));
    const gridCols = gridRows;
    const xStart = center.x - width / 2 + 1.5;
    const zStart = center.z - depth / 2 + 1.5;
    const xStep = (width - 3) / (gridCols - 1);
    const zStep = (depth - 3) / (gridRows - 1);
    let count = 0;
    for (let row = 0; row < gridRows; row++) {
        for (let col = 0; col < gridCols; col++) {
            if (count++ >= numTrees) return;
            const x = xStart + col * xStep;
            const z = zStart + row * zStep;
            // Trunk (white wireframe)
            const trunkGeo = new THREE.CylinderGeometry(0.2, 0.3, 1.5, 12, 1, true);
            const trunkMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
            const trunk = new THREE.Mesh(trunkGeo, trunkMat);
            trunk.position.set(x, 0.75, z);
            // Foliage (white wireframe)
            const foliageGeo = new THREE.SphereGeometry(0.9, 12, 12);
            const foliageMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
            const foliage = new THREE.Mesh(foliageGeo, foliageMat);
            foliage.position.set(x, 1.7, z);
            scene.add(trunk);
            scene.add(foliage);
        }
    }
}

function addGriddedSphere(radius = 50, latLines = 16, lonLines = 32) {
    // Bright white for sci-fi effect
    const gridColor = 0xffffff;
    const gridMaterial = new THREE.LineBasicMaterial({ color: gridColor });
    const group = new THREE.Group();

    // Latitude lines (main bright grid)
    for (let i = 1; i < latLines; i++) {
        const lat = (i / latLines) * Math.PI;
        const r = Math.sin(lat) * radius;
        const y = Math.cos(lat) * radius;
        const points = [];
        for (let j = 0; j <= lonLines; j++) {
            const lon = (j / lonLines) * Math.PI * 2;
            const x = Math.cos(lon) * r;
            const z = Math.sin(lon) * r;
            points.push(new THREE.Vector3(x, y, z));
        }
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, gridMaterial);
        group.add(line);
    }
    // Longitude lines (main bright grid)
    for (let i = 0; i < lonLines; i++) {
        const lon = (i / lonLines) * Math.PI * 2;
        const points = [];
        for (let j = 0; j <= latLines; j++) {
            const lat = (j / latLines) * Math.PI;
            const r = Math.sin(lat) * radius;
            const y = Math.cos(lat) * radius;
            const x = Math.cos(lon) * r;
            const z = Math.sin(lon) * r;
            points.push(new THREE.Vector3(x, y, z));
        }
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, gridMaterial);
        group.add(line);
    }

    // Simulate glow: add a larger, more transparent grid
    const glowColor = 0xffffff;
    const glowMaterial = new THREE.LineBasicMaterial({ color: glowColor, transparent: true, opacity: 0.25 });
    const glowRadius = radius * 1.03;
    // Latitude lines (glow)
    for (let i = 1; i < latLines; i++) {
        const lat = (i / latLines) * Math.PI;
        const r = Math.sin(lat) * glowRadius;
        const y = Math.cos(lat) * glowRadius;
        const points = [];
        for (let j = 0; j <= lonLines; j++) {
            const lon = (j / lonLines) * Math.PI * 2;
            const x = Math.cos(lon) * r;
            const z = Math.sin(lon) * r;
            points.push(new THREE.Vector3(x, y, z));
        }
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, glowMaterial);
        group.add(line);
    }
    // Longitude lines (glow)
    for (let i = 0; i < lonLines; i++) {
        const lon = (i / lonLines) * Math.PI * 2;
        const points = [];
        for (let j = 0; j <= latLines; j++) {
            const lat = (j / latLines) * Math.PI;
            const r = Math.sin(lat) * glowRadius;
            const y = Math.cos(lat) * glowRadius;
            const x = Math.cos(lon) * r;
            const z = Math.sin(lon) * r;
            points.push(new THREE.Vector3(x, y, z));
        }
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, glowMaterial);
        group.add(line);
    }

    group.position.y = 0;
    scene.add(group);
    window._cityDome = group;
}

function addStarsBeyondDome(numStars = 1200, innerRadius = 20, outerRadius = 400) {
    const positions = [];
    for (let i = 0; i < numStars; i++) {
        // Random spherical coordinates
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = innerRadius + Math.random() * (outerRadius - innerRadius);
        const x = Math.sin(phi) * Math.cos(theta) * r;
        const y = Math.cos(phi) * r;
        const z = Math.sin(phi) * Math.sin(theta) * r;
        positions.push(x, y, z);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.45, sizeAttenuation: true });
    const stars = new THREE.Points(geometry, material);
    scene.add(stars);
}

function addSurroundingMountains() {
    const segments = 64;
    const outerRadius = 38;
    const innerRadius = 32;
    const minHeight = 7;
    const maxHeight = 18;
    const baseY = 0.01;
    // Generate outer and inner rings of mountain points
    const outerPoints = [];
    const innerPoints = [];
    for (let i = 0; i < segments; i++) {
        const angle = (i / segments) * Math.PI * 2;
        const rOuter = outerRadius + Math.random() * 2.5;
        const rInner = innerRadius + Math.random() * 2.5;
        const hOuter = minHeight + Math.random() * (maxHeight - minHeight);
        const hInner = minHeight + Math.random() * (maxHeight - minHeight) * 0.7;
        outerPoints.push({
            x: Math.cos(angle) * rOuter,
            y: hOuter,
            z: Math.sin(angle) * rOuter
        });
        innerPoints.push({
            x: Math.cos(angle) * rInner,
            y: hInner,
            z: Math.sin(angle) * rInner
        });
    }
    // Build geometry for a thick mountain band
    const positions = [];
    const indices = [];
    // Top faces (between outer and inner rings)
    for (let i = 0; i < segments; i++) {
        const next = (i + 1) % segments;
        const v0 = outerPoints[i];
        const v1 = outerPoints[next];
        const v2 = innerPoints[next];
        const v3 = innerPoints[i];
        const baseIdx = positions.length / 3;
        positions.push(v0.x, v0.y, v0.z);
        positions.push(v1.x, v1.y, v1.z);
        positions.push(v2.x, v2.y, v2.z);
        positions.push(v3.x, v3.y, v3.z);
        indices.push(baseIdx, baseIdx + 1, baseIdx + 2);
        indices.push(baseIdx, baseIdx + 2, baseIdx + 3);
    }
    // Outer wall faces
    for (let i = 0; i < segments; i++) {
        const next = (i + 1) % segments;
        const v0 = outerPoints[i];
        const v1 = outerPoints[next];
        const v2 = { x: v1.x, y: baseY, z: v1.z };
        const v3 = { x: v0.x, y: baseY, z: v0.z };
        const baseIdx = positions.length / 3;
        positions.push(v0.x, v0.y, v0.z);
        positions.push(v1.x, v1.y, v1.z);
        positions.push(v2.x, v2.y, v2.z);
        positions.push(v3.x, v3.y, v3.z);
        indices.push(baseIdx, baseIdx + 1, baseIdx + 2);
        indices.push(baseIdx, baseIdx + 2, baseIdx + 3);
    }
    // Inner wall faces
    for (let i = 0; i < segments; i++) {
        const next = (i + 1) % segments;
        const v0 = innerPoints[i];
        const v1 = innerPoints[next];
        const v2 = { x: v1.x, y: baseY, z: v1.z };
        const v3 = { x: v0.x, y: baseY, z: v0.z };
        const baseIdx = positions.length / 3;
        positions.push(v0.x, v0.y, v0.z);
        positions.push(v1.x, v1.y, v1.z);
        positions.push(v2.x, v2.y, v2.z);
        positions.push(v3.x, v3.y, v3.z);
        indices.push(baseIdx, baseIdx + 1, baseIdx + 2);
        indices.push(baseIdx, baseIdx + 2, baseIdx + 3);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    // Black solid mountain band
    const mat = new THREE.MeshStandardMaterial({ color: 0x000000, flatShading: true });
    const mesh = new THREE.Mesh(geometry, mat);
    scene.add(mesh);
    // White edge lines
    const edgeGeo = new THREE.EdgesGeometry(geometry);
    const edgeMat = new THREE.LineBasicMaterial({ color: 0xffffff });
    const edge = new THREE.LineSegments(edgeGeo, edgeMat);
    scene.add(edge);
}

function addOuterGriddedTrees() {
    const cityRadius = 30;
    const outerRadius = 44;
    const numClusters = 18;
    const treesPerCluster = 4 + Math.floor(Math.random() * 3);
    for (let i = 0; i < numClusters; i++) {
        const angle = (i / numClusters) * Math.PI * 2 + Math.random() * 0.2;
        const clusterRadius = cityRadius + 4 + Math.random() * (outerRadius - cityRadius - 6);
        for (let j = 0; j < treesPerCluster; j++) {
            const offsetAngle = angle + (Math.random() - 0.5) * 0.18;
            const r = clusterRadius + (Math.random() - 0.5) * 2.2;
            const x = Math.cos(offsetAngle) * r;
            const z = Math.sin(offsetAngle) * r;
            // Trunk (white wireframe)
            const trunkGeo = new THREE.CylinderGeometry(0.2, 0.3, 1.5, 12, 1, true);
            const trunkMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
            const trunk = new THREE.Mesh(trunkGeo, trunkMat);
            trunk.position.set(x, 0.75, z);
            // Foliage (white wireframe)
            const foliageGeo = new THREE.SphereGeometry(0.9, 12, 12);
            const foliageMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
            const foliage = new THREE.Mesh(foliageGeo, foliageMat);
            foliage.position.set(x, 1.7, z);
            scene.add(trunk);
            scene.add(foliage);
        }
    }
}

function addAnimatedCars() {
    const carLength = 1.1;
    const carWidth = 0.6;
    const carHeight = 0.4;
    const carColor = 0xffffff;
    const cityWidth = 60;
    const cityDepth = 60;
    const xPositions = [-28, -20, -13, -7, 0, 6, 13, 21, 28];
    const zPositions = [-28, -19, -12, -5, 2, 10, 18, 25, 28];
    // Cars on vertical roads
    for (let i = 0; i < 6; i++) {
        const x = xPositions[Math.floor(Math.random() * xPositions.length)];
        const dir = Math.random() < 0.5 ? 1 : -1;
        const zStart = dir === 1 ? -cityDepth / 2 : cityDepth / 2;
        const zEnd = dir === 1 ? cityDepth / 2 : -cityDepth / 2;
        const z = zStart + Math.random() * (zEnd - zStart);
        const mesh = new THREE.Mesh(
            new THREE.BoxGeometry(carWidth, carHeight, carLength),
            new THREE.MeshStandardMaterial({ color: carColor, emissive: carColor, emissiveIntensity: 0.7 })
        );
        mesh.position.set(x, carHeight / 2 + 0.02, z);
        scene.add(mesh);
        carObjects.push({ mesh, axis: 'z', start: zStart, end: zEnd, dir, speed: 0.07 + Math.random() * 0.06 });
    }
    // Cars on horizontal roads
    for (let i = 0; i < 6; i++) {
        const z = zPositions[Math.floor(Math.random() * zPositions.length)];
        const dir = Math.random() < 0.5 ? 1 : -1;
        const xStart = dir === 1 ? -cityWidth / 2 : cityWidth / 2;
        const xEnd = dir === 1 ? cityWidth / 2 : -cityWidth / 2;
        const x = xStart + Math.random() * (xEnd - xStart);
        const mesh = new THREE.Mesh(
            new THREE.BoxGeometry(carLength, carHeight, carWidth),
            new THREE.MeshStandardMaterial({ color: carColor, emissive: carColor, emissiveIntensity: 0.7 })
        );
        mesh.position.set(x, carHeight / 2 + 0.02, z);
        scene.add(mesh);
        carObjects.push({ mesh, axis: 'x', start: xStart, end: xEnd, dir, speed: 0.07 + Math.random() * 0.06 });
    }
}

function addAnimatedSpaceObjects() {
    // Asteroids
    window._spaceAsteroids = [];
    for (let i = 0; i < 5; i++) {
        const asteroidGeo = new THREE.IcosahedronGeometry(2.2 + Math.random() * 1.2, 1);
        // Make it more irregular
        for (let j = 0; j < asteroidGeo.attributes.position.count; j++) {
            const v = asteroidGeo.attributes.position;
            v.setXYZ(j,
                v.getX(j) * (0.8 + Math.random() * 0.5),
                v.getY(j) * (0.8 + Math.random() * 0.5),
                v.getZ(j) * (0.8 + Math.random() * 0.5)
            );
        }
        const asteroidMat = new THREE.MeshStandardMaterial({ color: 0xaaaaaa, flatShading: true, metalness: 0.7, roughness: 0.5, emissive: 0x888888, emissiveIntensity: 0.3 });
        const asteroid = new THREE.Mesh(asteroidGeo, asteroidMat);
        asteroid.position.set(0, 0, 0); // will be animated
        scene.add(asteroid);
        window._spaceAsteroids.push({ mesh: asteroid, orbitRadius: 320 + Math.random() * 60, orbitSpeed: 0.09 + Math.random() * 0.08, orbitPhase: Math.random() * Math.PI * 2, rotSpeed: 0.01 + Math.random() * 0.02 });
    }
    // Satellites
    window._spaceSatellites = [];
    for (let s = 0; s < 3; s++) {
        const satGroup = new THREE.Group();
        const satBody = new THREE.Mesh(
            new THREE.BoxGeometry(1.2, 1.2, 2.7),
            new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.8, roughness: 0.3, emissive: 0x00aaff, emissiveIntensity: 0.5 })
        );
        satGroup.add(satBody);
        // Solar panels
        for (let i = -1; i <= 1; i += 2) {
            const panel = new THREE.Mesh(
                new THREE.BoxGeometry(0.09, 1.2, 3.2),
                new THREE.MeshStandardMaterial({ color: 0x00aaff, emissive: 0x00aaff, emissiveIntensity: 1.5, metalness: 0.7, roughness: 0.2 })
            );
            panel.position.x = i * 0.7;
            satGroup.add(panel);
        }
        satGroup.position.set(0, 0, 0); // will be animated
        scene.add(satGroup);
        window._spaceSatellites.push({ group: satGroup, orbitRadius: 360 + Math.random() * 30, orbitSpeed: 0.07 + Math.random() * 0.04, orbitPhase: Math.random() * Math.PI * 2 });
    }
    // Spaceships
    window._spaceShips = [];
    for (let s = 0; s < 2; s++) {
        const shipGroup = new THREE.Group();
        const shipBody = new THREE.Mesh(
            new THREE.CylinderGeometry(0.42, 1.1, 4.2, 16),
            new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.9, roughness: 0.2, emissive: 0x2222ff, emissiveIntensity: 1.2 })
        );
        shipBody.rotation.z = Math.PI / 2;
        shipGroup.add(shipBody);
        const shipNose = new THREE.Mesh(
            new THREE.ConeGeometry(0.5, 1.2, 16),
            new THREE.MeshStandardMaterial({ color: 0x00ffff, emissive: 0x00ffff, emissiveIntensity: 2.2 })
        );
        shipNose.position.x = 2.1;
        shipNose.rotation.z = Math.PI / 2;
        shipGroup.add(shipNose);
        shipGroup.position.set(0, 0, 0); // will be animated
        scene.add(shipGroup);
        window._spaceShips.push({ group: shipGroup, orbitRadius: 390 + Math.random() * 40, orbitSpeed: 0.06 + Math.random() * 0.03, orbitPhase: Math.random() * Math.PI * 2 });
    }
}

function addSecondDome() {
    // Place the new dome far from the city
    const domeCenter = { x: 0, y: 0, z: -180 };
    const domeRadius = 18;
    // Gridded sphere (like city dome, but white and transparent)
    const gridColor = 0xffffff;
    const gridMaterial = new THREE.LineBasicMaterial({ color: gridColor, transparent: false, opacity: 1, linewidth: 1 });
    const group = new THREE.Group();
    const latLines = 16, lonLines = 32;
    for (let i = 1; i < latLines; i++) {
        const lat = (i / latLines) * Math.PI;
        const r = Math.sin(lat) * domeRadius;
        const y = Math.cos(lat) * domeRadius;
        const points = [];
        for (let j = 0; j <= lonLines; j++) {
            const lon = (j / lonLines) * Math.PI * 2;
            const x = Math.cos(lon) * r;
            const z = Math.sin(lon) * r;
            points.push(new THREE.Vector3(domeCenter.x + x, domeCenter.y + y, domeCenter.z + z));
        }
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, gridMaterial);
        group.add(line);
    }
    for (let i = 0; i < lonLines; i++) {
        const lon = (i / lonLines) * Math.PI * 2;
        const points = [];
        for (let j = 0; j <= latLines; j++) {
            const lat = (j / latLines) * Math.PI;
            const r = Math.sin(lat) * domeRadius;
            const y = Math.cos(lat) * domeRadius;
            const x = Math.cos(lon) * r;
            const z = Math.sin(lon) * r;
            points.push(new THREE.Vector3(domeCenter.x + x, domeCenter.y + y, domeCenter.z + z));
        }
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, gridMaterial);
        group.add(line);
    }
    group.position.set(0, 0, 0);
    group.userData.isTeleportDome = true;
    group.userData.domeCenter = domeCenter;
    scene.add(group);
    window._secondDome = group;
    // --- Place white wireframe palm trees around temples and mountains ---
    // (Removed palm tree loading and placement code)
}

function setupTeleportRaycast() {
    window.addEventListener('mousedown', (event) => {
        // Only left click
        if (event.button !== 0) return;
        // Only teleport if not already inside the second dome
        if (camera.position.z < -120) return;
        const rect = renderer.domElement.getBoundingClientRect();
        const mouse = new THREE.Vector2(
            ((event.clientX - rect.left) / rect.width) * 2 - 1,
            -((event.clientY - rect.top) / rect.height) * 2 + 1
        );
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObject(window._secondDome, true);
        if (intersects.length > 0) {
            // Start teleport
            teleportFrom = camera.position.clone();
            teleportTo = new THREE.Vector3(0, 8, -180); // inside the new dome
            teleportProgress = 0;
            teleportTarget = 'secondDome';
        }
    });
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    // Animate billboard flashing
    const time = performance.now() * 0.002;
    for (const bb of billboardMeshes) {
        if (bb.material && bb.material.emissiveIntensity !== undefined) {
            // Flashing effect: strong pulse
            bb.material.emissiveIntensity = 0.2 + Math.abs(Math.sin(time * 2 + bb.position.x + bb.position.z)) * 4.0;
        }
    }
    // Animate cars
    for (const car of carObjects) {
        if (car.axis === 'z') {
            car.mesh.position.z += car.dir * car.speed;
            if ((car.dir === 1 && car.mesh.position.z > car.end) || (car.dir === -1 && car.mesh.position.z < car.end)) {
                car.mesh.position.z = car.start;
            }
        } else {
            car.mesh.position.x += car.dir * car.speed;
            if ((car.dir === 1 && car.mesh.position.x > car.end) || (car.dir === -1 && car.mesh.position.x < car.end)) {
                car.mesh.position.x = car.start;
            }
        }
    }
    // Animate rotating futuristic sphere tip
    if (window._futuristicSphere) {
        window._futuristicSphere.gridGroup.rotation.y += 0.02;
        window._futuristicSphere.gridGroup.rotation.x = Math.sin(time) * 0.2;
    }
    // Animate diamond (octahedron) rotation
    if (window._diamondMesh && window._diamondOutline) {
        window._diamondMesh.rotation.y += 0.02;
        window._diamondOutline.rotation.y += 0.02;
    }
    // Animate stacked white rings on cylinder tower
    if (window._cylinderRingMeshes && Array.isArray(window._cylinderRingMeshes)) {
        // Use the same t for all rings, slow speed
        const t = (Math.sin(time * 0.7) + 1) / 2; // 0 to 1, slower
        for (const ring of window._cylinderRingMeshes) {
            if (ring && typeof ring.userData.ringMin === 'number' && typeof ring.userData.ringMax === 'number') {
                // Animate the center of the stack, then apply offset
                const baseY = ring.userData.ringMin + t * (ring.userData.ringMax - ring.userData.ringMin);
                ring.position.y = baseY + ring.userData.offset;
            }
        }
    }
    // Animate rotating gridded ring on cylinder roof
    if (window._cylinderGridRing) {
        window._cylinderGridRing.rotation.y += 0.03;
    }
    // Animate glass tower light ring
    if (window._glassTowerMeshes && window._glassTowerMeshes.length > 0) {
        // Find the light ring in the scene (it's stored as accentMesh)
        scene.children.forEach(child => {
            if (child.userData && child.userData.rotationSpeed) {
                child.rotation.y += child.userData.rotationSpeed;
            }
        });
    }
    // Animate space asteroids
    if (window._spaceAsteroids) {
        const t = performance.now() * 0.00025;
        for (const a of window._spaceAsteroids) {
            const angle = t * a.orbitSpeed + a.orbitPhase;
            a.mesh.position.set(Math.cos(angle) * a.orbitRadius, Math.sin(angle * 0.7) * 8 + 10, Math.sin(angle) * a.orbitRadius);
            a.mesh.rotation.x += a.rotSpeed;
            a.mesh.rotation.y += a.rotSpeed * 1.3;
        }
    }
    // Animate satellites
    if (window._spaceSatellites) {
        const t = performance.now() * 0.00022;
        for (const sat of window._spaceSatellites) {
            const angle = t * sat.orbitSpeed + sat.orbitPhase;
            sat.group.position.set(Math.cos(angle) * sat.orbitRadius, Math.sin(angle * 0.8) * 18 + 24, Math.sin(angle) * sat.orbitRadius);
            sat.group.rotation.y = angle + Math.PI / 2;
        }
    }
    // Animate spaceships
    if (window._spaceShips) {
        const t = performance.now() * 0.00019;
        for (const ship of window._spaceShips) {
            const angle = t * ship.orbitSpeed + ship.orbitPhase;
            ship.group.position.set(Math.cos(angle) * ship.orbitRadius, Math.sin(angle * 0.6) * 28 + 32, Math.sin(angle) * ship.orbitRadius);
            ship.group.rotation.y = angle - Math.PI / 2;
        }
    }
    // Animate teleport camera
    if (teleportTarget && teleportFrom && teleportTo) {
        teleportProgress += 0.018;
        if (teleportProgress >= 1) {
            if (teleportTarget === 'secondDome') {
                camera.position.set(0, 8, -158);
                controls.target.set(0, 5, -180);
            } else if (teleportTarget === 'cityDome') {
                camera.position.set(20, 25, 30);
                controls.target.set(0, 5, 0);
            }
            controls.update();
            teleportTarget = null;
            teleportFrom = null;
            teleportTo = null;
        } else {
            camera.position.lerpVectors(teleportFrom, teleportTo, Math.sin(teleportProgress * Math.PI / 2));
        }
        if (teleportTarget === 'secondDome') {
            camera.lookAt(0, 5, -180);
            controls.target.set(0, 5, -180);
        } else if (teleportTarget === 'cityDome') {
            camera.lookAt(0, 5, 0);
            controls.target.set(0, 5, 0);
        }
        controls.update();
    }
    // Show jungle scene if inside second dome, hide city objects
    if (camera.position.z < -120) {
        setJungleSceneVisibility(true);
        // Optionally hide city objects here if you want
    } else {
        setJungleSceneVisibility(false);
    }
    // Billboard and float building labels
    if (window._buildingLabels) {
        for (const label of window._buildingLabels) {
            // Billboard: always face the camera
            label.lookAt(camera.position);
            // Floating animation
            const t = performance.now() * 0.001;
            label.position.y = label.userData.baseY + Math.sin(t * 1.2) * 0.45;
        }
    }
    if (window._bloomComposer) {
        // Render bloom only for layer 1
        const oldBg = scene.background;
        camera.layers.set(1);
        window._bloomComposer.render();
        // Render the rest of the scene (no bloom)
        camera.layers.set(0);
        renderer.render(scene, camera);
        scene.background = oldBg;
    } else {
    renderer.render(scene, camera);
    }

    if (window._mainTowerMeshes && window._mainTowerMeshes.length > 0) {
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(window._mainTowerMeshes, false);
        if (lastHoveredGroup && (!intersects.length || !window._mainTowerMeshToGroup.get(intersects[0].object) || window._mainTowerMeshToGroup.get(intersects[0].object) !== lastHoveredGroup)) {
            // Restore previous group
            for (const m of lastHoveredGroup) {
                if (m.material && m.material.emissiveIntensity !== undefined) {
                    m.material.emissiveIntensity = m.userData.originalEmissiveIntensity || 1.5;
                    if (m.userData.originalEmissiveColor !== undefined) {
                        m.material.emissive.setHex(m.userData.originalEmissiveColor);
                    }
                }
                // Restore gridGroup globe color and wireframe elements
                if (m.type === 'Group' || m instanceof THREE.Group) {
                    m.traverse(child => {
                        if (child.material && child.material.color) {
                            if (child.userData.originalColor !== undefined) {
                                child.material.color.setHex(child.userData.originalColor);
                            }
                        }
                    });
                }
                // Restore wireframe mesh color (for gridRing, dome, etc.)
                if (m.material && m.material.wireframe && m.material.color) {
                    if (m.userData.originalColor !== undefined) {
                        m.material.color.setHex(m.userData.originalColor);
                    }
                }
                m.layers.disable(1); // Only disable bloom layer, keep normal layer
            }
            lastHoveredGroup = null;
        }
        if (intersects.length) {
            const hovered = intersects[0].object;
            const group = window._mainTowerMeshToGroup.get(hovered);
            if (group) {
                for (const m of group) {
                    if (m.material && m.material.emissiveIntensity !== undefined) {
                        if (m.userData.originalEmissiveIntensity === undefined) {
                            m.userData.originalEmissiveIntensity = m.material.emissiveIntensity;
                        }
                        if (m.userData.originalEmissiveColor === undefined) {
                            m.userData.originalEmissiveColor = m.material.emissive.getHex();
                        }
                        m.material.emissiveIntensity = 2.5;
                        m.material.emissive.setHex(0x66ffff);
                    }
                    // Make gridGroup globe lines cyan
                    if (m.type === 'Group' || m instanceof THREE.Group) {
                        m.traverse(child => {
                            if (child.material && child.material.color) {
                                if (child.userData.originalColor === undefined) {
                                    child.userData.originalColor = child.material.color.getHex();
                                }
                                child.material.color.set(0x66ffff);
                            }
                        });
                    }
                    // Make wireframe mesh (gridRing, dome, etc.) cyan
                    if (m.material && m.material.wireframe && m.material.color) {
                        if (m.userData.originalColor === undefined) {
                            m.userData.originalColor = m.material.color.getHex();
                        }
                        m.material.color.set(0x66ffff);
                    }
                    m.layers.enable(1); // Enable bloom layer, keep normal layer
                }
                lastHoveredGroup = group;
            }
        }
    }
    if (window._circuitLines) {
      const t = performance.now() * 0.002;
      for (const c of window._circuitLines) {
        if (c.material && c.material.emissiveIntensity !== undefined) {
          c.material.emissiveIntensity = 1.2 + Math.abs(Math.sin(t * 2 + c.position.x + c.position.y)) * 2.5;
            }
        }
    }
}

function addJungleSceneInSecondDome() {
    // Clear previous jungle objects
    for (const obj of jungleObjects) scene.remove(obj);
    jungleObjects = [];
    const center = { x: 0, y: 0, z: -180 };
    // Black base (ground)
    const baseGeo = new THREE.CircleGeometry(13.5, 64);
    const baseMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const base = new THREE.Mesh(baseGeo, baseMat);
    base.rotation.x = -Math.PI / 2;
    base.position.set(center.x, 0, center.z);
    scene.add(base);
    jungleObjects.push(base);
    // Wavy beach (irregular white disc)
    const beachSegments = 64;
    const wavyBeachRadius = 4.5;
    const beachCenter = { x: center.x - 6.5, y: 0.02, z: center.z };
    // Use fixed random phases for smooth, closed shape
    const phase1 = Math.random() * Math.PI * 2;
    const phase2 = Math.random() * Math.PI * 2;
    const beachShape = new THREE.Shape();
    for (let i = 0; i <= beachSegments; i++) {
        const angle = (i / beachSegments) * Math.PI * 2;
        // Wavy radius with fixed phases
        const wave = Math.sin(angle * 3 + phase1) * 0.35 + Math.cos(angle * 5 + phase2) * 0.18;
        const r = wavyBeachRadius + wave;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        if (i === 0) {
            beachShape.moveTo(x, y);
        } else {
            beachShape.lineTo(x, y);
        }
    }
    const beachGeo = new THREE.ShapeGeometry(beachShape);
    const beachMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const beach = new THREE.Mesh(beachGeo, beachMat);
    beach.rotation.x = -Math.PI / 2;
    beach.position.set(beachCenter.x, beachCenter.y, beachCenter.z);
    scene.add(beach);
    jungleObjects.push(beach);
    // Scattered rocks (small spheres/cylinders)
    for (let i = 0; i < 8; i++) {
        const angle = Math.random() * Math.PI * 2;
        const r = Math.random() * (wavyBeachRadius - 0.7);
        const x = Math.cos(angle) * r + beachCenter.x + (Math.random() - 0.5) * 0.3;
        const z = Math.sin(angle) * r + beachCenter.z + (Math.random() - 0.5) * 0.3;
        if (Math.random() < 0.5) {
            // Sphere rock
            const geo = new THREE.SphereGeometry(0.18 + Math.random() * 0.13, 8, 8);
            const mat = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true });
            const mesh = new THREE.Mesh(geo, mat);
            mesh.position.set(x, 0.13, z);
            scene.add(mesh);
            jungleObjects.push(mesh);
        } else {
            // Cylinder rock (driftwood)
            const geo = new THREE.CylinderGeometry(0.09, 0.13, 0.38 + Math.random() * 0.18, 8, 1, true);
            const mat = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true });
            const mesh = new THREE.Mesh(geo, mat);
            mesh.position.set(x, 0.13, z);
            mesh.rotation.y = Math.random() * Math.PI * 2;
            scene.add(mesh);
            jungleObjects.push(mesh);
        }
    }
    // Clusters of small palm trees near beach edge
    for (let i = 0; i < 5; i++) {
        const angle = Math.random() * Math.PI * 2;
        const r = wavyBeachRadius - 0.5 + Math.random() * 0.7;
        const x = Math.cos(angle) * r + beachCenter.x;
        const z = Math.sin(angle) * r + beachCenter.z;
        // Trunk
        const trunkGeo = new THREE.CylinderGeometry(0.07, 0.09, 1.1 + Math.random() * 0.4, 8, 1, true);
        const trunkMat = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true });
        const trunk = new THREE.Mesh(trunkGeo, trunkMat);
        trunk.position.set(x, 0.55, z);
        // Leaves (wireframe sphere cap)
        const leavesGeo = new THREE.SphereGeometry(0.32 + Math.random() * 0.13, 8, 8, 0, Math.PI * 2, 0, Math.PI / 2);
        const leavesMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
        const leaves = new THREE.Mesh(leavesGeo, leavesMat);
        leaves.position.set(x, 1.1 + Math.random() * 0.13, z);
        scene.add(trunk);
        scene.add(leaves);
        jungleObjects.push(trunk, leaves);
    }
    // Aztec towers (stepped pyramids, more and smaller)
    const numTemples = 12;
    const templeRadius = 6.5;
    for (let i = 0; i < numTemples; i++) {
        // Scatter temples: add more randomness to angle, radius, and position
        const angle = (i / numTemples) * Math.PI * 2 + (Math.random() - 0.5) * 0.5 + Math.PI / 12;
        const r = templeRadius + (Math.random() - 0.5) * 2.2;
        let x = center.x + Math.cos(angle) * r;
        let z = center.z + Math.sin(angle) * r;
        // Add small random offset to x and z
        x += (Math.random() - 0.5) * 1.2;
        z += (Math.random() - 0.5) * 1.2;
        // Skip if temple would overlap the beach
        const distToBeachCenter = Math.sqrt((x - (center.x - 6.5)) ** 2 + (z - center.z) ** 2);
        if (distToBeachCenter < 4.5 + 0.7) continue;
        const base = 0.9 + Math.random() * 0.3;
        const height = 1.2 + Math.random() * 0.3;
        for (let step = 0; step < 4; step++) {
            const stepBase = base * (1 - step * 0.18);
            const stepHeight = height * 0.25;
            const y = step * stepHeight + stepHeight / 2;
            const geo = new THREE.BoxGeometry(stepBase, stepHeight, stepBase);
            const mat = new THREE.MeshBasicMaterial({ color: 0x000000 });
            const mesh = new THREE.Mesh(geo, mat);
            mesh.position.set(x, y, z);
            scene.add(mesh);
            jungleObjects.push(mesh);
            // White wireframe
            const edges = new THREE.EdgesGeometry(geo);
            const lineMat = new THREE.LineBasicMaterial({ color: 0xffffff });
            const line = new THREE.LineSegments(edges, lineMat);
            line.position.set(x, y, z);
            scene.add(line);
            jungleObjects.push(line);
        }
        // --- Add trees around each temple ---
        const treesAroundTemple = 3 + Math.floor(Math.random() * 2);
        for (let t = 0; t < treesAroundTemple; t++) {
            const treeAngle = angle + (t - 1) * 0.18 + (Math.random() - 0.5) * 0.1;
            const treeR = r + 1.1 + Math.random() * 0.7;
            const tx = center.x + Math.cos(treeAngle) * treeR;
            const tz = center.z + Math.sin(treeAngle) * treeR;
            // Skip if tree would overlap the beach
            const treeDistToBeach = Math.sqrt((tx - (center.x - 6.5)) ** 2 + (tz - center.z) ** 2);
            if (treeDistToBeach < 4.5 + 0.3) continue;
            // --- Enhanced tree: trunk + multiple leaf layers ---
            const trunkGeo = new THREE.CylinderGeometry(0.11, 0.15, 1.7 + Math.random() * 0.5, 10, 1, true);
            const trunkMat = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true });
            const trunk = new THREE.Mesh(trunkGeo, trunkMat);
            trunk.position.set(tx, 0.85, tz);
            scene.add(trunk);
            jungleObjects.push(trunk);
            // Add 2–3 leaf layers
            const leafLayers = 2 + Math.floor(Math.random() * 2);
            let leafBaseY = 1.1 + Math.random() * 0.13;
            for (let l = 0; l < leafLayers; l++) {
                const scale = 0.5 + Math.random() * 0.2 - l * 0.13;
                const y = leafBaseY + l * 0.22 + (Math.random() - 0.5) * 0.07;
                const xOff = (Math.random() - 0.5) * 0.08;
                const zOff = (Math.random() - 0.5) * 0.08;
                const leavesGeo = new THREE.SphereGeometry(scale, 8, 8, 0, Math.PI * 2, 0, Math.PI / 2);
            const leavesMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
            const leaves = new THREE.Mesh(leavesGeo, leavesMat);
                leaves.position.set(tx + xOff, y, tz + zOff);
            scene.add(leaves);
                jungleObjects.push(leaves);
            }
        }
    }
    // Mountains (ring around dome) - match city style
    const segments = 32;
    const outerRadius = 15.5;
    const innerRadius = 12.5;
    const minHeight = 2.5;
    const maxHeight = 6.5;
    const baseY = 0.01;
    const outerPoints = [];
    const innerPoints = [];
    for (let i = 0; i < segments; i++) {
        const angle = (i / segments) * Math.PI * 2;
        const rOuter = outerRadius + Math.random() * 1.2;
        const rInner = innerRadius + Math.random() * 1.2;
        const hOuter = minHeight + Math.random() * (maxHeight - minHeight);
        const hInner = minHeight + Math.random() * (maxHeight - minHeight) * 0.7;
        outerPoints.push({
            x: Math.cos(angle) * rOuter,
            y: hOuter,
            z: Math.sin(angle) * rOuter
        });
        innerPoints.push({
            x: Math.cos(angle) * rInner,
            y: hInner,
            z: Math.sin(angle) * rInner
        });
    }
    const positions = [];
    const indices = [];
    // Top faces (between outer and inner rings)
    for (let i = 0; i < segments; i++) {
        const next = (i + 1) % segments;
        const v0 = outerPoints[i];
        const v1 = outerPoints[next];
        const v2 = innerPoints[next];
        const v3 = innerPoints[i];
        const baseIdx = positions.length / 3;
        positions.push(v0.x, v0.y, v0.z);
        positions.push(v1.x, v1.y, v1.z);
        positions.push(v2.x, v2.y, v2.z);
        positions.push(v3.x, v3.y, v3.z);
        indices.push(baseIdx, baseIdx + 1, baseIdx + 2);
        indices.push(baseIdx, baseIdx + 2, baseIdx + 3);
    }
    // Outer wall faces
    for (let i = 0; i < segments; i++) {
        const next = (i + 1) % segments;
        const v0 = outerPoints[i];
        const v1 = outerPoints[next];
        const v2 = { x: v1.x, y: baseY, z: v1.z };
        const v3 = { x: v0.x, y: baseY, z: v0.z };
        const baseIdx = positions.length / 3;
        positions.push(v0.x, v0.y, v0.z);
        positions.push(v1.x, v1.y, v1.z);
        positions.push(v2.x, v2.y, v2.z);
        positions.push(v3.x, v3.y, v3.z);
        indices.push(baseIdx, baseIdx + 1, baseIdx + 2);
        indices.push(baseIdx, baseIdx + 2, baseIdx + 3);
    }
    // Inner wall faces
    for (let i = 0; i < segments; i++) {
        const next = (i + 1) % segments;
        const v0 = innerPoints[i];
        const v1 = innerPoints[next];
        const v2 = { x: v1.x, y: baseY, z: v1.z };
        const v3 = { x: v0.x, y: baseY, z: v0.z };
        const baseIdx = positions.length / 3;
        positions.push(v0.x, v0.y, v0.z);
        positions.push(v1.x, v1.y, v1.z);
        positions.push(v2.x, v2.y, v2.z);
        positions.push(v3.x, v3.y, v3.z);
        indices.push(baseIdx, baseIdx + 1, baseIdx + 2);
        indices.push(baseIdx, baseIdx + 2, baseIdx + 3);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    const mat = new THREE.MeshStandardMaterial({ color: 0x000000, flatShading: true });
    const mesh = new THREE.Mesh(geometry, mat);
    mesh.position.set(center.x, 0, center.z);
        scene.add(mesh);
        jungleObjects.push(mesh);
    // White edge lines
    const edgeGeo = new THREE.EdgesGeometry(geometry);
    const edgeMat = new THREE.LineBasicMaterial({ color: 0xffffff });
    const edge = new THREE.LineSegments(edgeGeo, edgeMat);
    edge.position.set(center.x, 0, center.z);
    scene.add(edge);
    jungleObjects.push(edge);
    // --- Add diverse Aztec buildings (not just temples) ---
    const numAztecBuildings = 8 + Math.floor(Math.random() * 3);
    for (let i = 0; i < numAztecBuildings; i++) {
        // Randomly pick a type
        const type = ['palace', 'tower', 'platform', 'shrine'][Math.floor(Math.random() * 4)];
        // Random position (avoid beach)
        let tries = 0, bx, bz;
        do {
            const angle = Math.random() * Math.PI * 2;
            const r = 5.5 + Math.random() * 6.5;
            bx = center.x + Math.cos(angle) * r + (Math.random() - 0.5) * 1.5;
            bz = center.z + Math.sin(angle) * r + (Math.random() - 0.5) * 1.5;
            const distToBeach = Math.sqrt((bx - (center.x - 6.5)) ** 2 + (bz - center.z) ** 2);
            tries++;
            if (distToBeach > 5.5 || tries > 10) break;
        } while (true);
        let mesh, line;
        if (type === 'palace') {
            // Long rectangular palace
            const geo = new THREE.BoxGeometry(1.7 + Math.random(), 0.6 + Math.random() * 0.3, 0.7 + Math.random() * 0.4);
            mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0x000000 }));
            mesh.position.set(bx, 0.3, bz);
            line = new THREE.LineSegments(new THREE.EdgesGeometry(geo), new THREE.LineBasicMaterial({ color: 0xffffff }));
        line.position.copy(mesh.position);
        } else if (type === 'tower') {
            // Round observatory tower
            const geo = new THREE.CylinderGeometry(0.38 + Math.random() * 0.18, 0.38 + Math.random() * 0.18, 1.1 + Math.random() * 0.5, 16, 1, true);
            mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0x000000 }));
            mesh.position.set(bx, 0.55, bz);
            line = new THREE.LineSegments(new THREE.EdgesGeometry(geo), new THREE.LineBasicMaterial({ color: 0xffffff }));
            line.position.copy(mesh.position);
            // Add dome or cone top
            if (Math.random() < 0.5) {
                const topGeo = new THREE.SphereGeometry(0.38, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2);
                const top = new THREE.Mesh(topGeo, new THREE.MeshBasicMaterial({ color: 0x000000 }));
                top.position.set(bx, 1.1, bz);
                const topLine = new THREE.LineSegments(new THREE.EdgesGeometry(topGeo), new THREE.LineBasicMaterial({ color: 0xffffff }));
                topLine.position.copy(top.position);
                scene.add(top);
                scene.add(topLine);
                jungleObjects.push(top, topLine);
            } else {
                const coneGeo = new THREE.ConeGeometry(0.38, 0.5, 12, 1, true);
                const cone = new THREE.Mesh(coneGeo, new THREE.MeshBasicMaterial({ color: 0x000000 }));
                cone.position.set(bx, 1.2, bz);
                const coneLine = new THREE.LineSegments(new THREE.EdgesGeometry(coneGeo), new THREE.LineBasicMaterial({ color: 0xffffff }));
                coneLine.position.copy(cone.position);
                scene.add(cone);
                scene.add(coneLine);
                jungleObjects.push(cone, coneLine);
            }
        } else if (type === 'platform') {
            // Flat raised platform
            const geo = new THREE.BoxGeometry(1.2 + Math.random() * 0.7, 0.22 + Math.random() * 0.13, 1.2 + Math.random() * 0.7);
            mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0x000000 }));
            mesh.position.set(bx, 0.12, bz);
            line = new THREE.LineSegments(new THREE.EdgesGeometry(geo), new THREE.LineBasicMaterial({ color: 0xffffff }));
            line.position.copy(mesh.position);
            // Add stairs (simple box)
            if (Math.random() < 0.7) {
                const stairGeo = new THREE.BoxGeometry(0.32, 0.13, 0.7);
                const stair = new THREE.Mesh(stairGeo, new THREE.MeshBasicMaterial({ color: 0x000000 }));
                stair.position.set(bx, 0.18, bz - 0.5);
                const stairLine = new THREE.LineSegments(new THREE.EdgesGeometry(stairGeo), new THREE.LineBasicMaterial({ color: 0xffffff }));
                stairLine.position.copy(stair.position);
                scene.add(stair);
                scene.add(stairLine);
                jungleObjects.push(stair, stairLine);
            }
        } else if (type === 'shrine') {
            // Small stepped shrine
            const base = 0.5 + Math.random() * 0.2;
            const height = 0.7 + Math.random() * 0.2;
            for (let s = 0; s < 3; s++) {
                const stepBase = base * (1 - s * 0.18);
                const stepHeight = height * 0.33;
                const y = s * stepHeight + stepHeight / 2;
                const geo = new THREE.BoxGeometry(stepBase, stepHeight, stepBase);
                const meshS = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0x000000 }));
                meshS.position.set(bx, y, bz);
                const lineS = new THREE.LineSegments(new THREE.EdgesGeometry(geo), new THREE.LineBasicMaterial({ color: 0xffffff }));
                lineS.position.copy(meshS.position);
                scene.add(meshS);
                scene.add(lineS);
                jungleObjects.push(meshS, lineS);
            }
        }
        if (mesh && line) {
        scene.add(mesh);
        scene.add(line);
            jungleObjects.push(mesh, line);
        }
    }
    // --- Add clusters of clay house structures (Aztec/Mesoamerican style) ---
    const numHouseClusters = 5 + Math.floor(Math.random() * 3);
    for (let c = 0; c < numHouseClusters; c++) {
        // Cluster center
        const clusterAngle = Math.random() * Math.PI * 2;
        const clusterR = 7 + Math.random() * 5;
        const cx = center.x + Math.cos(clusterAngle) * clusterR;
        const cz = center.z + Math.sin(clusterAngle) * clusterR;
        const housesInCluster = 2 + Math.floor(Math.random() * 3);
        for (let h = 0; h < housesInCluster; h++) {
            // Random offset within cluster
            const ox = (Math.random() - 0.5) * 1.2;
            const oz = (Math.random() - 0.5) * 1.2;
            const bx = cx + ox;
            const bz = cz + oz;
            // Avoid beach
            const distToBeach = Math.sqrt((bx - (center.x - 6.5)) ** 2 + (bz - center.z) ** 2);
            if (distToBeach < 5.2) continue;
            // Clay house: slightly rounded box
            const width = 0.7 + Math.random() * 0.5;
            const depth = 0.7 + Math.random() * 0.5;
            const height = 0.5 + Math.random() * 0.3;
            const geo = new THREE.BoxGeometry(width, height, depth, 2, 2, 2);
            // Slightly round the edges by moving corner vertices
            const pos = geo.attributes.position;
            for (let i = 0; i < pos.count; i++) {
                let x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
                x *= 0.97 + Math.random() * 0.04;
                y *= 0.97 + Math.random() * 0.04;
                z *= 0.97 + Math.random() * 0.04;
                pos.setXYZ(i, x, y, z);
            }
            geo.computeVertexNormals();
            const mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0x000000 }));
            mesh.position.set(bx, height / 2, bz);
            const line = new THREE.LineSegments(new THREE.EdgesGeometry(geo), new THREE.LineBasicMaterial({ color: 0xffffff }));
            line.position.copy(mesh.position);
        scene.add(mesh);
        scene.add(line);
            jungleObjects.push(mesh, line);
        }
    }
    // --- Add large white Aztec pyramid in the center ---
    const pyramidCenter = { x: center.x, z: center.z };
    const pyramidBase = 3.8;
    const pyramidHeight = 2.6;
    const pyramidSteps = 9;
    for (let s = 0; s < pyramidSteps; s++) {
        const stepFrac = 1 - s / pyramidSteps;
        const stepBase = pyramidBase * (0.92 + 0.08 * stepFrac) * (1 - s * 0.07);
        const stepHeight = pyramidHeight / pyramidSteps;
        const y = s * stepHeight + stepHeight / 2;
        const geo = new THREE.BoxGeometry(stepBase, stepHeight, stepBase);
        const mat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(pyramidCenter.x, y, pyramidCenter.z);
        scene.add(mesh);
        jungleObjects.push(mesh);
        // White wireframe
        const edges = new THREE.EdgesGeometry(geo);
        const lineMat = new THREE.LineBasicMaterial({ color: 0xffffff });
        const line = new THREE.LineSegments(edges, lineMat);
        line.position.set(pyramidCenter.x, y, pyramidCenter.z);
        scene.add(line);
        jungleObjects.push(line);
    }
    // Central staircase (as a sloped box)
    const stairWidth = pyramidBase * 0.22;
    const stairHeight = pyramidHeight * 0.98;
    const stairDepth = pyramidBase * 1.01;
        const stairGeo = new THREE.BoxGeometry(stairWidth, stairHeight, stairDepth);
    stairGeo.translate(0, stairHeight / 2 - pyramidHeight / 2, 0);
        const stairMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const stair = new THREE.Mesh(stairGeo, stairMat);
    stair.position.set(pyramidCenter.x, stairHeight / 2, pyramidCenter.z - pyramidBase * 0.39);
    stair.rotation.x = Math.PI / 2.1;
        scene.add(stair);
        jungleObjects.push(stair);
        const stairEdges = new THREE.EdgesGeometry(stairGeo);
    const stairLine = new THREE.LineSegments(stairEdges, new THREE.LineBasicMaterial({ color: 0xffffff }));
        stairLine.position.copy(stair.position);
    stairLine.rotation.copy(stair.rotation);
        scene.add(stairLine);
        jungleObjects.push(stairLine);
    // Small temple on top
    const topBase = pyramidBase * 0.32;
    const topHeight = pyramidHeight * 0.22;
    const topGeo = new THREE.BoxGeometry(topBase, topHeight, topBase * 0.7);
    const topMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const topMesh = new THREE.Mesh(topGeo, topMat);
    topMesh.position.set(pyramidCenter.x, pyramidHeight + topHeight / 2, pyramidCenter.z);
    scene.add(topMesh);
    jungleObjects.push(topMesh);
    const topEdges = new THREE.EdgesGeometry(topGeo);
    const topLine = new THREE.LineSegments(topEdges, new THREE.LineBasicMaterial({ color: 0xffffff }));
    topLine.position.copy(topMesh.position);
    scene.add(topLine);
    jungleObjects.push(topLine);
}

function setJungleSceneVisibility(visible) {
    for (const obj of jungleObjects) obj.visible = visible;
}

// Make the city dome clickable for teleport-back
function addCityDomeClickable() {
    // Only left click
    window.addEventListener('mousedown', (event) => {
        // Only left click
        if (event.button !== 0) return;
        // Only teleport if inside the second dome
        if (camera.position.z > -60) return;
        const rect = renderer.domElement.getBoundingClientRect();
        const mouse = new THREE.Vector2(
            ((event.clientX - rect.left) / rect.width) * 2 - 1,
            -((event.clientY - rect.top) / rect.height) * 2 + 1
        );
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObject(window._cityDome, true);
        if (intersects.length > 0) {
            // Start teleport back
            teleportFrom = camera.position.clone();
            teleportTo = new THREE.Vector3(20, 25, 30); // city camera position
            teleportProgress = 0;
            teleportTarget = 'cityDome';
        }
    });
}

let currentCleanup = null;

function createCityScene(container) {
  if (currentCleanup) currentCleanup();
  // Remove previous children
  while (container.firstChild) container.removeChild(container.firstChild);

  // Scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000); // pure black
  scene.fog = null;

  // Camera
  camera = new THREE.PerspectiveCamera(
    60,
    container.offsetWidth / container.offsetHeight,
    0.1,
    2000
  );
  camera.position.set(20, 25, 30);
  camera.lookAt(0, 0, 0);

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  container.appendChild(renderer.domElement);

  // OrbitControls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 5, 0);
  controls.update();

  // Ensure correct size on first load
  onWindowResize();

  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);
  const dirLight = new THREE.DirectionalLight(0x88aaff, 1);
  dirLight.position.set(20, 40, 20);
  scene.add(dirLight);
  const sciFiLight = new THREE.PointLight(0x00ffff, 1, 100);
  sciFiLight.position.set(0, 30, 0);
  scene.add(sciFiLight);

  // Ground plane
  const groundGeo = new THREE.PlaneGeometry(60, 60);
  const groundMat = new THREE.MeshStandardMaterial({ color: 0x000000 });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = 0;
  ground.receiveShadow = true;
  scene.add(ground);

  // Park parameters
  const parkCenter = { x: 0, z: 0 };
  const parkWidth = 10;
  const parkDepth = 10;

  // Add city features
  addStraightCityRoads();
  addStreetLamps();
  addAnimatedCars();
  addPark(parkCenter, parkWidth, parkDepth);

  // City buildings
  const cityWidth = 10;
  const cityDepth = 10;
  const spacing = 4;
  const buildingBounds = [];
  for (let x = -cityWidth / 2; x < cityWidth / 2; x++) {
    for (let z = -cityDepth / 2; z < cityDepth / 2; z++) {
      if (
        x * spacing > parkCenter.x - parkWidth / 2 &&
        x * spacing < parkCenter.x + parkWidth / 2 &&
        z * spacing > parkCenter.z - parkDepth / 2 &&
        z * spacing < parkCenter.z + parkDepth / 2
      ) {
        continue;
      }
      const height = Math.random() * 8 + 2;
      const buildingMat = new THREE.MeshStandardMaterial({ color: 0x000000 });
      const buildingGeo = new THREE.BoxGeometry(2, height, 2);
      const building = new THREE.Mesh(buildingGeo, buildingMat);
      building.position.set(x * spacing, height / 2, z * spacing);
      building.castShadow = true;
      building.receiveShadow = true;
      scene.add(building);
      if (buildingMat.color.getHex() === 0xffffff) {
        const whiteEdges = new THREE.EdgesGeometry(buildingGeo);
        const whiteOutline = new THREE.LineSegments(whiteEdges, new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 3 }));
        whiteOutline.position.copy(building.position);
        scene.add(whiteOutline);
      }
      buildingBounds.push({
        x: x * spacing,
        z: z * spacing,
        half: 1.1
      });
      const windowRows = Math.floor(height / 1.2);
      const windowCols = 2 + Math.floor(Math.random() * 2);
      const windowWidth = 0.25;
      const windowHeight = 0.4;
      const windowDepth = 0.06;
      const windowColor = 0xffffff;
      const buildingHalf = 1;
      for (let side = 0; side < 4; side++) {
        let angle = side * Math.PI / 2;
        let dx = Math.cos(angle);
        let dz = Math.sin(angle);
        for (let row = 0; row < windowRows; row++) {
          for (let col = 0; col < windowCols; col++) {
            if (Math.random() < 0.25) continue;
            let y = 0.7 + row * (height - 1.4) / Math.max(1, windowRows - 1);
            let offset = (windowCols - 1) / 2;
            let faceOffset = buildingHalf - windowDepth / 2 + 0.001;
            let wx = building.position.x + dx * faceOffset + dz * (col - offset) * 0.7;
            let wz = building.position.z + dz * faceOffset + dx * (col - offset) * 0.7;
            let wy = y;
            const winGeo = new THREE.BoxGeometry(windowWidth, windowHeight, windowDepth);
            const winMat = new THREE.MeshBasicMaterial({ color: windowColor, emissive: windowColor, emissiveIntensity: 1 });
            const win = new THREE.Mesh(winGeo, winMat);
            win.position.set(wx, wy, wz);
            win.rotation.y = angle;
            scene.add(win);
          }
        }
      }
      if (Math.random() < 0.18) {
        const billboardSides = [0, 1, 2, 3];
        const side = billboardSides[Math.floor(Math.random() * billboardSides.length)];
        let angle = side * Math.PI / 2;
        let dx = Math.cos(angle);
        let dz = Math.sin(angle);
        const bbWidth = 1.2 + Math.random() * 0.8;
        let bbHeight = Math.max(1.2, height * 0.45 + Math.random() * 0.5);
        bbHeight = Math.min(bbHeight, height - 0.3);
        const bbDepth = 0.08;
        let faceOffset = buildingHalf + bbDepth / 2 - 0.002;
        const bbGeo = new THREE.BoxGeometry(bbWidth, bbHeight, bbDepth);
        const bbMat = new THREE.MeshStandardMaterial({ color: 0x111111, emissive: 0xffffff, emissiveIntensity: 2 });
        const bb = new THREE.Mesh(bbGeo, bbMat);
        const bbY = building.position.y;
        const bbX = building.position.x + dx * faceOffset;
        const bbZ = building.position.z + dz * faceOffset;
        bb.position.set(bbX, bbY, bbZ);
        bb.rotation.y = angle + Math.PI / 2;
        scene.add(bb);
        billboardMeshes.push(bb);
      }
      if (Math.random() < 0.13) {
        const rbWidth = 1.2 + Math.random() * 1.2;
        const rbHeight = 0.38 + Math.random() * 0.32;
        const rbDepth = 0.12;
        const rbGeo = new THREE.BoxGeometry(rbWidth, rbHeight, rbDepth);
        const rbMat = new THREE.MeshStandardMaterial({ color: 0x111111, emissive: 0xffffff, emissiveIntensity: 2 });
        const rb = new THREE.Mesh(rbGeo, rbMat);
        rb.position.set(building.position.x, building.position.y + height / 2 + rbHeight / 2 + 0.08, building.position.z);
        rb.rotation.y = Math.random() * Math.PI * 2;
        scene.add(rb);
        billboardMeshes.push(rb);
      }
      const blackEdges = new THREE.EdgesGeometry(buildingGeo);
      const blackLineMat = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 3 });
      const blackLine = new THREE.LineSegments(blackEdges, blackLineMat);
      blackLine.position.copy(building.position);
      scene.add(blackLine);
      const edges = new THREE.EdgesGeometry(buildingGeo);
      const lineMat = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 1 });
      const line = new THREE.LineSegments(edges, lineMat);
      line.position.copy(building.position);
      scene.add(line);
      // Add a door to the front face (side 0)
      const doorWidth = 0.5;
      const doorHeight = 0.9;
      const doorDepth = 0.09;
      const doorY = doorHeight / 2; // bottom touches the ground
      const doorAngle = 0; // no rotation, flush with building face
      const doorDx = Math.cos(doorAngle);
      const doorDz = Math.sin(doorAngle);
      const doorFaceOffset = buildingHalf - doorDepth / 2 + 0.002;
      const doorX = building.position.x + doorDx * doorFaceOffset;
      const doorZ = building.position.z + doorDz * doorFaceOffset;
      const doorGeo = new THREE.BoxGeometry(doorWidth, doorHeight, doorDepth);
      const doorMat = new THREE.MeshBasicMaterial({ color: windowColor, emissive: windowColor, emissiveIntensity: 1 });
      const door = new THREE.Mesh(doorGeo, doorMat);
      door.position.set(doorX, doorY, doorZ);
      door.rotation.y = doorAngle;
      scene.add(door);
      // Randomly add a small roof with two sticks to some doors
      if (Math.random() < 0.4) {
        const roofWidth = doorWidth + 0.18;
        const roofDepth = 0.18;
        const roofHeight = 0.07;
        const roofY = doorY + doorHeight / 2 + roofHeight / 2 + 0.03;
        const roofGeo = new THREE.BoxGeometry(roofWidth, roofHeight, roofDepth);
        const roofMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const roof = new THREE.Mesh(roofGeo, roofMat);
        roof.position.set(doorX, roofY, doorZ + doorDepth / 2 + roofDepth / 2 - 0.01);
        scene.add(roof);
        // Two sticks (cylinders) at left/right edges
        const stickRadius = 0.03;
        const stickHeight = roofY - doorY + 0.01;
        const stickGeo = new THREE.CylinderGeometry(stickRadius, stickRadius, stickHeight, 8);
        const stickMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
        // Left stick
        const stickL = new THREE.Mesh(stickGeo, stickMat);
        stickL.position.set(doorX - doorWidth / 2 + stickRadius, doorY + stickHeight / 2 - 0.01, doorZ + doorDepth / 2 + stickRadius);
        scene.add(stickL);
        // Right stick
        const stickR = new THREE.Mesh(stickGeo, stickMat);
        stickR.position.set(doorX + doorWidth / 2 - stickRadius, doorY + stickHeight / 2 - 0.01, doorZ + doorDepth / 2 + stickRadius);
        scene.add(stickR);
      }
    }
  }
  addTrees(cityWidth, cityDepth, spacing, parkCenter, parkWidth, parkDepth, buildingBounds);
  addParkTrees(parkCenter, parkWidth, parkDepth, 8);
  addMainHubTower(parkCenter, parkWidth, parkDepth);
  addDistinctTowers(parkCenter, parkWidth, parkDepth);
  addGriddedSphere();
  addStarsBeyondDome();
  addSurroundingMountains();
  addOuterGriddedTrees();
  addAnimatedSpaceObjects();
  addSecondDome();
  setupTeleportRaycast();
  addJungleSceneInSecondDome();
  setJungleSceneVisibility(false);
  addCityDomeClickable();
  window.addEventListener('resize', onWindowResize, false);
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  lastHoveredGroup = null;
  renderer.domElement.addEventListener('pointermove', (event) => {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  });
  const renderScene = new RenderPass(scene, camera);
  const bloomPass = new UnrealBloomPass(new THREE.Vector2(container.offsetWidth, container.offsetHeight), 1.2, 0.4, 0.15);
  window._bloomComposer = new EffectComposer(renderer);
  window._bloomComposer.addPass(renderScene);
  window._bloomComposer.addPass(bloomPass);

  // Add click detection for Main Tower to open 3D room
  renderer.domElement.addEventListener('pointerdown', (event) => {
    const rect = renderer.domElement.getBoundingClientRect();
    const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    const clickMouse = new THREE.Vector2(mouseX, mouseY);
    raycaster.setFromCamera(clickMouse, camera);
    
    // Check for Main Tower click
    const mainTowerGroup = window._mainTowerGroups && window._mainTowerGroups[0];
    if (mainTowerGroup) {
      const intersects = raycaster.intersectObjects(mainTowerGroup, true);
      if (intersects.length > 0) {
        if (currentCleanup) currentCleanup();
        const cleanupRoom = createRoomScene(container);
        currentCleanup = cleanupRoom;
        container.addEventListener('backToCity', () => {
          if (currentCleanup) currentCleanup();
          createCityScene(container);
        }, { once: true });
        return;
      }
    }
    
    // Check for Art Museum click
    if (window._boxTowerMesh) {
      console.log('Art Museum mesh found, checking for intersection...');
      const intersects = raycaster.intersectObject(window._boxTowerMesh, true);
      console.log('Art Museum intersects:', intersects.length);
      if (intersects.length > 0) {
        console.log('Art Museum clicked! Opening art museum...');
        window.open('https://www.3wshs.com/art-museum', '_blank');
        return;
      }
          } else {
        console.log('Art Museum mesh not found in window._boxTowerMesh');
      }
      
      // Check for Ink Tower click
      if (window._multiTowerGroup) {
        console.log('Ink Tower group found, checking for intersection...');
        const intersects = raycaster.intersectObjects(window._multiTowerGroup, true);
        console.log('Ink Tower intersects:', intersects.length);
        if (intersects.length > 0) {
          console.log('Ink Tower clicked! Opening tattoo designs...');
          window.open('https://www.3wshs.com/tattoodesigns', '_blank');
          return;
        }
              } else {
          console.log('Ink Tower group not found in window._multiTowerGroup');
        }
        
        // Check for Marketing Hub click
        if (window._octaTowerGroup) {
          console.log('Marketing Hub group found, checking for intersection...');
          const intersects = raycaster.intersectObjects(window._octaTowerGroup, true);
          console.log('Marketing Hub intersects:', intersects.length);
          if (intersects.length > 0) {
            console.log('Marketing Hub clicked! Opening Marketing Hub...');
            window.open('https://www.3wshs.com/marketing', '_blank');
            return;
          }
        } else {
          console.log('Marketing Hub group not found in window._octaTowerGroup');
        }
        
        // Check for Real Estate Hub click
        if (window._cylinderTowerGroup) {
          console.log('Real Estate Hub group found, checking for intersection...');
          const intersects = raycaster.intersectObjects(window._cylinderTowerGroup, true);
          console.log('Real Estate Hub intersects:', intersects.length);
          if (intersects.length > 0) {
            console.log('Real Estate Hub clicked! Opening Real Estate Media...');
            window.open('https://www.3wshs.com/realestatemedia', '_blank');
            return;
          }
        } else {
          console.log('Real Estate Hub group not found in window._cylinderTowerGroup');
        }
        
        // Check for 3WSHS Store click
        if (window._coneTowerGroup) {
          console.log('3WSHS Store group found, checking for intersection...');
          const intersects = raycaster.intersectObjects(window._coneTowerGroup, true);
          console.log('3WSHS Store intersects:', intersects.length);
          if (intersects.length > 0) {
            console.log('3WSHS Store clicked! Opening shop...');
            window.open('https://www.3wshs.com/shop', '_blank');
            return;
          }
        } else {
          console.log('3WSHS Store group not found in window._coneTowerGroup');
        }
    });

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    // Animate billboard flashing
    const time = performance.now() * 0.002;
    for (const bb of billboardMeshes) {
      if (bb.material && bb.material.emissiveIntensity !== undefined) {
        bb.material.emissiveIntensity = 0.2 + Math.abs(Math.sin(time * 2 + bb.position.x + bb.position.z)) * 4.0;
      }
    }
    for (const car of carObjects) {
      if (car.axis === 'z') {
        car.mesh.position.z += car.dir * car.speed;
        if ((car.dir === 1 && car.mesh.position.z > car.end) || (car.dir === -1 && car.mesh.position.z < car.end)) {
          car.mesh.position.z = car.start;
        }
      } else {
        car.mesh.position.x += car.dir * car.speed;
        if ((car.dir === 1 && car.mesh.position.x > car.end) || (car.dir === -1 && car.mesh.position.x < car.end)) {
          car.mesh.position.x = car.start;
        }
      }
    }
    if (window._futuristicSphere) {
      window._futuristicSphere.gridGroup.rotation.y += 0.02;
      window._futuristicSphere.gridGroup.rotation.x = Math.sin(time) * 0.2;
    }
    if (window._diamondMesh && window._diamondOutline) {
      window._diamondMesh.rotation.y += 0.02;
      window._diamondOutline.rotation.y += 0.02;
    }
    if (window._cylinderRingMeshes && Array.isArray(window._cylinderRingMeshes)) {
      const t = (Math.sin(time * 0.7) + 1) / 2;
      for (const ring of window._cylinderRingMeshes) {
        if (ring && typeof ring.userData.ringMin === 'number' && typeof ring.userData.ringMax === 'number') {
          const baseY = ring.userData.ringMin + t * (ring.userData.ringMax - ring.userData.ringMin);
          ring.position.y = baseY + ring.userData.offset;
        }
      }
    }
    if (window._cylinderGridRing) {
      window._cylinderGridRing.rotation.y += 0.03;
    }
    if (window._glassTowerMeshes && window._glassTowerMeshes.length > 0) {
      scene.children.forEach(child => {
        if (child.userData && child.userData.rotationSpeed) {
          child.rotation.y += child.userData.rotationSpeed;
        }
      });
    }
    if (window._spaceAsteroids) {
      const t = performance.now() * 0.00025;
      for (const a of window._spaceAsteroids) {
        const angle = t * a.orbitSpeed + a.orbitPhase;
        a.mesh.position.set(Math.cos(angle) * a.orbitRadius, Math.sin(angle * 0.7) * 8 + 10, Math.sin(angle) * a.orbitRadius);
        a.mesh.rotation.x += a.rotSpeed;
        a.mesh.rotation.y += a.rotSpeed * 1.3;
      }
    }
    if (window._spaceSatellites) {
      const t = performance.now() * 0.00022;
      for (const sat of window._spaceSatellites) {
        const angle = t * sat.orbitSpeed + sat.orbitPhase;
        sat.group.position.set(Math.cos(angle) * sat.orbitRadius, Math.sin(angle * 0.8) * 18 + 24, Math.sin(angle) * sat.orbitRadius);
        sat.group.rotation.y = angle + Math.PI / 2;
      }
    }
    if (window._spaceShips) {
      const t = performance.now() * 0.00019;
      for (const ship of window._spaceShips) {
        const angle = t * ship.orbitSpeed + ship.orbitPhase;
        ship.group.position.set(Math.cos(angle) * ship.orbitRadius, Math.sin(angle * 0.6) * 28 + 32, Math.sin(angle) * ship.orbitRadius);
        ship.group.rotation.y = angle - Math.PI / 2;
      }
    }
    if (teleportTarget && teleportFrom && teleportTo) {
      teleportProgress += 0.018;
      if (teleportProgress >= 1) {
        if (teleportTarget === 'secondDome') {
          camera.position.set(0, 8, -158);
          controls.target.set(0, 5, -180);
        } else if (teleportTarget === 'cityDome') {
          camera.position.set(20, 25, 30);
          controls.target.set(0, 5, 0);
        }
        controls.update();
        teleportTarget = null;
        teleportFrom = null;
        teleportTo = null;
      } else {
        camera.position.lerpVectors(teleportFrom, teleportTo, Math.sin(teleportProgress * Math.PI / 2));
      }
      if (teleportTarget === 'secondDome') {
        camera.lookAt(0, 5, -180);
        controls.target.set(0, 5, -180);
      } else if (teleportTarget === 'cityDome') {
        camera.lookAt(0, 5, 0);
        controls.target.set(0, 5, 0);
      }
      controls.update();
    }
    if (camera.position.z < -120) {
      setJungleSceneVisibility(true);
    } else {
      setJungleSceneVisibility(false);
    }
    if (window._buildingLabels) {
      for (const label of window._buildingLabels) {
        label.lookAt(camera.position);
        const t = performance.now() * 0.001;
        label.position.y = label.userData.baseY + Math.sin(t * 1.2) * 0.45;
      }
    }
    if (window._bloomComposer) {
      const oldBg = scene.background;
      camera.layers.set(1);
      window._bloomComposer.render();
      camera.layers.set(0);
      renderer.render(scene, camera);
      scene.background = oldBg;
    } else {
      renderer.render(scene, camera);
    }
    if (window._mainTowerMeshes && window._mainTowerMeshes.length > 0) {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(window._mainTowerMeshes, false);
      if (lastHoveredGroup && (!intersects.length || !window._mainTowerMeshToGroup.get(intersects[0].object) || window._mainTowerMeshToGroup.get(intersects[0].object) !== lastHoveredGroup)) {
        for (const m of lastHoveredGroup) {
          if (m.material && m.material.emissiveIntensity !== undefined) {
            m.material.emissiveIntensity = m.userData.originalEmissiveIntensity || 1.5;
            if (m.userData.originalEmissiveColor !== undefined) {
              m.material.emissive.setHex(m.userData.originalEmissiveColor);
            }
          }
          if (m.type === 'Group' || m instanceof THREE.Group) {
            m.traverse(child => {
              if (child.material && child.material.color) {
                if (child.userData.originalColor !== undefined) {
                  child.material.color.setHex(child.userData.originalColor);
                }
              }
            });
          }
          if (m.material && m.material.wireframe && m.material.color) {
            if (m.userData.originalColor !== undefined) {
              m.material.color.setHex(m.userData.originalColor);
            }
          }
          m.layers.disable(1);
        }
        lastHoveredGroup = null;
      }
      if (intersects.length) {
        const hovered = intersects[0].object;
        const group = window._mainTowerMeshToGroup.get(hovered);
        if (group) {
          for (const m of group) {
            if (m.material && m.material.emissiveIntensity !== undefined) {
              if (m.userData.originalEmissiveIntensity === undefined) {
                m.userData.originalEmissiveIntensity = m.material.emissiveIntensity;
              }
              if (m.userData.originalEmissiveColor === undefined) {
                m.userData.originalEmissiveColor = m.material.emissive.getHex();
              }
              m.material.emissiveIntensity = 2.5;
              m.material.emissive.setHex(0x66ffff);
            }
            if (m.type === 'Group' || m instanceof THREE.Group) {
              m.traverse(child => {
                if (child.material && child.material.color) {
                  if (child.userData.originalColor === undefined) {
                    child.userData.originalColor = child.material.color.getHex();
                  }
                  child.material.color.set(0x66ffff);
                }
              });
            }
            if (m.material && m.material.wireframe && m.material.color) {
              if (m.userData.originalColor === undefined) {
                m.userData.originalColor = m.material.color.getHex();
              }
              m.material.color.set(0x66ffff);
            }
            m.layers.enable(1);
          }
          lastHoveredGroup = group;
        }
      }
    }
    if (window._circuitLines) {
      const t = performance.now() * 0.002;
      for (const c of window._circuitLines) {
        if (c.material && c.material.emissiveIntensity !== undefined) {
          c.material.emissiveIntensity = 1.2 + Math.abs(Math.sin(t * 2 + c.position.x + c.position.y)) * 2.5;
        }
      }
    }
  }
    animate();
  currentCleanup = () => {
    // Remove renderer and all children
    if (renderer.domElement && renderer.domElement.parentNode === container) {
      container.removeChild(renderer.domElement);
    }
    // Remove all event listeners (pointermove, pointerdown, etc.)
    renderer.domElement.replaceWith(renderer.domElement.cloneNode(true));
    // Remove panoButton (no longer needed)
    // (Removed panoButton cleanup code)
  };
}

// On page load, find the main container and start the city scene
window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('room-container');
  createCityScene(container);
}); 