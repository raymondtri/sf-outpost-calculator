import Resource from "../_base";
import { antimony, vanadium } from "../raw";
import { tau_grade_rheostat } from "./tau_grade_rheostat";

export const positron_battery = new Resource("Positron Battery", [
  antimony.qty(2),
  vanadium.qty(2),
  tau_grade_rheostat
]);