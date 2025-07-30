import { Link } from "@inertiajs/react";

export default function WhiteButton({ as = "button", href, children, ...props }) {
    const Component = as === "link" ? Link : "button";

    return (
        <Component className="bg-primary-100 hover:bg-secondary-100 shadow px-4 py-2 rounded-full font-semibold text-primary-800" {...props} {...(as === "link" ? { href } : {})}>
            {children}
        </Component>
    );
}
