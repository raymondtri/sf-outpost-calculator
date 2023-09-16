import Resource from "../_base";
import { caelumite, genetic_material, solvent, tetrafluorides } from "../raw";

export const black_hole_heart = new Resource("Black Hole Heart", [
  caelumite.qty(0.5),
  solvent.qty(0.5),
  genetic_material.qty(0.5),
  tetrafluorides.qty(0.5)
]);