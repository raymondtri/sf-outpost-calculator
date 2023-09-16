import Resource from "../_base";
import { solvent, uranium } from "../raw";
import { semimetal_wafer } from "./semimetal_wafer";

export const nuclear_fuel_rod = new Resource("Nuclear Fuel Rod", [
  solvent.qty(2),
  semimetal_wafer,
  uranium.qty(3)
]);