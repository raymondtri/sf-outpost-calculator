import Resource from "../_base";
import { gold, neodynium } from "../raw";
import { zero_wire } from "./zero_wire";

export const paramagnon_conductor = new Resource("Paramagnon Conductor", [
  zero_wire.qty(3),
  neodynium,
  gold
]);