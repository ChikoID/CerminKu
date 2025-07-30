import { Link } from "@inertiajs/react";

export default function Button({
    as = "button",
    href,
    children,
    className = "",
    ...props
}) {
    const Component = as === "link" ? Link : "button";

    return (
        <Component
            className={`bg-primary-800 hover:bg-secondary-800 shadow px-4 py-2 rounded-full font-semibold text-white ${className}`}
            {...props}
            {...(as === "link" ? { href } : {})}
        >
            {children}
        </Component>
    );
}
