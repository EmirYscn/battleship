import { Gameboard } from "./gameboard-class";
// jest.mock("../ship/ship-class"); // Mock the Ship class

describe("Gameboard Class", () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test("should initialize ships, missedShots, and currentCoords arrays", () => {
    expect(gameboard.ships).toBeInstanceOf(Array);
    expect(gameboard.ships).toHaveLength(10); // 4 + 3 + 2 + 1 = 10 ships
    expect(gameboard.missedShots).toBeInstanceOf(Array);
    expect(gameboard.missedShots).toHaveLength(0);
    expect(gameboard.currentCoords).toBeInstanceOf(Array);
    expect(gameboard.currentCoords.length).toBeGreaterThan(0); // Since ships are initialized, this will have some coords
  });

  test("should generate ships with correct lengths", () => {
    const shipLengths = gameboard.ships.map((ship) => ship.ship.length);
    const expectedLengths = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
    expect(shipLengths.sort()).toEqual(expectedLengths.sort());
  });

  test("should generate coordinates within valid range and without overlap", () => {
    const coords = gameboard.ships.flatMap((ship) => ship.coords);
    coords.forEach(([x, y]) => {
      expect(x).toBeGreaterThanOrEqual(0);
      expect(x).toBeLessThan(10);
      expect(y).toBeGreaterThanOrEqual(0);
      expect(y).toBeLessThan(10);
    });

    const uniqueCoords = new Set(coords.map((coord) => coord.toString()));
    expect(uniqueCoords.size).toBe(coords.length);
  });

  test("_generateRandomNumber should return a number between 0 and 9", () => {
    for (let i = 0; i < 100; i++) {
      const num = gameboard._generateRandomNumber();
      expect(num).toBeGreaterThanOrEqual(0);
      expect(num).toBeLessThan(10);
    }
  });

  test("_predictCollision should correctly identify collisions", () => {
    // Add a ship to currentCoords for testing
    gameboard.currentCoords = [];
    gameboard.currentCoords.push([1, 1], [1, 2], [1, 3]);

    expect(gameboard._predictCollision("x", 1, 1, 3)).toBe(true); // Collision
    expect(gameboard._predictCollision("y", 1, 1, 3)).toBe(true); // Collision
    expect(gameboard._predictCollision("x", 5, 5, 3)).toBe(false); // No Collision
  });

  test("_isValidCoord should return true for valid coordinates and false for invalid ones", () => {
    expect(gameboard._isValidCoord(5, 5, 3, true)).toBe(true);
    expect(gameboard._isValidCoord(8, 5, 3, true)).toBe(false);
    expect(gameboard._isValidCoord(5, 5, 3, false)).toBe(true);
    expect(gameboard._isValidCoord(5, 8, 3, false)).toBe(false);
  });

  // getUpperRow

  test("getUpperRow function returns expected coord array with optimal coord with length of 1", () => {
    const upperRow = gameboard._getUpperRowCoords([[2, 3]], 1, false);
    expect(upperRow).toEqual([
      [1, 2],
      [2, 2],
      [3, 2],
    ]);
  });
  test("getUpperRow function returns expected coord array with edge case of coord being at the corner of board with length of 1 (1)", () => {
    const upperRow = gameboard._getUpperRowCoords([[0, 0]], 1, false);
    expect(upperRow).toEqual([]);
  });
  test("getUpperRow function returns expected coord array with edge case of coord being at the corner of board with length of 1 (2)", () => {
    const upperRow = gameboard._getUpperRowCoords([[0, 9]], 1, false);
    expect(upperRow).toEqual([
      [0, 8],
      [1, 8],
    ]);
  });
  test("getUpperRow function returns expected coord array with edge case of coord being at the corner of board with length of 1 (3)", () => {
    const upperRow = gameboard._getUpperRowCoords([[9, 0]], 1, true);
    expect(upperRow).toEqual([]);
  });
  test("getUpperRow function returns expected coord array with edge case of coord being at the corner of board with length of 1 (4)", () => {
    const upperRow = gameboard._getUpperRowCoords([[9, 9]], 1, true);
    expect(upperRow).toEqual([
      [8, 8],
      [9, 8],
    ]);
  });

  test("getUpperRow function returns expected coord array with optimal coord with length of 2 (orientationX is true)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [2, 3],
        [3, 3],
      ],
      2,
      true
    );
    expect(upperRow).toEqual([
      [1, 2],
      [2, 2],
      [3, 2],
      [4, 2],
    ]);
  });
  test("getUpperRow function returns expected coord array with optimal coord with length of 2 (orientationX is false)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [2, 3],
        [2, 4],
      ],
      2,
      false
    );
    expect(upperRow).toEqual([
      [1, 2],
      [2, 2],
      [3, 2],
    ]);
  });
  test("getUpperRow function returns expected coord array with edge case of coord being at the corner of board with length of 2 (1) (orientationX is true)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [0, 0],
        [1, 0],
      ],
      2,
      true
    );
    expect(upperRow).toEqual([]);
  });
  test("getUpperRow function returns expected coord array with edge case of coord being at the corner of board with length of 2 (1) (orientationX is false)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [0, 0],
        [0, 1],
      ],
      2,
      false
    );
    expect(upperRow).toEqual([]);
  });
  test("getUpperRow function returns expected coord array with edge case of coord being at the corner of board with length of 2 (2) (orientationX is true)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [0, 9],
        [1, 9],
      ],
      2,
      true
    );
    expect(upperRow).toEqual([
      [0, 8],
      [1, 8],
      [2, 8],
    ]);
  });
  test("getUpperRow function returns expected coord array with edge case of coord being at the corner of board with length of 2 (2) (orientationX is false)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [0, 8],
        [0, 9],
      ],
      2,
      false
    );
    expect(upperRow).toEqual([
      [0, 7],
      [1, 7],
    ]);
  });
  test("getUpperRow function returns expected coord array with edge case of coord being at the corner of board with length of 2 (3) (orientationX is true)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [8, 0],
        [9, 0],
      ],
      2,
      true
    );
    expect(upperRow).toEqual([]);
  });
  test("getUpperRow function returns expected coord array with edge case of coord being at the corner of board with length of 2 (3) (orientationX is false)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [9, 0],
        [9, 1],
      ],
      2,
      false
    );
    expect(upperRow).toEqual([]);
  });
  test("getUpperRow function returns expected coord array with edge case of coord being at the corner of board with length of 2 (4) (orientationX is true)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [8, 9],
        [9, 9],
      ],
      2,
      true
    );
    expect(upperRow).toEqual([
      [7, 8],
      [8, 8],
      [9, 8],
    ]);
  });
  test("getUpperRow function returns expected coord array with edge case of coord being at the corner of board with length of 2 (4) (orientationX is false)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [9, 8],
        [9, 9],
      ],
      2,
      false
    );
    expect(upperRow).toEqual([
      [8, 7],
      [9, 7],
    ]);
  });
  test("getUpperRow function returns expected coord array with optimal coord with length of 3 (orientationX is true)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [2, 3],
        [3, 3],
        [4, 3],
      ],
      3,
      true
    );
    expect(upperRow).toEqual([
      [1, 2],
      [2, 2],
      [3, 2],
      [4, 2],
      [5, 2],
    ]);
  });
  test("getUpperRow function returns expected coord array with optimal coord with length of 3 (orientationX is false)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [2, 3],
        [2, 4],
        [2, 5],
      ],
      3,
      false
    );
    expect(upperRow).toEqual([
      [1, 2],
      [2, 2],
      [3, 2],
    ]);
  });
  test("getUpperRow function returns expected coord array with edge case of coord being at the corner of board with length of 3 (1) (orientationX is true)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      3,
      true
    );
    expect(upperRow).toEqual([]);
  });
  test("getUpperRow function returns expected coord array with edge case of coord being at the corner of board with length of 3 (1) (orientationX is false)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [0, 0],
        [0, 1],
        [0, 2],
      ],
      3,
      true
    );
    expect(upperRow).toEqual([]);
  });
  test("getUpperRow function returns expected coord array with edge case of coord being at the corner of board with length of 3 (2) (orientationX is true)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [0, 9],
        [1, 9],
        [2, 9],
      ],
      3,
      true
    );
    expect(upperRow).toEqual([
      [0, 8],
      [1, 8],
      [2, 8],
      [3, 8],
    ]);
  });
  test("getUpperRow function returns expected coord array with edge case of coord being at the corner of board with length of 3 (2) (orientationX is false)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [0, 7],
        [0, 8],
        [0, 9],
      ],
      3,
      false
    );
    expect(upperRow).toEqual([
      [0, 6],
      [1, 6],
    ]);
  });
  test("getUpperRow function returns expected coord array with edge case of coord being at the corner of board with length of 3 (3) (orientationX is true)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [7, 0],
        [8, 0],
        [9, 0],
      ],
      3,
      true
    );
    expect(upperRow).toEqual([]);
  });
  test("getUpperRow function returns expected coord array with edge case of coord being at the corner of board with length of 3 (3) (orientationX is false)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [9, 0],
        [9, 1],
        [9, 2],
      ],
      3,
      false
    );
    expect(upperRow).toEqual([]);
  });
  test("getUpperRow function returns expected coord array with edge case of coord being at the corner of board with length of 3 (4) (orientationX is true)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [7, 9],
        [8, 9],
        [9, 9],
      ],
      3,
      true
    );
    expect(upperRow).toEqual([
      [6, 8],
      [7, 8],
      [8, 8],
      [9, 8],
    ]);
  });
  test("getUpperRow function returns expected coord array with edge case of coord being at the corner of board with length of 3 (4) (orientationX is false)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [9, 7],
        [9, 8],
        [9, 9],
      ],
      3,
      false
    );
    expect(upperRow).toEqual([
      [8, 6],
      [9, 6],
    ]);
  });
  test("getUpperRow function returns expected coord array with optimal coord with length of 4 (orientationX is true)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [2, 3],
        [3, 3],
        [4, 3],
        [5, 3],
      ],
      4,
      true
    );
    expect(upperRow).toEqual([
      [1, 2],
      [2, 2],
      [3, 2],
      [4, 2],
      [5, 2],
      [6, 2],
    ]);
  });
  test("getUpperRow function returns expected coord array with optimal coord with length of 4 (orientationX is false)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [2, 3],
        [2, 4],
        [2, 5],
        [2, 6],
      ],
      4,
      false
    );
    expect(upperRow).toEqual([
      [1, 2],
      [2, 2],
      [3, 2],
    ]);
  });
  test("getUpperRow function returns expected coord array with edge case of coord being at the corner of board with length of 4 (1) (orientationX is true)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
      ],
      4,
      true
    );
    expect(upperRow).toEqual([]);
  });
  test("getUpperRow function returns expected coord array with edge case of coord being at the corner of board with length of 4 (1) (orientationX is false)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
      ],
      4,
      false
    );
    expect(upperRow).toEqual([]);
  });
  test("getUpperRow function returns expected coord array with edge case of coord being at the corner of board with length of 4 (2) (orientationX is true)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [0, 9],
        [1, 9],
        [2, 9],
        [3, 9],
      ],
      4,
      true
    );
    expect(upperRow).toEqual([
      [0, 8],
      [1, 8],
      [2, 8],
      [3, 8],
      [4, 8],
    ]);
  });
  test("getUpperRow function returns expected coord array with edge case of coord being at the corner of board with length of 4 (2) (orientationX is false)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [0, 6],
        [0, 7],
        [0, 8],
        [0, 9],
      ],
      4,
      false
    );
    expect(upperRow).toEqual([
      [0, 5],
      [1, 5],
    ]);
  });
  test("getUpperRow function returns expected coord array with edge case of coord being at the corner of board with length of 4 (3) (orientationX is true)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [6, 0],
        [7, 0],
        [8, 0],
        [9, 0],
      ],
      4,
      true
    );
    expect(upperRow).toEqual([]);
  });
  test("getUpperRow function returns expected coord array with edge case of coord being at the corner of board with length of 4 (3) (orientationX is false)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [9, 0],
        [9, 1],
        [9, 2],
        [9, 3],
      ],
      4,
      false
    );
    expect(upperRow).toEqual([]);
  });
  test("getUpperRow function returns expected coord array with edge case of coord being at the corner of board with length of 4 (4) (orientationX is true)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [6, 9],
        [7, 9],
        [8, 9],
        [9, 9],
      ],
      4,
      true
    );
    expect(upperRow).toEqual([
      [5, 8],
      [6, 8],
      [7, 8],
      [8, 8],
      [9, 8],
    ]);
  });
  test("getUpperRow function returns expected coord array with edge case of coord being at the corner of board with length of 4 (4) (orientationX is false)", () => {
    const upperRow = gameboard._getUpperRowCoords(
      [
        [9, 6],
        [9, 7],
        [9, 8],
        [9, 9],
      ],
      4,
      false
    );
    expect(upperRow).toEqual([
      [8, 5],
      [9, 5],
    ]);
  });
  // getBottomRow

  test("getBottomRow function returns expected coord array with optimal coord with length of 1", () => {
    const bottomRow = gameboard._getBottomRowCoords([[2, 3]], 1, true);
    expect(bottomRow).toEqual(
      [
        [1, 4],
        [2, 4],
        [3, 4],
      ].reverse()
    );
  });
  test("getBottomRow function returns expected coord array with edge case of coord being at the corner of board with length of 1 (1)", () => {
    const bottomRow = gameboard._getBottomRowCoords([[0, 0]], 1, false);
    expect(bottomRow).toEqual(
      [
        [0, 1],
        [1, 1],
      ].reverse()
    );
  });
  test("getBottomRow function returns expected coord array with edge case of coord being at the corner of board with length of 1 (2)", () => {
    const bottomRow = gameboard._getBottomRowCoords([[0, 9]], 1, false);
    expect(bottomRow).toEqual([]);
  });
  test("getBottomRow function returns expected coord array with edge case of coord being at the corner of board with length of 1 (3)", () => {
    const bottomRow = gameboard._getBottomRowCoords([[9, 0]], 1, true);
    expect(bottomRow).toEqual(
      [
        [8, 1],
        [9, 1],
      ].reverse()
    );
  });
  test("getBottomRow function returns expected coord array with edge case of coord being at the corner of board with length of 1 (4)", () => {
    const bottomRow = gameboard._getBottomRowCoords([[9, 9]], 1, true);
    expect(bottomRow).toEqual([]);
  });

  test("getBottomRow function returns expected coord array with optimal coord with length of 2 (orientationX is true)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [2, 3],
        [3, 3],
      ],
      2,
      true
    );
    expect(bottomRow).toEqual(
      [
        [1, 4],
        [2, 4],
        [3, 4],
        [4, 4],
      ].reverse()
    );
  });
  test("getBottomRow function returns expected coord array with optimal coord with length of 2 (orientationX is false)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [2, 3],
        [2, 4],
      ],
      2,
      false
    );
    expect(bottomRow).toEqual(
      [
        [1, 5],
        [2, 5],
        [3, 5],
      ].reverse()
    );
  });
  test("getBottomRow function returns expected coord array with edge case of coord being at the corner of board with length of 2 (1) (orientationX is true)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [0, 0],
        [1, 0],
      ],
      2,
      true
    );
    expect(bottomRow).toEqual(
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ].reverse()
    );
  });
  test("getBottomRow function returns expected coord array with edge case of coord being at the corner of board with length of 2 (1) (orientationX is false)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [0, 0],
        [0, 1],
      ],
      2,
      false
    );
    expect(bottomRow).toEqual(
      [
        [0, 2],
        [1, 2],
      ].reverse()
    );
  });
  test("getBottomRow function returns expected coord array with edge case of coord being at the corner of board with length of 2 (2) (orientationX is true)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [0, 9],
        [1, 9],
      ],
      2,
      true
    );
    expect(bottomRow).toEqual([].reverse());
  });
  test("getBottomRow function returns expected coord array with edge case of coord being at the corner of board with length of 2 (2) (orientationX is false)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [0, 8],
        [0, 9],
      ],
      2,
      false
    );
    expect(bottomRow).toEqual([]);
  });
  test("getBottomRow function returns expected coord array with edge case of coord being at the corner of board with length of 2 (3) (orientationX is true)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [8, 0],
        [9, 0],
      ],
      2,
      true
    );
    expect(bottomRow).toEqual(
      [
        [7, 1],
        [8, 1],
        [9, 1],
      ].reverse()
    );
  });
  test("getBottomRow function returns expected coord array with edge case of coord being at the corner of board with length of 2 (3) (orientationX is false)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [9, 0],
        [9, 1],
      ],
      2,
      false
    );
    expect(bottomRow).toEqual(
      [
        [8, 2],
        [9, 2],
      ].reverse()
    );
  });
  test("getBottomRow function returns expected coord array with edge case of coord being at the corner of board with length of 2 (4) (orientationX is true)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [8, 9],
        [9, 9],
      ],
      2,
      true
    );
    expect(bottomRow).toEqual([]);
  });
  test("getBottomRow function returns expected coord array with edge case of coord being at the corner of board with length of 2 (4) (orientationX is false)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [9, 8],
        [9, 9],
      ],
      2,
      true
    );
    expect(bottomRow).toEqual([]);
  });
  test("getBottomRow function returns expected coord array with optimal coord with length of 3 (orientationX is true)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [2, 3],
        [3, 3],
        [4, 3],
      ],
      3,
      true
    );
    expect(bottomRow).toEqual(
      [
        [1, 4],
        [2, 4],
        [3, 4],
        [4, 4],
        [5, 4],
      ].reverse()
    );
  });
  test("getBottomRow function returns expected coord array with optimal coord with length of 3 (orientationX is false)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [2, 3],
        [2, 4],
        [2, 5],
      ],
      3,
      false
    );
    expect(bottomRow).toEqual(
      [
        [1, 6],
        [2, 6],
        [3, 6],
      ].reverse()
    );
  });
  test("getBottomRow function returns expected coord array with edge case of coord being at the corner of board with length of 3 (1) (orientationX is true)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      3,
      true
    );
    expect(bottomRow).toEqual(
      [
        [0, 1],
        [1, 1],
        [2, 1],
        [3, 1],
      ].reverse()
    );
  });
  test("getBottomRow function returns expected coord array with edge case of coord being at the corner of board with length of 3 (1) (orientationX is false)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [0, 0],
        [0, 1],
        [0, 2],
      ],
      3,
      true
    );
    expect(bottomRow).toEqual(
      [
        [0, 3],
        [1, 3],
      ].reverse()
    );
  });
  test("getBottomRow function returns expected coord array with edge case of coord being at the corner of board with length of 3 (2) (orientationX is true)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [0, 9],
        [1, 9],
        [2, 9],
      ],
      3,
      true
    );
    expect(bottomRow).toEqual([]);
  });
  test("getBottomRow function returns expected coord array with edge case of coord being at the corner of board with length of 3 (2) (orientationX is false)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [0, 7],
        [0, 8],
        [0, 9],
      ],
      3,
      false
    );
    expect(bottomRow).toEqual([]);
  });
  test("getBottomRow function returns expected coord array with edge case of coord being at the corner of board with length of 3 (3) (orientationX is true)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [7, 0],
        [8, 0],
        [9, 0],
      ],
      3,
      true
    );
    expect(bottomRow).toEqual(
      [
        [6, 1],
        [7, 1],
        [8, 1],
        [9, 1],
      ].reverse()
    );
  });
  test("getBottomRow function returns expected coord array with edge case of coord being at the corner of board with length of 3 (3) (orientationX is false)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [9, 0],
        [9, 1],
        [9, 2],
      ],
      3,
      false
    );
    expect(bottomRow).toEqual(
      [
        [8, 3],
        [9, 3],
      ].reverse()
    );
  });
  test("getBottomRow function returns expected coord array with edge case of coord being at the corner of board with length of 3 (4) (orientationX is true)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [7, 9],
        [8, 9],
        [9, 9],
      ],
      3,
      true
    );
    expect(bottomRow).toEqual([]);
  });
  test("getBottomRow function returns expected coord array with edge case of coord being at the corner of board with length of 3 (4) (orientationX is false)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [9, 7],
        [9, 8],
        [9, 9],
      ],
      3,
      false
    );
    expect(bottomRow).toEqual([]);
  });
  test("getBottomRow function returns expected coord array with optimal coord with length of 4 (orientationX is true)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [2, 3],
        [3, 3],
        [4, 3],
        [5, 3],
      ],
      4,
      true
    );
    expect(bottomRow).toEqual(
      [
        [1, 4],
        [2, 4],
        [3, 4],
        [4, 4],
        [5, 4],
        [6, 4],
      ].reverse()
    );
  });
  test("getBottomRow function returns expected coord array with optimal coord with length of 4 (orientationX is false)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [2, 3],
        [2, 4],
        [2, 5],
        [2, 6],
      ],
      4,
      false
    );
    expect(bottomRow).toEqual(
      [
        [1, 7],
        [2, 7],
        [3, 7],
      ].reverse()
    );
  });
  test("getBottomRow function returns expected coord array with edge case of coord being at the corner of board with length of 4 (1) (orientationX is true)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
      ],
      4,
      true
    );
    expect(bottomRow).toEqual(
      [
        [0, 1],
        [1, 1],
        [2, 1],
        [3, 1],
        [4, 1],
      ].reverse()
    );
  });
  test("getBottomRow function returns expected coord array with edge case of coord being at the corner of board with length of 4 (1) (orientationX is false)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
      ],
      4,
      false
    );
    expect(bottomRow).toEqual(
      [
        [0, 4],
        [1, 4],
      ].reverse()
    );
  });
  test("getBottomRow function returns expected coord array with edge case of coord being at the corner of board with length of 4 (2) (orientationX is true)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [0, 9],
        [1, 9],
        [2, 9],
        [3, 9],
      ],
      4,
      true
    );
    expect(bottomRow).toEqual([]);
  });
  test("getBottomRow function returns expected coord array with edge case of coord being at the corner of board with length of 4 (2) (orientationX is false)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [0, 6],
        [0, 7],
        [0, 8],
        [0, 9],
      ],
      4,
      false
    );
    expect(bottomRow).toEqual([]);
  });
  test("getBottomRow function returns expected coord array with edge case of coord being at the corner of board with length of 4 (3) (orientationX is true)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [6, 0],
        [7, 0],
        [8, 0],
        [9, 0],
      ],
      4,
      true
    );
    expect(bottomRow).toEqual(
      [
        [5, 1],
        [6, 1],
        [7, 1],
        [8, 1],
        [9, 1],
      ].reverse()
    );
  });
  test("getBottomRow function returns expected coord array with edge case of coord being at the corner of board with length of 4 (3) (orientationX is false)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [9, 0],
        [9, 1],
        [9, 2],
        [9, 3],
      ],
      4,
      false
    );
    expect(bottomRow).toEqual(
      [
        [8, 4],
        [9, 4],
      ].reverse()
    );
  });
  test("getBottomRow function returns expected coord array with edge case of coord being at the corner of board with length of 4 (4) (orientationX is true)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [6, 9],
        [7, 9],
        [8, 9],
        [9, 9],
      ],
      4,
      true
    );
    expect(bottomRow).toEqual([]);
  });
  test("getBottomRow function returns expected coord array with edge case of coord being at the corner of board with length of 4 (4) (orientationX is false)", () => {
    const bottomRow = gameboard._getBottomRowCoords(
      [
        [9, 6],
        [9, 7],
        [9, 8],
        [9, 9],
      ],
      4,
      false
    );
    expect(bottomRow).toEqual([]);
  });
  test("getRight function returns expected coord array with optimal coord with length of 1", () => {
    const right = gameboard._getRightCoords([[2, 3]], 1, true);
    expect(right).toEqual([[3, 3]]);
  });
  test.only("getRight function returns expected coord array with edge case of coord being at the corner of board with length of 1 (1)", () => {
    const right = gameboard._getRightCoords([[0, 0]], 1, false);
    expect(right).toEqual([[1, 0]]);
  });
  test("getRight function returns expected coord array with edge case of coord being at the corner of board with length of 1 (2)", () => {
    const right = gameboard._getRightCoords([[9, 0]], 1, false);
    expect(right).toEqual([]);
  });
  test("getRight function returns expected coord array with edge case of coord being at the corner of board with length of 1 (3)", () => {
    const right = gameboard._getRightCoords([[0, 9]], 1, false);
    expect(right).toEqual([[1, 9]]);
  });
  test("getRight function returns expected coord array with edge case of coord being at the corner of board with length of 1 (4)", () => {
    const right = gameboard._getRightCoords([[9, 9]], 1, false);
    expect(right).toEqual([]);
  });
  test("getRight function returns expected coord array with optimal coord with length of 2 (orientationX is true)", () => {
    const right = gameboard._getRightCoords(
      [
        [2, 3],
        [3, 3],
      ],
      2,
      true
    );
    expect(right).toEqual([[4, 3]]);
  });
  test("getRight function returns expected coord array with optimal coord with length of 2 (orientationX is false)", () => {
    const right = gameboard._getRightCoords(
      [
        [2, 3],
        [2, 4],
      ],
      2,
      false
    );
    expect(right).toEqual(
      [
        [3, 3],
        [3, 4],
      ].reverse()
    );
  });
  test("getRight function returns expected coord array with edge case of coord being at the corner of board with length of 2 (1) (orientationX is true)", () => {
    const right = gameboard._getRightCoords(
      [
        [0, 0],
        [1, 0],
      ],
      2,
      true
    );
    expect(right).toEqual([[2, 0]]);
  });
  test.only("getRight function returns expected coord array with edge case of coord being at the corner of board with length of 2 (1) (orientationX is false)", () => {
    const right = gameboard._getRightCoords(
      [
        [0, 0],
        [0, 1],
      ],
      2,
      false
    );
    expect(right).toEqual(
      [
        [1, 0],
        [1, 1],
      ].reverse()
    );
  });
  test.only("getRight function returns expected coord array with edge case of coord being at the corner of board with length of 2 (2) (orientationX is true)", () => {
    const right = gameboard._getRightCoords(
      [
        [0, 0],
        [0, 1],
      ],
      2,
      false
    );
    expect(right).toEqual(
      [
        [1, 0],
        [1, 1],
      ].reverse()
    );
  });
});

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((element, index) => element === arr2[index]);
}
