import Resource from "../_base";
import { caelumite, genetic_material, stimulant } from "../raw";
import { subgiant_heart } from "./subgiant_heart";

export const hypergiant_heart = new Resource("Hypergiant Heart", [
  caelumite.qty(0.5),
  genetic_material.qty(0.5),
  stimulant.qty(0.5),
  subgiant_heart.qty(0.5)
]);