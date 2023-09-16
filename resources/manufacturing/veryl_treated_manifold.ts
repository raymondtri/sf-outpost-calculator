import Resource from "../_base";
import { lubricant, veryl, ytterbium } from "../raw";
import { austenitic_manifold } from "./austenitic_manifold";

export const veryl_treated_manifold = new Resource("Veryl Treated Manifold", [
  austenitic_manifold,
  ytterbium.qty(2),
  lubricant.qty(2),
  veryl.qty(4)
])