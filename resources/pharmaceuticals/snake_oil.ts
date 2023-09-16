import Resource from "../_base";
import { chlorine, metabolic_agent, sedative } from "../raw";

export const snake_oil = new Resource("Snake Oil", [
  chlorine,
  sedative,
  metabolic_agent
]);