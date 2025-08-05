# 🧹 baba-yaga
> The boogeyman of bugs

A TypeScript utility library inspired by Rust's fearsome type safety, zero-cost abstractions, and no-nonsense attitude. Baba Yaga doesn't just scare bugs away -- it hunts them down with precision.

* 🧠 Predictable: Embraces Rust-like patterns such as Result, Option, and exhaustive matching.
* 🛡️ Safe by Design: Encourages disciplined typing, avoiding nulls, any, and other monsters.
* ⚔️ Lightweight but Lethal: No runtime bloat, no dependencies. Just clean, cold logic.
* 🌲 Ergonomic: Built for developers who care about readability, maintainability, and correctness.

## 🧪 Example

```ts
import { option, result } from "@bytebury/baba-yaga";

// Option<T>
const username = option(getUserName());

if (username.isSome()) {
	console.log("Hello, " + username.unwrap());
} else {
	console.warn("No username found");
}

// Result<T, E>
const res = result(() => mightThrow());

res.match({
	ok: (value) => console.log("Success:", value),
	err: (error) => console.error("Caught error:", error),
});
