import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function NavLink({ href, children, className = "", active, onClick }) {
    return (
        <Link
            onClick={onClick}
            href={href}
            className={`px-4 py-2 rounded-full font-semibold transition  ${className} ${
                active
                    ? "shadow text-white bg-primary-800 hover:bg-secondary-800"
                    : "text-primary-600 hover:text-primary-800"
            }`}
        >
            {children}
        </Link>
    );
}
