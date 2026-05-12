export function GradientSection({ direction = "to-b" }: { direction?: "to-b" | "to-t" }) {
    const isBottom = direction === "to-b";

    return (
        <div className={`absolute ${isBottom ? "bottom-0 bg-linear-to-t" : "top-0 bg-linear-to-b"} left-0 right-0 h-10 from-[#fff8f3] to-transparent pointer-events-none z-0`}></div>
    );
}