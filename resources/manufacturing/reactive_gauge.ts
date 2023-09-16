import Resource from "../_base";
import { aluminum, copper } from "../raw";

export const reactive_gauge = new Resource("Reactive Gauge", [
  aluminum.qty(2),
  copper
]);