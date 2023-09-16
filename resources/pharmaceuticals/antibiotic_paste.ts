import Resource from "../_base";
import { carboxylic_acids } from "../raw";
import { antibiotics } from "./antibiotics";
import { heal_paste } from "./heal_paste";

export const antibiotic_paste = new Resource("Antibiotic Paste", [
  heal_paste.qty(0.5),
  carboxylic_acids.qty(0.5),
  antibiotics.qty(0.5)
]);