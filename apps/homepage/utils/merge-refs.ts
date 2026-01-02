export default function mergeRefs<T>(...refs: Array<React.Ref<T> | undefined>) {
    return (value: T) => {
        for (const ref of refs) {
            if (typeof ref === "function") {
                ref(value);
            } else if (ref && "current" in ref) {
                ref.current = value;
            }
        }
    };
}
