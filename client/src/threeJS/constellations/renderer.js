import createConstellationMesh from "./models/Constellation";
import globeConstructor, { earthLabelConstructor } from "./models/Globe";
import data from "./data.json";
import { fps } from "./utils";
import * as THREE from "three";
import { CSS2DRenderer } from "three/addons/renderers/CSS2DRenderer.js";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function PromiseTimeout(delayms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delayms);
  });
}
const getMinMaxes = (data) => {
  const constellations = data.Constellations;
  console.log("DEd: Min", Math.min(...constellations.map(({ DEd }) => DEd && parseFloat(DEd))));
  console.log("DEd: max", Math.max(...constellations.map(({ DEd }) => DEd && parseFloat(DEd))));
  console.log("RAh: Min", Math.min(...constellations.map(({ RAh }) => RAh && parseFloat(RAh))));
  console.log("RAh: max", Math.max(...constellations.map(({ RAh }) => RAh && parseFloat(RAh))));
};
const createConstellations = (data) => {
  const constellations = data.Constellations;
  const meshes = constellations.map((constellation) => createConstellationMesh(constellation));
  getMinMaxes(data);
  return meshes;
};

export const setup = (width, height) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg")
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  camera.position.setZ(30);
  camera.lookAt(0, 0, 0);
  return {
    scene,
    camera,
    renderer
  };
};

export const setupLabelRenderer = (camera, width, height) => {
  const labelRenderer = new CSS2DRenderer();
  labelRenderer.setSize(width, height);
  labelRenderer.domElement.style.position = "absolute";
  labelRenderer.domElement.style.top = "0px";
  document.body.appendChild(labelRenderer.domElement);

  const controls = new OrbitControls(camera, labelRenderer.domElement);
  return { labelRenderer, controls };
};

export const startAnimation = (width, height) => {
  const { scene, camera, renderer } = setup(width, height);
  const constellations = createConstellations(data);
  constellations.forEach((constellation) => {
    scene.add(constellation);
  });
  const earth = globeConstructor({ size: 5 });
  scene.add(earth);
  earthLabelConstructor(earth, 8);
  renderer.render(scene, camera);
  const axesHelper = new THREE.AxesHelper(5);
  axesHelper.layers.enableAll();
  scene.add(axesHelper);
  const control = new OrbitControls(camera, renderer.domElement);
  const { labelRenderer, controls } = setupLabelRenderer(camera);
  async function animate() {
    await PromiseTimeout(fps(60));
    requestAnimationFrame(animate);
    control.update();
    controls.update();
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
  }

  animate();
};
