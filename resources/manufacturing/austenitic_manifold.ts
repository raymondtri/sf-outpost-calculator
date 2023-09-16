import Resource from "../_base";
import { iron, nickel } from "../raw";
import { reactive_gauge } from "./reactive_gauge";

export const austenitic_manifold = new Resource("Austenitic Manifold", [
  iron.qty(2),
  nickel.qty(2),
  reactive_gauge
]);