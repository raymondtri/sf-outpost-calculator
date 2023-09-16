import Resource from "../_base";
import { neodynium } from "../raw";
import { isocentered_magnet } from "./isocentered_magnet";
import { isotopic_coolant } from "./isotopic_coolant";

export const supercooled_magnet = new Resource("Supercooled Magnet", [
  neodynium.qty(3),
  isotopic_coolant,
  isocentered_magnet
]);