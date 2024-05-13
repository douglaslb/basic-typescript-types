{
  enum Direction {
    North,
    South,
    East,
    West,
  }

  enum Direction2 {
    North = 0,
    South = 1,
    East = 2,
    West = 3,
  }

  enum Direction3 {
    North = 1,
    South = 2,
    East = 3,
    West = 4,
  }
}

{
  enum Direction {
    North,
    South,
    East,
    West,
  }

  let direction: Direction = Direction.North;

  if (direction === Direction.North) {
  }

  function getNorth(obj: { North: number }) {
    return obj.North;
  }

  foo(Direction);

  function move(direction: Direction) {
    return direction.toString();
  }
}

{
  enum Direction {
    North,
    South,
    East,
    West,
  }

  const north: Direction = Direction.North;
  const south: Direction = 1;
  const east: Direction = 99;
  const west: Direction = Direction[3];
  const stringEnum = Direction["West"];
}

{
  enum Level {
    Info,
    Warning,
    Error,
    Debug,
  }

  function createLogger(level: Level) {
    switch (level) {
      case Level.Info:
        return console.log;
      case Level.Warning:
        return console.warn;
      case Level.Error:
        return console.error;
      case Level.Debug:
        return console.debug;
    }
  }

  const userLevel: number = 1;
  if (userLevel === Level.Warning) {
    createLogger(Level.Warning);
  }
}
