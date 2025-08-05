import { describe, expect, test } from "vitest";
import type { Option } from "./optional";
import { None, Some } from "./optional";

describe("Some", () => {
	describe("#isSome", () => {
		test("you should be able to unwrap Some", () => {
			expect(getUsername().isSome()).toBe(true);
		});
	});

	describe("#isNone", () => {
		test("you should return false when it is Some", () => {
			expect(Some("").isNone()).toBe(false);
		});
	});

	describe("#unwrap", () => {
		test("you should be able to unwrap Some", () => {
			const username = getUsername();

			expect(() => username.unwrap()).not.toThrow();
			expect(username.unwrap()).toBe("bytebury");
		});
	});

	describe("#unwrapOr", () => {
		test("should return the value when present", () => {
			const username = getUsername();

			expect(username.unwrapOr("marcello")).toBe("bytebury");
		});
	});

	describe("#unwrapOrDefault", () => {
		test("should return the value when present", () => {
			const username = getUsername();

			expect(username.unwrapOr("marcello")).toBe("bytebury");
		});
	});

	describe("#match", () => {
		test("should be able to use match statements", () => {
			const username = getUsername();

			const result = username.match({
				Some: (username) => `Hello, ${username}`,
				None: () => "Hello, Guest",
			});

			expect(result).toBe("Hello, bytebury");
		});
	});
});

describe("None", () => {
	describe("#isSome", () => {
		test("should return false when it is None", () => {
			expect(None().isSome()).toBe(false);
		});
	});

	describe("#isNone", () => {
		test("should return true when it is None", () => {
			expect(None().isNone()).toBe(true);
		});
	});

	describe("#match", () => {
		test("should be able to use match statements", () => {
			const result = None().match({
				Some: (username) => `Hello, ${username}`,
				None: () => "Hello, Guest",
			});

			expect(result).toBe("Hello, Guest");
		});
	});
});

function getUsername(): Option<string> {
	return Some("bytebury");
}
