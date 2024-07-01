const Gameboard = require("./gameboard-class");

test("gameboard map is being generated correctly", () => {
  const myGameboard = new Gameboard();
  myGameboard.ships.forEach((ship, index) => {
    console.log(index, ship.coords);
    console.log(index, ship.ship);
  });
  console.log(myGameboard.currentCoords);
  expect(myGameboard.ships).not.toBe([]);
});

test.only("gameboard map is being generated correctly", () => {
  const myGameboard = new Gameboard();
  console.log(myGameboard.ships);
  myGameboard.receiveAttack([9, 6]);
  myGameboard.ships.forEach((ship, index) => {
    console.log(index, ship.coords, ship.ship);
  });
  console.log(myGameboard.currentCoords);
  // expect(myGameboard.ships).not.toBe([]);
});

test("gameboard map is being generated correctly", () => {
  const myGameboard = new Gameboard();
  myGameboard.ships.forEach((ship) => {
    ship.ship.sunk = true;
  });
  myGameboard.ships.forEach((ship, index) => {
    console.log(index, ship.coords, ship.ship);
  });
  console.log(myGameboard.ships);
  console.log(myGameboard.hasAllShipsBeenSunk());

  myGameboard.ships[0].ship.sunk = false;
  console.log(myGameboard.ships);
  // expect(myGameboard.ships).not.toBe([]);
});
