import Resource from "../_base";
import { lithium, rothicite } from "../raw";
import { semimetal_wafer } from "./semimetal_wafer";
import { supercooled_magnet } from "./supercooled_magnet";

export const rothicite_magnet = new Resource("Rothicite Magnet", [
  rothicite.qty(4),
  semimetal_wafer,
  lithium.qty(2),
  supercooled_magnet
]);