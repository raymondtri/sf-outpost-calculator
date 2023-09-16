import Resource from "../_base";
import { biosuppressant } from "../raw";
import { immobilizer } from "./immobilizer";
import { bandages } from "./bandages";

export const repairing_immobilizer = new Resource("Repairing Immobilizer", [
  immobilizer.qty(0.5),
  biosuppressant.qty(0.5),
  bandages.qty(0.5)
]);