{
  const enum Colors {
    RED,
    GREEN,
    BLUE,
  }

  const color: Colors = Colors.BLUE;
}

{
  const enum Colors {
    RED,
    GREEN,
    BLUE,
  }

  const color: Colors = Colors[0];
  const rightColor: Colors = Colors["BLUE"];
}

{
  const enum Colors {
    RED = "red",
    GREEN = "green",
    BLUE = "blue",
  }

  const color: Colors = Colors["RED"];
  const valueColor = "red";

  const keyColor: Colors = Colors[valueColor];
  const keys = Object.keys(Colors);
}
