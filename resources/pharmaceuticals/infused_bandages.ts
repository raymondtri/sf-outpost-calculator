import Resource from "../_base";
import { sedative } from "../raw";
import { bandages } from "./bandages";
import { heal_paste } from "./heal_paste";

export const infused_bandages = new Resource("Infused Bandages", [
  heal_paste.qty(0.5),
  sedative.qty(0.5),
  bandages.qty(0.5)
]);