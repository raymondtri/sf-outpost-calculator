import Resource from "../_base";
import { caesium, indicite, solvent } from "../raw";
import { semimetal_wafer } from "./semimetal_wafer";

export const aldumite_drilling_rig = new Resource("Aldumite Drilling Rig", [
  caesium.qty(2),
  indicite.qty(4),
  semimetal_wafer,
  solvent.qty(2)
]);