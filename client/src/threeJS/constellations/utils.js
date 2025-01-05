import * as THREE from "three";

export const fps = (framesPerSecond) => 1000 / framesPerSecond;

const degreeToRad = (degree) => (degree * Math.PI) / 180;
/**
 *
 * @param {number} RAh Horizontal angle: Hours RA, equinox J2000.0
 * @param {number} DEd Vertical angle: Degrees Dec, equinox J2000.0
 * @param {number} magnitude Distance from origin
 * @returns Cartesian co ordinates
 */
export const polarToVector = ({ RAh, DEd, magnitude }) => {
  const radiansFromHours = degreeToRad((RAh - 12) * 15);
  const radiansFromDegrees = degreeToRad(DEd);
  return {
    x: magnitude * Math.sin(radiansFromHours) * Math.cos(radiansFromDegrees),
    y: magnitude * Math.sin(radiansFromHours) * Math.sin(radiansFromDegrees),
    z: magnitude * Math.cos(radiansFromHours)
  };
};

export class StarMesh extends THREE.Mesh {
  constructor(material, mesh, starId) {
    super(material, mesh);
    this.starId = starId;
    return this;
  }
  getStarId() {
    return this.starId;
  }
  setRadialPosition({ RAh, DEd, magnitude }) {
    console.log("RAh", RAh);
    console.log("DEd", DEd);
    const { x, y, z } = polarToVector({ RAh, DEd, magnitude });
    console.log("x", x);
    console.log("y", y);
    console.log("z", z);
    this.position.setX(x);
    this.position.setY(y);
    this.position.setZ(z);
  }
}
