export type MatchResult<T, E, R> = {
	Ok: (value: T) => R;
	Err: (error: E) => R;
};

export type Ok<T, E = never> = {
	readonly isOk: () => true;
	readonly isErr: () => false;
	readonly unwrap: () => T;
	readonly unwrapErr: () => never;
	readonly map: <U>(fn: (val: T) => U) => Result<U, E>;
	readonly match: <R>(fn: MatchResult<T, E, R>) => R;
};

export type Err<T = never, E = unknown> = {
	readonly isOk: () => false;
	readonly isErr: () => true;
	readonly unwrap: () => never;
	readonly unwrapErr: () => E;
	readonly map: <U>(_fn: (val: T) => U) => Result<U, E>;
	readonly match: <R>(fn: MatchResult<T, E, R>) => R;
};

export type Result<T, E = unknown> = Ok<T, E> | Err<T, E>;

export function Result<T, E = unknown>(fn: () => T): Result<T, E> {
	try {
		return Ok(fn());
	} catch (err) {
		return Err(err as E);
	}
}

export function Ok<T, E = never>(value: T): Ok<T, E> {
	return {
		isOk: () => true,
		isErr: () => false,
		unwrap: () => value,
		unwrapErr: () => {
			throw new Error("Called unwrapErr() on Ok");
		},
		map: (fn) => Ok(fn(value)),
		match: ({ Ok }) => Ok(value),
	};
}

export function Err<T = never, E = unknown>(error: E): Err<T, E> {
	return {
		isOk: () => false,
		isErr: () => true,
		unwrap: () => {
			throw new Error("Called unwrap() on Err");
		},
		unwrapErr: () => error,
		map: () => Err(error),
		match: ({ Err }) => Err(error),
	};
}
