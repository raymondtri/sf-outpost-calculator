import Resource from "../_base";
import { antimicrobial, membrane, metabolic_agent } from "../raw";

export const penicillin_x = new Resource("Penicillin-X", [
  antimicrobial,
  membrane,
  metabolic_agent
]);