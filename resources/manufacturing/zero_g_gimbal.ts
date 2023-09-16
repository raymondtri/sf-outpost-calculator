import Resource from "../_base";
import { lubricant, tantium } from "../raw";
import { isocentered_magnet } from "./isocentered_magnet";

export const zero_g_gimbal = new Resource("Zero-G Gimbal", [
  isocentered_magnet,
  tantium.qty(2),
  lubricant.qty(2)
])