import Resource from "../_base";
import { antibiotics } from "./antibiotics";
import { bandages } from "./bandages";
import { heal_paste } from "./heal_paste";

export const analgesic_poultice = new Resource("Analgesic Poultice", [
  heal_paste.qty(0.5),
  antibiotics.qty(0.5),
  bandages.qty(0.5)
]);