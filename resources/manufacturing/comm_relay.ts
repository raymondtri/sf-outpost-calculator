import Resource from "../_base";
import { isocentered_magnet } from "./isocentered_magnet";
import { tau_grade_rheostat } from "./tau_grade_rheostat";

export const comm_relay = new Resource("Comm Relay", [
  tau_grade_rheostat,
  isocentered_magnet
]);