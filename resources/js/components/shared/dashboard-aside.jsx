import { Link } from "@inertiajs/react";
import { FiTarget } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";
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
        link: "",
    },
    {
        title: "Refleksi",
        icon: MdPerson,
        link: "",
    },
    {
        title: "Target",
        icon: FiTarget,
        link: "",
    },
    {
        title: "Evaluasi",
        icon: MdCheckCircle,
        link: "",
    },
    {
        title: "Curhat",
        icon: MdChat,
        link: "",
    },
    {
        title: "Bagikan",
        icon: MdShare,
        link: "",
    },
];

export default function DashboardAside() {
    return (
        <>
            <aside className="fixed top-0 left-0 z-50 w-64 h-full p-6 transition-transform -translate-x-full sm:translate-x-0">
                <div className="flex flex-col items-start w-full h-full px-3 py-4 overflow-y-auto bg-white/80 shadow rounded-xl backdrop-blur-xl">
                    <div className="flex flex-col items-start px-4 py-2 border-b border-primary-800 w-full">
                        <h1 className="font-bold text-xl text-primary-800 hover:text-secondary-800 block ease-in-out transition-all">
                            CerminKu
                        </h1>
                    </div>
                    <ul className="flex flex-col items-start w-full font-medium pt-2 gap-2">
                        {menuItems.map(({ title, icon: Icon, link }, index) => (
                            <li key={index} className="w-full">
                                <Link
                                    href={link}
                                    className="flex items-center px-4 py-2 text-primary-800 hover:text-primary-900 rounded-xl hover:bg-neutral-200 group"
                                >
                                    <Icon className="transition duration-75 group-hover:text-primary-900" />
                                    <span className="ms-3 font-semibold">{title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto w-full">
                        <button
                            onClick={() => post("/logout")}
                            className="flex items-center gap-2 px-4 py-2 bg-neutral-200 text-primary-800 rounded-xl hover:bg-neutral-400 font-semibold w-full"
                        >
                            <LuLogOut/>
                            Logout
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
}
