import Resource from "../_base";
import { caelumite, carboxylic_acids, genetic_material, mercury } from "../raw";

export const dwarf_star_heart = new Resource("Dwarf Star Heart", [
  caelumite.qty(0.5),
  genetic_material.qty(0.5),
  carboxylic_acids.qty(0.5),
  mercury.qty(0.5)
]);