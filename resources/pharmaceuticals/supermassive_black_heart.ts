import Resource from "../_base";
import { caelumite, genetic_material } from "../raw";
import { neurologic } from "../raw/neurologic";
import { giant_heart } from "./giant_heart";

export const supermassive_black_heart = new Resource("Supermassive Black Heart", [
  caelumite.qty(0.5),
  giant_heart.qty(0.5),
  genetic_material.qty(0.5),
  neurologic.qty(0.5)
]);