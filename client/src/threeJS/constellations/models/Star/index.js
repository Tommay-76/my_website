import * as THREE from "three";
import { StarMesh } from "../../utils";

/**
 *
 * @param {*} param0
 * @returns {THREE.Mesh}
 */
const starContructor = ({ id, RAh, DEd, starSize, distanceFromEarth = 15 }) => {
  const geometry = new THREE.SphereGeometry(starSize, 24, 24);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const mesh = new StarMesh(geometry, material, id);
  mesh.setRadialPosition({ RAh, DEd, magnitude: distanceFromEarth });

  return mesh;
};

export default starContructor;
