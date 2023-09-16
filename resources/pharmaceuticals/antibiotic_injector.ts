import Resource from "../_base";
import { analgesic } from "../raw";
import { antibiotics } from "./antibiotics";
import { injector } from "./injector";

export const antibiotic_injector = new Resource("Antibiotic Injector", [
  injector.qty(0.5),
  antibiotics.qty(0.5),
  analgesic.qty(0.5)
]);