import Resource from "../_base";
import { aluminum, nickel } from "../raw";

export const mag_pressure_tank = new Resource("Mag Pressure Tank", [
  nickel,
  aluminum.qty(2)
]);