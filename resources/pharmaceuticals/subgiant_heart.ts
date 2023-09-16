import Resource from "../_base";
import { caelumite, genetic_material, solvent } from "../raw";
import { black_hole_heart } from "./black_hole_heart";

export const subgiant_heart = new Resource("Subgiant Heart", [
  caelumite.qty(0.5),
  solvent.qty(0.5),
  genetic_material.qty(0.5),
  black_hole_heart.qty(0.5)
]);