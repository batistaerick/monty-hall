class DoorModel {
  #number: number;
  #hasGift: boolean;
  #selected: boolean;
  #opened: boolean;

  constructor(
    number: number,
    hasGift: boolean = false,
    selected: boolean = false,
    opened: boolean = false
  ) {
    this.#number = number;
    this.#hasGift = hasGift;
    this.#selected = selected;
    this.#opened = opened;
  }

  get number() {
    return this.#number;
  }

  get hasGift() {
    return this.#hasGift;
  }

  get selected() {
    return this.#selected;
  }

  get opened() {
    return this.#opened;
  }

  get closed() {
    return !this.#opened;
  }

  deselect() {
    return new DoorModel(this.number, this.hasGift, false, this.opened);
  }

  changeSelection() {
    return new DoorModel(
      this.number,
      this.hasGift,
      !this.selected,
      this.opened
    );
  }

  open() {
    return new DoorModel(this.number, this.hasGift, this.selected, true);
  }
}

export default DoorModel;
