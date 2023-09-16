import Resource from "../_base";
import { palladium, polymer } from "../raw";
import { paramagnon_conductor } from "./paramagnon_conductor";
import { positron_battery } from "./positron_battery";

export const power_circuit = new Resource("Power Circuit", [
  palladium.qty(4),
  positron_battery,
  polymer.qty(2),
  paramagnon_conductor
]);