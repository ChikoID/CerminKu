import { router } from "@inertiajs/react";
import { useState } from "react";

export default function HeroEmailForm() {
    const [email, setEmail] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        router.get("/register", { email });
    }

    return (
        <div className="text-primary-800 flex flex-col items-start w-full gap-4 max-md:hidden">
            <div className="flex flex-col items-start gap-4 w-full">
                <h2 className="font-bold text-lg leading-relaxed">
                    Motivasi :
                </h2>
                <p className="text-base text-justify leading-relaxed">
                    Kerentanan bukan soal menang atau kalah, tapi keberanian
                    untuk hadir meski tak bisa mengontrol hasilnya.
                </p>
                <p className="ml-auto leading-relaxed">-Brené Brown</p>
            </div>
            <div className="flex flex-col items-start gap-4 w-full mt-10">
                <p className="text-primary-800 leading-relaxed">
                    Mau reminder motivasi harian?
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="flex-center flex-col gap-2 w-full"
                >
                    <input
                        type="email"
                        name="email"
                        placeholder="Email kamu"
                        className="px-4 py-2 outline-0 border-b"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-primary-800 text-white px-4 py-2 rounded-full hover:bg-secondary-800 w-full"
                    >
                        Kirim
                    </button>
                </form>
            </div>
        </div>
    );
}
