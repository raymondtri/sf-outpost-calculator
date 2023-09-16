import Resource from "../_base";
import { europium, lithium } from "../raw";
import { supercooled_magnet } from "./supercooled_magnet";
import { tau_grade_rheostat } from "./tau_grade_rheostat";

export const microsecond_regulator = new Resource("Microsecond Regulator", [
  europium.qty(4),
  tau_grade_rheostat,
  lithium.qty(2),
  supercooled_magnet
]);