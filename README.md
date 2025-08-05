# 🧹 baba-yaga
> The boogeyman of bugs

A TypeScript utility library inspired by Rust's fearsome type safety, zero-cost abstractions, and no-nonsense attitude. Baba Yaga doesn't just scare bugs away -- it hunts them down with precision.

* 🧠 Predictable: Embraces Rust-like patterns such as Result, Option, and exhaustive matching.
* 🛡️ Safe by Design: Encourages disciplined typing, avoiding nulls, any, and other monsters.
* ⚔️ Lightweight but Lethal: No runtime bloat, no dependencies. Just clean, cold logic.
* 🌲 Ergonomic: Built for developers who care about readability, maintainability, and correctness.

## 🧪 Example

```ts
import type { Option } from "@bytebury/baba-yaga";
import { Some } from "@bytebury/baba-yaga";

const username = getUsername(); // Option<string>
const result = username.match({
  Some: (username: string) => `Hello, ${username}`,
  None: () => `Hello, Guest`,
});
console.log(result); // this is safe

// you can also unwrap it directly, though that might throw an exception
console.log(username.unwrap()); // this is unsafe
console.log(username.unwrapOr('unknown user')); // this is safe
```
