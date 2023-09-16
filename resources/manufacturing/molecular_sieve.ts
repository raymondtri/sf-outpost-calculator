import Resource from "../_base";
import { ionic_liquids, membrane } from "../raw";
import { mag_pressure_tank } from "./mag_pressure_tank";

export const molecular_sieve = new Resource("Molecular Sieve", [
  ionic_liquids.qty(2),
  membrane.qty(2),
  mag_pressure_tank
]);