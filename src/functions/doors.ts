import DoorModel from "../models/DoorModel";

function createDoors(quantity: number, doorWithGift: number): DoorModel[] {
  return Array.from({ length: quantity }, (_, index) => {
    const number: number = index + 1;
    return new DoorModel(number, number === doorWithGift);
  });
}

function updateDoors(doors: DoorModel[], modifiedDoor: DoorModel): DoorModel[] {
  return doors.map((door) => {
    if (door.number === modifiedDoor.number) {
      return modifiedDoor;
    } else {
      return modifiedDoor.opened ? door : door.deselect();
    }
  });
}

export { createDoors, updateDoors };
