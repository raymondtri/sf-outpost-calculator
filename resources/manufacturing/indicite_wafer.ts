import Resource from "../_base";
import { caesium, indicite, solvent } from "../raw";
import { semimetal_wafer } from "./semimetal_wafer";

export const indicite_wafer = new Resource("Indicite Wafer", [
  caesium.qty(2),
  indicite.qty(4),
  semimetal_wafer,
  solvent.qty(2)
]);