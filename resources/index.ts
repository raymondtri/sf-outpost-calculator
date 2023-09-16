import Resource from "./_base"
import * as raw from "./raw"
import * as manufacturing from "./manufacturing"
import * as pharmaceuticals from "./pharmaceuticals"

export default class R {
  static all = [...Object.values(raw), ...Object.values(manufacturing), ...Object.values(pharmaceuticals)]
  static raw = raw
  static manufacturing = manufacturing
  static pharmaceuticals = pharmaceuticals

  static find(index: number|string): Resource {
    index = Number(index) === index ? index : Number(index);
    const found = Object.values(R.all).find((r:Resource) => r.index === index) 
    if(!found){
      throw new Error(`Resource with index ${index} not found.`)
    }
    return found
  }

}