import Resource from "../_base";
import { antimony, gold } from "../raw";
import { zero_wire } from "./zero_wire";

export const semimetal_wafer = new Resource("Semimetal Wafer", [
  zero_wire,
  antimony.qty(2),
  gold.qty(2)
]);