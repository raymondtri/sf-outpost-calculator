import Resource from "../_base";
import { membrane, metabolic_agent } from "../raw";

export const injector = new Resource("Injector", [
  membrane,
  metabolic_agent
]);