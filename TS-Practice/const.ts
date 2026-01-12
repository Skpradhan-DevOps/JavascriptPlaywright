const MAX_RETRIES = 5;
export async function retry<T>(fn: () => Promise<T>, retries: number = MAX_RETRIES): Promise<T> {
  let err: any;
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (e) {
      err = e;
    }
  }
  throw err;
}
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}
export { Color };
console.log(Color.Red);
console.log(Color.Green);
console.log(Color.Blue);

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
export { Direction };
console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);