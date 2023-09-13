import Resource from "./_base";

export default class R {
  public static readonly iron = new Resource("Iron", []);
  public static readonly aluminum = new Resource("Aluminum", []);
  public static readonly nickel = new Resource("Nickel", []);
  public static readonly copper = new Resource("Copper", []);
  public static readonly beryllium = new Resource("Beryllium", []);
  public static readonly cobalt = new Resource("Cobalt", []);
  public static readonly ionic_liquids = new Resource("Ionic Liquids", []);
  public static readonly tetrafluorides = new Resource("Tetrafluorides", []);
  public static readonly alkanes = new Resource("Alkanes", []);
  public static readonly fiber = new Resource("Fiber", []); // produced from greenhouses
  public static readonly cosmetic = new Resource("Cosmetic", []);
  public static readonly silver = new Resource("Silver", []);
  public static readonly dysprosium = new Resource("Dysprosium", []);
  public static readonly tungsten = new Resource("Tungsten", []);
  public static readonly uranium = new Resource("Uranium", []);
  public static readonly antimony = new Resource("Antimony", []);
  public static readonly gold = new Resource("Gold", []);
  public static readonly neodynium = new Resource("Neodynium", []);
  public static readonly vanadium = new Resource("Vanadium", []);
  public static readonly tantium = new Resource("Tantium", []);
  public static readonly caesium = new Resource("Caesium", []);
  public static readonly aldumite = new Resource("Aldumite", []);
  public static readonly lithium = new Resource("Lithium", []);
  public static readonly europium = new Resource("Europium", []);
  public static readonly indicite = new Resource("Indicite", []);
  public static readonly palladium = new Resource("Palladium", []);
  public static readonly rothicite = new Resource("Rothicite", []);
  public static readonly tasine = new Resource("Tasine", []);
  public static readonly veryl = new Resource("Veryl", []);
  public static readonly ytterbium = new Resource("Ytterbium", []);
  public static readonly vytinium = new Resource("Vytinium", []);
  public static readonly plutonium = new Resource("Plutonium", []);
  public static readonly solvent = new Resource("Solvent", []); // produced from ....?
  public static readonly lubricant = new Resource("Lubricant", []); // produced from ....? greenhouses or animal husbandry
  public static readonly membrane = new Resource("Membrane", []); // produced from ....?
  public static readonly polymer = new Resource("Polymer", []); // produced from ....?
  public static readonly biosuppressant = new Resource("Biosuppressant", []); // produced from ....?
  public static readonly memory_substrate = new Resource("Memory Substrate", []); // produced from ....?
  public static readonly adaptive_frame = new Resource("Adaptive Frame", [R.iron, R.aluminum]);
  public static readonly reactive_gauge = new Resource("Reactive Gauge", [R.aluminum.qty(2), R.copper.qty(1)]);
  public static readonly austenitic_manifold = new Resource("Austenitic Manifold", [R.iron.qty(2), R.nickel.qty(2), R.reactive_gauge]);
  public static readonly tau_grade_rheostat = new Resource("Tau Grade Rheostat", [R.beryllium, R.copper]);
  public static readonly isocentered_magnet = new Resource("Isocentered Magnet", [R.cobalt, R.nickel]);
  public static readonly isotopic_coolant = new Resource("Isotopic Coolant", [R.ionic_liquids, R.tetrafluorides]);
  public static readonly comm_relay = new Resource("Comm Relay", [R.tau_grade_rheostat, R.isocentered_magnet]);
  public static readonly mag_pressure_tank = new Resource("Mag Pressure Tank", [R.nickel, R.aluminum.qty(2)]);
  public static readonly monopropellant = new Resource("Monopropellant", [R.alkanes.qty(2), R.mag_pressure_tank, R.reactive_gauge]);
  public static readonly polytextile = new Resource("Polytextile", [R.fiber.qty(2), R.cosmetic]);
  public static readonly zero_wire = new Resource("Zero Wire", [R.silver, R.copper]);
  public static readonly control_rod = new Resource("Control Rod", [R.austenitic_manifold, R.isotopic_coolant, R.dysprosium.qty(3)]);
  public static readonly drilling_rig = new Resource("Drilling Rig", [R.tungsten.qty(3), R.reactive_gauge, R.lubricant.qty(2)]);
  public static readonly molecular_sieve = new Resource("Molecular Sieve", [R.ionic_liquids.qty(2), R.membrane.qty(2), R.mag_pressure_tank]);
  public static readonly semimetal_water = new Resource("Semimetal Water", [R.zero_wire, R.antimony.qty(2), R.gold.qty(2)]);
  public static readonly nuclear_fuel_rod = new Resource("Nuclear Fuel Rod", [R.solvent.qty(2), R.semimetal_water, R.uranium.qty(3)]);
  public static readonly paramagnon_conductor = new Resource("Paramagnon Conductor", [R.zero_wire.qty(3), R.neodynium, R.gold]);
  public static readonly positron_battery = new Resource("Positron Battery", [R.antimony.qty(2), R.vanadium.qty(2), R.tau_grade_rheostat]);
  public static readonly sterile_nanotubes = new Resource("Sterile Nanotubes", [R.molecular_sieve, R.solvent.qty(2), R.vanadium.qty(2)]);
  public static readonly supercooled_magnet = new Resource("Supercooled Magnet", [R.neodynium.qty(3), R.isotopic_coolant, R.isocentered_magnet]);
  public static readonly zero_g_gimbal = new Resource("Zero-G Gimbal", [R.isocentered_magnet, R.tantium.qty(2), R.lubricant.qty(2)]);
  public static readonly microsecond_regulator = new Resource("Microsecond Regulator", [R.europium.qty(4), R.tau_grade_rheostat.qty(1), R.lithium.qty(2), R.supercooled_magnet]);
  public static readonly aldumite_drilling_rig = new Resource("Aldumite Drilling Rig", [R.caesium.qty(2), R.microsecond_regulator, R.aldumite.qty(4), R.drilling_rig]);
  public static readonly indicite_wafer = new Resource("Indicite Wafer", [R.caesium.qty(2), R.indicite.qty(4), R.semimetal_water, R.solvent.qty(2)]);
  public static readonly power_circuit = new Resource("Power Circuit", [R.palladium.qty(4), R.positron_battery, R.polymer.qty(2), R.paramagnon_conductor]);
  public static readonly rothicite_magnet = new Resource("Rothicite Magnet", [R.rothicite.qty(4), R.semimetal_water, R.lithium.qty(2), R.supercooled_magnet]);
  public static readonly substrate_molecule_sieve = new Resource("Substrate Molecule Sieve", [R.molecular_sieve, R.sterile_nanotubes.qty(2), R.memory_substrate.qty(3), R.biosuppressant.qty(2)]);
  public static readonly tasine_superconductor = new Resource("Tasine Superconductor", [R.palladium.qty(2), R.polymer.qty(2), R.paramagnon_conductor, R.tasine.qty(4)]);
  public static readonly veryl_treated_manifold = new Resource("Veryl-Treated Manifold", [R.austenitic_manifold, R.ytterbium.qty(2), R.lubricant.qty(2), R.veryl.qty(4)]);
  public static readonly vytinium_fuel_rod = new Resource("Vytinium Fuel Rod", [R.plutonium.qty(2), R.indicite_wafer, R.vytinium.qty(4), R.nuclear_fuel_rod]);

  static find(index: number|string): Resource {
    index = Number(index) === index ? index : Number(index);
    return Object.values(R).find((resource: Resource) => resource.index === index);
  }
}