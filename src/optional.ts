export type Option<T> = Some<T> | None<T>;

export type MatchOption<T, R> = {
	Some: (value: T) => R;
	None: () => R;
};

export type Some<T> = {
	readonly isSome: () => true;
	readonly isNone: () => false;
	readonly unwrap: () => T;
	readonly unwrapOr: (_default: T) => T;
	readonly unwrapOrDefault: () => T;
	readonly match: <R>(fn: MatchOption<T, R>) => R;
};

export type None<T> = {
	readonly isSome: () => false;
	readonly isNone: () => true;
	readonly unwrap: () => never;
	readonly unwrapOr: (_default: T) => T;
	readonly unwrapOrDefault: () => T;
	readonly match: <R>(fn: MatchOption<T, R>) => R;
};

export function Some<T>(value: T): Some<T> {
	return {
		isSome: () => true,
		isNone: () => false,
		unwrap: () => value,
		unwrapOr: () => value,
		unwrapOrDefault: () => value,
		match: ({ Some }) => Some(value),
	};
}

export function None<T = never>(): None<T> {
	return {
		isSome: () => false,
		isNone: () => true,
		unwrap: () => {
			throw new Error("Called `unwrap()` on None");
		},
		unwrapOr: (defaultValue) => defaultValue,
		unwrapOrDefault: () => {
			throw new Error("Called `unwrapOrDefault` on None without default");
		},
		match: ({ None }) => None(),
	};
}
