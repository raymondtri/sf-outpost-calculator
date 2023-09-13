export interface IResource {
  index: number;
  name: string;
  quantity: number;
  components?: IResource[];
  baseComponents: IResource[];
  qty: (qty: number) => IResource;
  formatted: any;
}

let index = 0;

export default class Resource implements IResource {

  index: number = index++;
  name: string;
  quantity: number = 1;
  components: IResource[];

  constructor(name: string, components: IResource[]){
    this.name = name;
    this.components = components;
  }

  get baseComponents(){
    let returnable: IResource[] = []
    this.components.map(component => component.baseComponents.length ? component.baseComponents : component).flat().forEach((component:IResource) => {
      let exists:any = returnable.find((c:IResource) => c.name === component.name);
      if(exists){
        exists.quantity += component.quantity;
      } else {
        returnable.push(component);
      }
    })

    return returnable;
  }

  get baseComponentsFormatted(){
    return this.baseComponents.map(c => c.formatted)
  }

  get formatted(){
    let j:any = this;
    delete j.index;
    if(j.components.length === 0) {
      delete j.components;
    } else {
      j.components = j.components.map((c:Resource) => c.formatted);
    }
    return j;
  }

  qty(qty: number){
    this.quantity = qty;
    return this;
  }
}