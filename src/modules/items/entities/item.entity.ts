export interface ItemInterface extends CreateItemInterface {
  _id: string;
}

export interface CreateItemInterface {
  name: string;
}

export const restricted = [];

export class ItemEntity {
  public item: ItemInterface | CreateItemInterface;

  constructor(item: ItemInterface | CreateItemInterface) {
    this.item = item;
  }
}
