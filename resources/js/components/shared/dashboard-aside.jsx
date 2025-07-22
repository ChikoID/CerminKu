import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { FiTarget } from "react-icons/fi";
import { LuLogOut, LuMenu } from "react-icons/lu";
import {
    MdDashboard,
    MdPerson,
    MdCheckCircle,
    MdChat,
    MdShare,
} from "react-icons/md";

const menuItems = [
    {
        title: "Cerita",
        icon: MdDashboard,
        link: "/dashboard/cerita",
    },
    {
        title: "Refleksi",
        icon: MdPerson,
        link: "/dashboard/refleksi",
    },
    {
        title: "Target",
        icon: FiTarget,
        link: "/dashboard/target",
    },
    {
        title: "Evaluasi",
        icon: MdCheckCircle,
        link: "/dashboard/evaluasi",
    },
    {
        title: "Curhat",
        icon: MdChat,
        link: "/dashboard/curhat",
    },
    {
        title: "Bagikan",
        icon: MdShare,
        link: "/dashboard/share",
    },
];

export default function DashboardAside() {
    const [isOpen, setIsOpen] = useState(false);
    const { url } = usePage();

    return (
        <>
            <div className="flex items-center mt-6 ms-6 sm:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-neutral-500 hover:text-neutral-600 focus:outline-none focus:ring-0"
                >
                    <LuMenu className="text-2xl" />
                </button>
            </div>

            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 z-40 sm:hidden transition-opacity duration-300 ease-in-out backdrop-blur-sm ${
                    isOpen
                        ? "opacity-100 bg-black/50 pointer-events-auto"
                        : "opacity-0 bg-black/0 pointer-events-none"
                }`}
            ></div>

            <aside
                className={`fixed top-0 left-0 z-50 w-64 max-sm:w-80 h-full p-6 transition-transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } sm:translate-x-0`}
            >
                <div className="flex flex-col items-start w-full h-full px-3 py-4 overflow-y-auto bg-white/80 shadow rounded-xl backdrop-blur-xl">
                    <div className="flex flex-col items-start px-4 py-2 border-b border-primary-800 w-full">
                        <h1 className="font-bold text-xl text-primary-800 hover:text-secondary-800 block ease-in-out transition-all">
                            CerminKu
                        </h1>
                    </div>
                    <ul className="flex flex-col items-start w-full font-medium pt-2 gap-2">
                        {menuItems.map(({ title, icon: Icon, link }, index) => {
                            const isActive = url.startsWith(link);

                            return (
                                <li key={index} className="w-full">
                                    <Link
                                        href={link}
                                        className={`flex items-center px-4 py-2 rounded-xl group transition-all duration-200 ${
                                            isActive
                                                ? "bg-primary-800 text-white font-bold"
                                                : "text-primary-800 hover:text-primary-900 hover:bg-neutral-200"
                                        }`}
                                    >
                                        <Icon className={`transition duration-75 ${isActive ? "group-hover:text-neutral-200" : "group-hover:text-primary-900"}`} />
                                        <span className="ms-3 font-semibold">
                                            {title}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="mt-auto w-full">
                        <button
                            onClick={() => post("/logout")}
                            className="flex items-center gap-2 px-4 py-2 bg-neutral-200 text-primary-800 rounded-xl hover:bg-neutral-400 font-semibold w-full"
                        >
                            <LuLogOut />
                            Logout
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
}
