import { Link } from "@inertiajs/react";

export default function OutlineButton({
    as = "button",
    className = "",
    href,
    children,
    ...props
}) {
    const Component = as === "link" ? Link : "button";

    return (
        <Component
            className={`${className} border border-primary-800 hover:border-secondary-800 px-4 py-2 rounded-full font-semibold text-primary-800 hover:text-secondary-800`}
            {...props}
            {...(as === "link" ? { href } : {})}
        >
            {children}
        </Component>
    );
}
