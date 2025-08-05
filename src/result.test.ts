import { describe, expect, test } from "vitest";
import { Result } from "./result";

describe("Ok", () => {
	describe("#isOk", () => {
		test("should return true", () => {
			const result = Result(() => functionThatDoesNotThrow());
			expect(result.isOk()).toBe(true);
		});

		test("should return false", () => {
			const result = Result(() => functionThatThrows());
			expect(result.isOk()).toBe(false);
		});
	});

	describe("#match", () => {
		test("should safely handle the ok case", () => {
			const result = Result(() => functionThatDoesNotThrow());
			const response = result.match({
				Ok: (value) => value,
				Err: (_) => "Something went wrong",
			});
			expect(response).toBe("Hello World");
		});
	});
});

describe("Err", () => {
	describe("#isErr", () => {
		test("should catch the error and return something safely", () => {
			const result = Result(() => functionThatThrows());
			expect(result.isErr()).toBe(true);
		});

		test("should not be an error", () => {
			const result = Result(() => functionThatDoesNotThrow());
			expect(result.isErr()).toBe(false);
		});
	});

	describe("#match", () => {
		test("should handle the errors gracefully", () => {
			const result = Result(() => functionThatThrows());
			const response = result.match({
				Ok: (value) => value,
				Err: (_) => "Something went wrong",
			});
			expect(response).toBe("Something went wrong");
		});
	});
});

function functionThatThrows() {
	throw new Error("Hello World");
}

function functionThatDoesNotThrow(): string {
	return "Hello World";
}
