import { BsPlus } from "react-icons/bs";
import DashboardLayout from "../../layout/dashboard-layout";
import { useState } from "react";
import { router, useForm } from "@inertiajs/react";

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

export default function CeritaHarian({ ceritas }) {
    const { data, setData, post, reset } = useForm({
        mood: "",
        message: "",
    });

    function handleSubmit(e) {
        e.preventDefault();

        post("/cerita", {
            onSuccess: () => reset(),
        });
    }

    function handleDelete(id) {
        if (confirm("Yakin mau hapus cerita ini?")) {
            router.delete(`/cerita/${id}`, {
                preserveScroll: true,
            });
        }
    }

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

                    <form
                        onSubmit={handleSubmit}
                        className="bg-white/80 shadow w-full p-6 rounded-xl flex flex-col items-center justify-center gap-4"
                    >
                        <div className="flex flex-col gap-2 w-full">
                            <p>Kondisi mood kamu saat ini:</p>
                            <ul className="grid grid-cols-6 max-sm:grid-cols-3 gap-4 justify-between w-full">
                                {moods.map((mood, index) => (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            setData(
                                                "mood",
                                                mood.title.toLowerCase()
                                            );
                                        }}
                                        className={`cursor-pointer px-4 py-2 rounded-xl flex items-center justify-center w-full transition-all ease-in-out duration-100 ${
                                            data.mood ===
                                            mood.title.toLowerCase()
                                                ? "bg-primary-800 scale-105"
                                                : "bg-secondary-200"
                                        }`}
                                    >
                                        <p className="text-white">
                                            {mood.title}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <textarea
                            name="message"
                            id="message"
                            disabled={!data.mood}
                            onChange={(e) => setData("message", e.target.value)}
                            value={data.message}
                            className={`w-full h-40 border rounded-xl outline-none p-4 transition-all ease-in-out duration-100 ${
                                !data.mood
                                    ? "text-neutral-300 cursor-not-allowed border-neutral-200"
                                    : "border-neutral-300 text-neutral-800"
                            }`}
                            placeholder={
                                data.mood
                                    ? "Pesan hari ini..."
                                    : "Pilih mood dulu ya..."
                            }
                        ></textarea>

                        <div className="flex items-center justify-between w-full">
                            <p className="w-full">
                                Ditulis pada:{" "}
                                {new Date().toLocaleDateString("id-ID", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </p>

                            <button
                                type="submit"
                                disabled={!data.mood}
                                className={`${
                                    !data.mood
                                        ? "bg-secondary-200"
                                        : "bg-primary-800 hover:bg-primary-900"
                                } py-2 px-6 rounded-xl text-white`}
                            >
                                Kirim
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 grid grid-cols-3 max-sm:grid-cols-1 gap-4 w-full">
                        {ceritas.length === 0 ? (
                            <p className="text-neutral-500">
                                Belum ada cerita, ayo cerita dulu!
                            </p>
                        ) : (
                            ceritas.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white shadow p-4 rounded-xl flex flex-col gap-2 relative"
                                >
                                    <p className="text-sm text-primary-800 font-semibold capitalize">
                                        Mood: {item.mood}
                                    </p>
                                    <p className="text-neutral-700 whitespace-pre-line">
                                        {item.message}
                                    </p>
                                    <p className="text-xs text-neutral-400">
                                        Ditulis:{" "}
                                        {new Date(
                                            item.created_at
                                        ).toLocaleDateString("id-ID", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </p>

                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="absolute top-4 right-4 text-red-500 hover:text-red-700 text-sm"
                                    >
                                        Hapus
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </DashboardLayout>
            {/* <div className="fixed flex items-center justify-center right-6 bottom-6 w-12 h-12 rounded-xl bg-primary-800 hover:bg-primary-900">
                <BsPlus className="text-white text-2xl" />
            </div> */}
        </>
    );
}
