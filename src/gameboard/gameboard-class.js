import { Ship } from "../ship/ship-class";

class Gameboard {
  constructor() {
    this.ships = [];
    this.missedShots = [];
    this.hitShots = [];
    this.currentCoords = [];
    this.surroundingCoords = [];
    this.surroundingShots = [];
    this._generateShipMap();
  }

  receiveAttack(coordinate) {
    const ship = this._getShip(coordinate);
    if (ship && !ship.sunk) {
      ship.hit();
      this.hitShots.push(coordinate);
      this.currentCoords.splice(
        findIndexofItemInArray(this.currentCoords, coordinate),
        1
      );
      return true;
    } else {
      this.missedShots.push(coordinate);
      return false;
    }
  }

  hasAllShipsBeenSunk() {
    return this.ships.every((ship) => {
      return ship.ship.sunk === true;
    });
  }

  _getShip(coordinate) {
    for (const ship of this.ships) {
      for (const coord of ship.coords) {
        if (arraysEqual(coord, coordinate)) {
          return ship.ship;
        }
      }
    }
    return null;
  }
  _getShipSurroundingCoords(coordinate) {
    for (const ship of this.ships) {
      for (const coord of ship.coords) {
        if (arraysEqual(coord, coordinate)) {
          return ship.surroundingCoords;
        }
      }
    }
    return null;
  }

  _generateShipMap() {
    this.ships.push(this._generateShip(4));

    for (let i = 0; i < 2; i++) {
      this.ships.push(this._generateShip(3));
    }

    for (let i = 0; i < 3; i++) {
      this.ships.push(this._generateShip(2));
    }

    for (let i = 0; i < 4; i++) {
      this.ships.push(this._generateShip(1));
    }

    // console.log(this.currentCoords);
    // console.log(this.surroundingCoords);
    // this.surroundingCoords = [...new Set(this.surroundingCoords)];
    this.surroundingCoords = removeDuplicateArrays(this.surroundingCoords);
    // console.log(this.surroundingCoords);
    console.log(this.ships);
  }

  _generateShip(length, x_coord = null, y_coord = null) {
    const { coords, surroundingCoords } = this._generateCoord(
      length,
      x_coord,
      y_coord
    );
    return {
      coords,
      surroundingCoords,
      ship: new Ship(length),
    };
  }

  _generateCoord(length, x_coord = null, y_coord = null) {
    let x = x_coord === null ? this._generateRandomNumber() : x_coord;
    let y = y_coord === null ? this._generateRandomNumber() : y_coord;
    const orientationX = Math.random() >= 0.5;
    let attempts = 0;
    const maxAttempts = 200;

    while (attempts < maxAttempts) {
      attempts++;
      if (
        this._isValidCoord(x, y, length, orientationX) &&
        !this._predictCollisionWithCurrentCoords(
          orientationX ? "x" : "y",
          x,
          y,
          length
        ) &&
        !this._predictCollisionWithSurroundingCoords(
          orientationX ? "x" : "y",
          x,
          y,
          length
        )
      ) {
        break;
      }
      x = this._generateRandomNumber();
      y = this._generateRandomNumber();
    }

    if (attempts >= maxAttempts) {
      throw new Error(
        `Failed to generate valid coordinates after ${maxAttempts} attempts`
      );
    }

    const coords = [];
    for (let i = 0; i < length; i++) {
      coords.push([x, y]);
      this.currentCoords.push([x, y]);
      if (orientationX) {
        x++;
      } else {
        y++;
      }
    }

    const surroundingCoords = this._getSurroundingCoords(
      coords,
      length,
      orientationX
    );
    this.surroundingCoords.push(...surroundingCoords);

    return { coords, surroundingCoords };
  }

  _getSurroundingCoords(coord, length, orientationX) {
    const surCoordArray = [];
    surCoordArray.push(this._getUpperRowCoords(coord, length, orientationX));
    surCoordArray.push(this._getBottomRowCoords(coord, length, orientationX));
    surCoordArray.push(this._getRightCoords(coord, length, orientationX));
    surCoordArray.push(this._getLeftCoords(coord, length, orientationX));

    return surCoordArray.flat();
  }

  _getUpperRowCoords(coords, length, orientationX) {
    const upperRow = [];
    let [x_coord, y_coord] = coords[0];

    y_coord--;
    x_coord--;

    let upperRowLength = orientationX ? length + 2 : 3;
    for (let i = 0; i < upperRowLength; i++) {
      if (this._isWithinBounds([x_coord, y_coord])) {
        upperRow.push([x_coord, y_coord]);
      }
      x_coord++;
    }

    return upperRow;
  }

  _getBottomRowCoords(coords, length, orientationX) {
    const bottomRow = [];
    let [x_coord, y_coord] = coords[length - 1];

    y_coord++;
    x_coord++;

    let bottomRowLength = orientationX ? length + 2 : 3;
    for (let i = 0; i < bottomRowLength; i++) {
      if (this._isWithinBounds([x_coord, y_coord])) {
        bottomRow.push([x_coord, y_coord]);
      }
      x_coord--;
    }
    return bottomRow;
  }

  _getRightCoords(coords, length, orientationX) {
    const right = [];
    let [x_coord, y_coord] = coords[length - 1];
    x_coord++;

    let rightLength = orientationX ? 1 : length;
    for (let i = 0; i < rightLength; i++) {
      if (this._isWithinBounds([x_coord, y_coord])) {
        right.push([x_coord, y_coord]);
      }
      y_coord--;
    }

    return right;
  }

  _getLeftCoords(coords, length, orientationX) {
    const left = [];
    let x_coord;
    let y_coord;
    if (orientationX) {
      [x_coord, y_coord] = coords[0];
    } else {
      [x_coord, y_coord] = coords[length - 1];
    }
    x_coord--;

    let leftLength = orientationX ? 1 : length;
    for (let i = 0; i < leftLength; i++) {
      if (this._isWithinBounds([x_coord, y_coord])) {
        left.push([x_coord, y_coord]);
      }
      y_coord--;
    }

    return left;
  }

  _predictCollisionWithCurrentCoords(oriantation, x, y, length) {
    const tempArr = [];
    for (let i = 0; i < length; i++) {
      tempArr.push([x, y]);
      if (oriantation === "x") x++;
      else y++;
    }

    for (const array of tempArr) {
      if (this._hasCoordCollision(array, this.currentCoords)) {
        return true;
      }
    }
    return false;
  }

  _predictCollisionWithSurroundingCoords(oriantation, x, y, length) {
    const tempArr = [];
    for (let i = 0; i < length; i++) {
      tempArr.push([x, y]);
      if (oriantation === "x") x++;
      else y++;
    }

    for (const array of tempArr) {
      if (this._hasCoordCollision(array, this.surroundingCoords)) {
        return true;
      }
    }
    return false;
  }

  _isWithinBounds(coord) {
    const [x_coord, y_coord] = coord;
    return x_coord >= 0 && x_coord < 10 && y_coord >= 0 && y_coord < 10;
  }

  _isValidCoord(x, y, length, orientationX) {
    if (orientationX) {
      return x + length <= 10;
    } else {
      return y + length <= 10;
    }
  }

  _generateRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  _hasCoordCollision(coord, otherCoord) {
    return otherCoord.some((existingCoord) =>
      arraysEqual(existingCoord, coord)
    );
  }
}

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((element, index) => element === arr2[index]);
}

function findIndexofItemInArray(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (arraysEqual(array[i], item)) {
      return i;
    }
  }
  return -1;
}
function removeDuplicateArrays(arrays) {
  const uniqueArrays = new Set(arrays.map(JSON.stringify));
  return Array.from(uniqueArrays).map(JSON.parse);
}

export { Gameboard };
