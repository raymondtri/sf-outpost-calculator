import Resource from "../_base";
import { caelumite, genetic_material } from "../raw";
import { hypercatalyst } from "../raw/hypercatalyst";
import { dwarf_star_heart } from "./dwarf_star_heart";

export const giant_heart = new Resource("Giant Heart", [
  caelumite.qty(0.5),
  genetic_material.qty(0.5),
  dwarf_star_heart.qty(0.5),
  hypercatalyst.qty(0.5)
]);