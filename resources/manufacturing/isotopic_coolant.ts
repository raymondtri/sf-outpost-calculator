import Resource from "../_base";
import { ionic_liquids, tetrafluorides } from "../raw";

export const isotopic_coolant = new Resource("Isotopic Coolant", [
  ionic_liquids,
  tetrafluorides
]);