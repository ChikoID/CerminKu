import { Link } from "@inertiajs/react";
import AnimateBackground from "../components/animate-background";
import { FaChevronLeft } from "react-icons/fa6";

export default function AuthLayout({ children, ...props }) {
    return (
        <>
            <AnimateBackground />

            <aside className="fixed z-10 top-10 left-10">
                <Link
                    href={"/"}
                    className="w-10 h-10 flex items-center justify-center bg-primary-800 hover:bg-secondary-800 hover:scale-110 shadow rounded-xl transition-all duration-200"
                >
                    <FaChevronLeft className="text-white" />
                </Link>
            </aside>

            <main {...props}>{children}</main>
        </>
    );
}
