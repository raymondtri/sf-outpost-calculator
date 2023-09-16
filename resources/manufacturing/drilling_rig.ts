import Resource from "../_base";
import { lubricant, tungsten } from "../raw";
import { reactive_gauge } from "./reactive_gauge";

export const drilling_rig = new Resource("Drilling Rig", [
  tungsten.qty(3),
  reactive_gauge,
  lubricant.qty(2)
]);