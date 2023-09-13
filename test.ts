import R from "./resources/_index";

const r = R.vytinium_fuel_rod;

console.log(`You searched, '${r.name}'.`);
console.log(`Here is the constant input required for ${r.name}:`, r.baseComponents)
console.log(`Here is the component input map for ${r.name}:`)
console.dir(r, { depth: null })