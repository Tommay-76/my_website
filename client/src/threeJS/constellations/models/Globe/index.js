import * as THREE from "three";
import { CSS2DObject } from "three/addons/renderers/CSS2DRenderer.js";

export const earthLabelConstructor = (earthMesh, distanceFromEarth) => {
  const earthDiv = document.createElement("div");
  earthDiv.className = "label";
  earthDiv.textContent = "Earth";
  earthDiv.style.backgroundColor = "white";

  const earthLabel = new CSS2DObject(earthDiv);
  earthLabel.position.set(distanceFromEarth, 0, 0);
  earthLabel.center.set(0, 1);
  earthMesh.add(earthLabel);
  return;
};
/**
 *
 * @param {*} param0
 * @returns {THREE.Mesh}
 */
const globeConstructor = ({ size }) => {
  const geometry = new THREE.SphereGeometry(size, 24, 24);

  const material = new THREE.MeshBasicMaterial({ color: 0x44ff44 });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.layers.enableAll();

  return mesh;
};

export default globeConstructor;
