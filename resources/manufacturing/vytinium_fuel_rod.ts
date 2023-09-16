import Resource from "../_base";
import { plutonium, vytinium } from "../raw";
import { indicite_wafer } from "./indicite_wafer";
import { nuclear_fuel_rod } from "./nuclear_fuel_rod";

export const vytinium_fuel_rod = new Resource("Vytinium Fuel Rod", [
  plutonium.qty(2),
  indicite_wafer,
  vytinium.qty(4),
  nuclear_fuel_rod
]);