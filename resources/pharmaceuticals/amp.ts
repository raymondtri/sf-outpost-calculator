import Resource from "../_base";
import { argon, toxin, metabolic_agent } from "../raw";

export const amp = new Resource("Amp", [
  argon,
  toxin,
  metabolic_agent
]);