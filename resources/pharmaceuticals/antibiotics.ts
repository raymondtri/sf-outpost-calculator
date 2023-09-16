import Resource from "../_base";
import { antimicrobial, membrane } from "../raw";

export const antibiotics = new Resource("Antibiotics", [
  antimicrobial,
  membrane
]);