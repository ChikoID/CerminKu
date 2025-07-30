import { Link } from "@inertiajs/react";

export default function NavLink({
    href,
    children,
    className = "",
    active,
    onClick,
    ...props
}) {
    return (
        <Link
            onClick={onClick}
            href={href}
            className={`px-4 py-2 rounded-full font-semibold transition ${
                active
                    ? "shadow text-white bg-primary-800 hover:bg-secondary-800"
                    : "text-primary-800 hover:text-secondary-800"
            }`}
        >
            {children}
        </Link>
    );
}
