export interface IResource {
  index: number;
  _name: string;
  name: string;
  quantity: number;
  components?: IResource[];
  baseComponents: IResource[];
  qty: (qty: number) => IResource;
  scale: (qty: number) => IResource;
  formatted: any;
  gatherable: boolean;
}

let index = 0;

export default class Resource implements IResource {

  index: number = index++;
  _name: string;
  quantity: number = 1;
  components: IResource[];
  gatherable: boolean = true;

  constructor(name: string, components: IResource[]){
    this._name = name;
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
    let j:any = this.deep;
    delete j._name;
    delete j.gatherable;
    delete j.index;
    if(j.components){
      if(j.components.length >= 0) {
        j.components = j.components.map((c:Resource) => c.formatted);
      } else {
        delete j.components;
      }
    }
    return j;
  }

  set name(val){
    throw new Error('Name is immutable.');
  }

  get name(){
    return this._name + (this.gatherable ? '' : ' (not gatherable)');
  }
  
  get deep(){
    let d = JSON.parse(JSON.stringify(this));
    d.name = this.name;
    d.components = this.components;
    return d;
  }

  qty(qty: number){
    this.quantity = qty;
    //this.components.map(component => component.scale(qty))
    // need to get this solved for scaling, so that it can set all components below it as well.
    return this;
  }

  scale(qty: number){
    return this.qty(this.quantity * qty);
  }
}