import Resource from "../_base";
import { fiber, sealant } from "../raw";

export const bandages = new Resource("Bandages", [
  fiber,
  sealant
]);