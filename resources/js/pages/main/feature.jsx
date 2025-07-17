import { Link } from "@inertiajs/react";

const features = [
    {
        title: "Cerita pribadi",
        description: "Tempat untuk mengekspresikan diri dan berbagi cerita.",
        icon: "/icon/feature/cerita.svg",
        link: "#",
    },
    {
        title: "Refleksikan diri",
        description: "Ruang untuk merenung dan memahami diri sendiri.",
        icon: "/icon/feature/refleksi.svg",
        link: "#",
    },
    {
        title: "Target perubahan",
        description: "Fasilitas untuk menetapkan dan melacak tujuan pribadi.",
        icon: "/icon/feature/target.svg",
        link: "#",
    },
    {
        title: "Evaluasi diri",
        description: "Alat untuk menilai kemajuan dan perkembangan diri.",
        icon: "/icon/feature/evaluasi.svg",
        link: "#",
    },
    {
        title: "Curhat sama AI",
        description: "Teman virtual yang siap mendengarkan kapan saja.",
        icon: "/icon/feature/chat_ai.svg",
        link: "#",
    },
    {
        title: "Sharing cerita",
        description: "Platform untuk berbagi pengalaman dengan orang lain.",
        icon: "/icon/feature/sharing.svg",
        link: "#",
    },
];

export default function Feature() {
    return (
        <section id="feature" className="scroll-mt-20 flex flex-col gap-4 mt-12">
            <div className="">
                <h1 className="text-4xl font-bold leading-tight text-primary-800">
                    Fitur CerminKu
                </h1>
                <p className="text-secondary-800 w-md">
                    Tempat nyata buat kamu refleksi, tumbuh, dan merancang hidup
                    tanpa harus sempurna.
                </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {features.map((feature, index) => (
                    <div
                        className={`relative p-6 rounded-xl backdrop-blur-lg shadow ${
                            index % 2
                                ? "bg-primary-800 border-secondary-800"
                                : "bg-secondary-800 border-primary-800"
                        }`}
                        key={index}
                    >
                        <div className="gradient-blob bg-black w-80 h-80 -top-10 -left-10 animate-float"></div>
                        <div className="text-white flex flex-col items-start gap-2">
                            <h1 className="text-2xl font-bold">
                                {feature.title}
                            </h1>

                            <p className="text-neutral-100">
                                {feature.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 items-end">
                            <Link
                                href={feature.link}
                                className="px-4 py-2 bg-secondary-100 text-primary-800 rounded-full hover:bg-primary-100 w-full text-center"
                            >
                                Selengkapnya
                            </Link>
                            <img
                                src={feature.icon}
                                className="w-36"
                                alt="Icon Feature Image"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
