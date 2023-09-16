import Resource from "../_base";
import { alkanes } from "../raw";
import { mag_pressure_tank } from "./mag_pressure_tank";
import { reactive_gauge } from "./reactive_gauge";

export const monopropellant = new Resource("Monopropellant", [
  alkanes.qty(2),
  mag_pressure_tank,
  reactive_gauge
]);