// const gameLogicInit = require("./game-logic");

// describe("Gameboard Class", () => {
//   beforeEach(() => {
//     init();
//   });

//   test("should initialize ships, missedShots, and currentCoords arrays", () => {
//     expect(gameboard.ships).toBeInstanceOf(Array);
//     expect(gameboard.ships).toHaveLength(10); // 4 + 3 + 2 + 1 = 10 ships
//     expect(gameboard.missedShots).toBeInstanceOf(Array);
//     expect(gameboard.missedShots).toHaveLength(0);
//     expect(gameboard.currentCoords).toBeInstanceOf(Array);
//     expect(gameboard.currentCoords.length).toBeGreaterThan(0); // Since ships are initialized, this will have some coords
//   });

//   test("should generate ships with correct lengths", () => {
//     const shipLengths = gameboard.ships.map((ship) => ship.ship.length);
//     const expectedLengths = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
//     expect(shipLengths.sort()).toEqual(expectedLengths.sort());
//   });

//   test("should generate coordinates within valid range and without overlap", () => {
//     const coords = gameboard.ships.flatMap((ship) => ship.coords);
//     coords.forEach(([x, y]) => {
//       expect(x).toBeGreaterThanOrEqual(0);
//       expect(x).toBeLessThan(10);
//       expect(y).toBeGreaterThanOrEqual(0);
//       expect(y).toBeLessThan(10);
//     });

//     const uniqueCoords = new Set(coords.map((coord) => coord.toString()));
//     expect(uniqueCoords.size).toBe(coords.length);
//   });

//   test("_generateRandomNumber should return a number between 0 and 9", () => {
//     for (let i = 0; i < 100; i++) {
//       const num = gameboard._generateRandomNumber();
//       expect(num).toBeGreaterThanOrEqual(0);
//       expect(num).toBeLessThan(10);
//     }
//   });

//   test("_predictCollision should correctly identify collisions", () => {
//     // Add a ship to currentCoords for testing
//     gameboard.currentCoords = [];
//     gameboard.currentCoords.push([1, 1], [1, 2], [1, 3]);

//     expect(gameboard._predictCollision("x", 1, 1, 3)).toBe(true); // Collision
//     expect(gameboard._predictCollision("y", 1, 1, 3)).toBe(true); // Collision
//     expect(gameboard._predictCollision("x", 5, 5, 3)).toBe(false); // No Collision
//   });

//   test("_isValidCoord should return true for valid coordinates and false for invalid ones", () => {
//     expect(gameboard._isValidCoord(5, 5, 3, true)).toBe(true);
//     expect(gameboard._isValidCoord(8, 5, 3, true)).toBe(false);
//     expect(gameboard._isValidCoord(5, 5, 3, false)).toBe(true);
//     expect(gameboard._isValidCoord(5, 8, 3, false)).toBe(false);
//   });
// });

// function arraysEqual(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   return arr1.every((element, index) => element === arr2[index]);
// }
