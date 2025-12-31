export type Result<T, E = Error> =
    | { ok: true; value: T }
    | { ok: false; error: E };

export const Ok = <T, E = never>(value: T): Result<T, E> => {
    return { ok: true, value };
};

export const Err = <E, T = never>(error: E): Result<T, E> => {
    return { ok: false, error };
};
