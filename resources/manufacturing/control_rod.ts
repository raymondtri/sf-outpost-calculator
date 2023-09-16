import Resource from "../_base";
import { dysprosium } from "../raw";
import { austenitic_manifold } from "./austenitic_manifold";
import { isotopic_coolant } from "./isotopic_coolant";

export const control_rod = new Resource("Control Rod", [
  austenitic_manifold,
  isotopic_coolant,
  dysprosium.qty(3)
]);