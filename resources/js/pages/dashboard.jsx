import { BsPlus } from "react-icons/bs";
import DashboardLayout from "../layout/dashboard-layout";

const moods = [
    {
        title: "Bahagia",
        icon: "",
    },
    {
        title: "Sedih",
        icon: "",
    },
    {
        title: "Cemas",
        icon: "",
    },
    {
        title: "Marah",
        icon: "",
    },
    {
        title: "Datar",
        icon: "",
    },
    {
        title: "Lelah",
        icon: "",
    },
];

export default function Dashboard() {
    return (
        <>
            <DashboardLayout className="py-6 pr-6 pl-6 sm:ml-64 sm:pl-0">
                <div className="gradient-blob bg-primary-800 w-80 h-80 -top-10 -left-10 animate-float"></div>

                <div className="flex flex-col gap-4">
                    <div>
                        <h1 className="text-3xl font-bold leading-tight text-primary-800">
                            Cerita Hari Ini
                        </h1>

                        <p className="text-secondary-800">
                            Tempat nyata buat kamu refleksi, tumbuh, dan
                            merancang hidup tanpa harus sempurna.
                        </p>
                    </div>

                    <div className="bg-white/80 shadow w-full p-6 rounded-xl flex flex-col items-center justify-center gap-4">
                        <textarea
                            name="message"
                            id="message"
                            className="w-full h-40 border border-neutral-200 rounded-xl outline-none p-4"
                            placeholder="Pesan hari ini"
                        ></textarea>

                        <ul className="grid grid-cols-6 gap-4 justify-between w-full">
                            {moods.map((mood, index) => (
                                <li className="bg-primary-800 px-4 py-2 rounded-xl flex items-center justify-center w-full">
                                    <p className="text-white">{mood.title}</p>
                                </li>
                            ))}
                        </ul>

                        <p className="w-full">Ditulis pada: </p>
                    </div>
                </div>
            </DashboardLayout>
            <div className="fixed flex items-center justify-center right-6 bottom-6 w-12 h-12 rounded-xl bg-primary-800 hover:bg-primary-900">
                <BsPlus className="text-white text-2xl" />
            </div>
        </>
    );
}
