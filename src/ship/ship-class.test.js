import { Ship } from "./ship-class";

describe("Ship Class", () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(3);
  });

  test("should initialize with correct length, number_hit as 0, and sunk as false", () => {
    expect(ship.length).toBe(3);
    expect(ship.number_hit).toBe(0);
    expect(ship.sunk).toBe(false);
  });

  test("getStatus should return correct status", () => {
    const status = ship.getStatus();
    expect(status).toEqual({ length: 3, hit: 0, sunk: false });
  });

  test("hit should increase number_hit and update sunk status", () => {
    ship.hit();
    expect(ship.number_hit).toBe(1);
    expect(ship.sunk).toBe(false);

    ship.hit();
    expect(ship.number_hit).toBe(2);
    expect(ship.sunk).toBe(false);

    ship.hit();
    expect(ship.number_hit).toBe(3);
    expect(ship.sunk).toBe(true);
  });

  test("hit should not increase number_hit or change sunk status if already sunk", () => {
    ship.hit();
    ship.hit();
    ship.hit(); // ship is now sunk
    expect(ship.number_hit).toBe(3);
    expect(ship.sunk).toBe(true);

    ship.hit(); // should have no effect
    expect(ship.number_hit).toBe(3);
    expect(ship.sunk).toBe(true);
  });

  test("isSunk should return true if number_hit equals length, false otherwise", () => {
    expect(ship.isSunk()).toBe(false);

    ship.hit();
    expect(ship.isSunk()).toBe(false);

    ship.hit();
    expect(ship.isSunk()).toBe(false);

    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
