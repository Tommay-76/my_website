import createStarMesh from "../Star/index";
import createLineMesh from "../ConstellationLine/index";
import { Group } from "three";

const createConstellationMesh = ({ lines, stars, Name }) => {
  try {
    const constellation = new Group();
    console.log(Name);
    const starMeshes = stars.map(({ id, RAh, DEd }) => {
      const starMesh = createStarMesh({ id, RAh, DEd, starSize: 0.02, distanceFromEarth: 10 });
      constellation.add(starMesh);
      return starMesh;
    });
    lines.forEach(([pointOne, pointTwo]) => {
      const starOne = starMeshes.find((star) => star.getStarId() === pointOne);
      if (!starOne) throw new Error("Failed to find star 1");
      const starTwo = starMeshes.find((star) => star.getStarId() === pointTwo);
      if (!starTwo) throw new Error("Failed to find star 2");
      const v1 = starOne.position;
      const v2 = starTwo.position;

      if (!v1) throw new Error("Failed to find point One");
      if (!v2) throw new Error("Failed to find point Two");

      constellation.add(createLineMesh([v1, v2]));
    });

    return constellation;
  } catch (err) {
    console.log(`failed to create constellation ${Name}`, err);
  }
};

export default createConstellationMesh;
