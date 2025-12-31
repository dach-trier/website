type Page<T, N = string> = {
    entries: T[];
    next?: N | undefined;
};

export default Page;
