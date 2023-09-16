import Resource from "../_base";
import { palladium, polymer, tasine } from "../raw";
import { paramagnon_conductor } from "./paramagnon_conductor";

export const tasine_superconductor = new Resource("Tasine Superconductor", [
  palladium.qty(2), 
  polymer.qty(2), 
  paramagnon_conductor, 
  tasine.qty(4)
]);