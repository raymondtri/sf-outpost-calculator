import Resource from "../_base";
import { biosuppressant, memory_substrate } from "../raw";
import { molecular_sieve } from "./molecular_sieve";
import { sterile_nanotubes } from "./sterile_nanotubes";

export const substrate_molecule_sieve = new Resource("Substrate Molecule Sieve", [
  molecular_sieve,
  sterile_nanotubes.qty(2),
  memory_substrate.qty(3),
  biosuppressant.qty(2)
]);