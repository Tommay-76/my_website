import * as THREE from "three";

const ConstellationLineConstructor = (points) => {
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
  return new THREE.Line(geometry, material);
};

export default ConstellationLineConstructor;
