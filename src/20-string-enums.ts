{
  enum State {
    SP = "São Paulo",
    RJ = "Rio de Janeiro",
    MG = "Minas Gerais",
  }

  enum Direction {
    UP = "Up",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT",
  }

  enum OtherDirection {
    NORTH = Direction.UP,
    SOUTH = Direction.DOWN,
    WEST = Direction.LEFT,
    EAST = Direction.RIGHT,
  }

  let direction: Direction = Direction.UP;
  console.log(direction); // UP

  function move(direction: Direction) {
    console.log(direction);
  }

  const directionAsString: Direction = "Cima";

  const valueByString = Direction["UP"]; // UP

  const TranslatedNorth = Direction[OtherDirection.NORTH]; // UP
}
