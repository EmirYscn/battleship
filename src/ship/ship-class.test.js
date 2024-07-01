const Ship = require("./ship-class");

test("Ship object's hit count increase by 1 when hit() is called on it", () => {
  const myShip = new Ship(2);
  myShip.hit();
  expect(myShip.number_hit).toBe(1);
});

test("Ship object's isSunk() method returns false if ship is not sunk, by comparing number_hit and length", () => {
  const myShip = new Ship(2);
  myShip.hit();
  console.log(myShip.getStatus());
  expect(myShip.isSunk()).toBe(false);
});

test("Ship object's isSunk() method returns true if ship is sunk, by comparing number_hit and length", () => {
  const myShip = new Ship(2);
  myShip.hit();
  myShip.hit();
  console.log(myShip.getStatus());
  expect(myShip.isSunk()).toBe(true);
});
