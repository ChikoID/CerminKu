import { Link, router } from "@inertiajs/react";
import { useState } from "react";

export default function Hero() {
    const [email, setEmail] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        router.get("/register", { email });
    }
    return (
        <>
            <div className="gradient-blob bg-primary-800 w-80 h-80 -top-10 -left-10 animate-float"></div>
            <div className="gradient-blob bg-primary-800 w-80 h-80 bottom-0 -right-10 animate-float"></div>
            <div className="gradient-blob bg-secondary-800 w-80 h-80 bottom-0 -left-10 animate-float"></div>

            <section
                id="home"
                className="scroll-mt-20 flex flex-col items-center justify-center w-full px-6 gap-4"
            >
                <div className="flex flex-col items-center justify-center gap-4 w-full">
                    <h1 className="text-4xl md:text-6xl font-black text-center leading-tight text-primary-800">
                        YOU ARE <span className="text-secondary-800">NOT</span>{" "}
                        ALONE
                    </h1>
                    <p className="text-secondary-800 text-sm md:text-base text-center w-xl">
                        CerminKu hadir sebagai teman virtual yang mendengarkan.
                        Kami percaya, kadang kamu hanya butuh ruang untuk
                        bicara. Yuk, mulai perjalanan healing kamu hari ini.
                    </p>

                    <Link
                        href={"/register"}
                        className="bg-primary-800 hover:bg-secondary-800 shadow px-4 py-2 rounded-full font-semibold text-white"
                    >
                        Mulai Sekarang
                    </Link>
                </div>
                <div className="grid grid-cols-5 justify-items-center items-center">
                    <div className="flex flex-col items-start w-full gap-4">
                        <h3 className="text-secondary-800 font-bold text-lg">
                            Kamu Nggak Sendirian, Serius
                        </h3>
                        <p className="text-primary-800 text-base text-justify leading-relaxed">
                            Kadang, diam bukan berarti gak peduli tapi karena
                            hati lagi belajar bicara dengan cara yang beda. Di
                            saat seperti itu, kehadiran CerminKu yang hangat
                            bisa lebih kuat dari seribu kata.
                        </p>

                        <p className="mt-2 text-secondary-800 leading-relaxed">
                            Masih bingung?{" "}
                            <Link
                                href="#about"
                                className="underline hover:text-primary-800"
                            >
                                Pelajari lebih lanjut
                            </Link>
                        </p>
                    </div>
                    <img
                        src="/icon/illustration_2.svg"
                        alt="Illustration Icon For CerminKu"
                        className="w-md col-span-3"
                    />
                    <div className="text-primary-800 flex flex-col items-start w-full gap-4">
                        <div className="flex flex-col gap-4 text-secondary-800">
                            <h2 className="font-bold text-lg leading-relaxed">
                                Motivasi :
                            </h2>
                            <p className="text-base text-justify leading-relaxed">
                                Kerentanan bukan soal menang atau kalah, tapi
                                keberanian untuk hadir meski tak bisa mengontrol
                                hasilnya.
                            </p>
                            <p className="ml-auto leading-relaxed">
                                -Brené Brown
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 mt-10">
                            <p className="text-secondary-800 leading-relaxed">
                                Mau reminder motivasi harian?
                            </p>

                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-2 justify-center"
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
                                    className="bg-primary-800 text-white px-4 py-2 rounded-full hover:bg-secondary-800"
                                >
                                    Kirim
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
