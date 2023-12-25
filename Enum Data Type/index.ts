// Enum Data Type - it's not take any duplicate value

// numeric enum
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

// string enum
enum DirectionString {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// Heterogeneous enum
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}

// Computed and constant members
enum E {
  X,
}

enum E1 {
  X,
  Y,
  Z,
}

enum E2 {
  A = 1,
  B,
  C,
}

enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = "123".length,
}

// Union enums and enum member types
enum ShapeKind {
  Circle,
  Square,
}

// Reverse mappings
enum Enum {
  A,
}

let a = Enum.A;
let nameOfA = Enum[a]; // "A"
console.log(nameOfA);

// const enums
const enum EnumConst {
  A = 1,
  B = A * 2,
}

// Ambient enums
declare enum EnumAmbient {
  A = 1,
  B,
  C = 2,
}
