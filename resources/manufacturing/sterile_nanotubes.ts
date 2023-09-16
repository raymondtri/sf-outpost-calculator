import Resource from "../_base";
import { solvent, vanadium } from "../raw";
import { molecular_sieve } from "./molecular_sieve";

export const sterile_nanotubes = new Resource("Sterile Nanotubes", [
  molecular_sieve,
  solvent.qty(2),
  vanadium.qty(2)
]);