import { Link } from "@inertiajs/react";
import { FaUserPlus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FiTarget } from "react-icons/fi";
import { GiMirrorMirror } from "react-icons/gi";
import {
    HiOutlineLightBulb,
    HiOutlineShieldCheck,
    HiOutlineUserGroup,
} from "react-icons/hi";
import {
    MdAllInclusive,
    MdOutlinePrivacyTip,
    MdOutlineWeb,
} from "react-icons/md";
import { TbGrowth } from "react-icons/tb";

export default function About() {
    return (
        <section id="about" className="scroll-mt-20 flex flex-col gap-4">
            <div className="p-6 bg-primary-800 shadow rounded-xl text-white flex flex-col items-center justify-center gap-8 w-full mx-auto text-center">
                <div className="">
                    <h1 className="text-4xl font-bold leading-tight">
                        Tentang CerminKu
                    </h1>
                    <p className="text-neutral-100">
                        Tempat nyata buat kamu refleksi, tumbuh, dan
                        menceritakan hidup tanpa harus dihakimi.
                    </p>
                </div>

                <div className="leading-tight flex flex-col items-center gap-4">
                    <p>
                        CerminKu adalah ruang yang dirancang khusus untuk anak
                        muda agar mereka dapat mengekspresikan diri,
                        menyampaikan rencana hidup, dan melacak pencapaian
                        pribadi semuanya dalam suasana yang aman, nyaman, dan
                        bebas dari penilaian.
                    </p>
                    <p>
                        Platform ini hadir dari kegelisahan yang sering
                        dirasakan anak muda tentang kebingungan terhadap diri
                        sendiri, overthinking, burnout, hingga tidak tahu harus
                        bercerita ke siapa. Sayangnya, belum banyak media yang
                        benar-benar menjadi tempat aman untuk bercerita dan
                        refleksikan diri.
                    </p>
                    <p>
                        Dibangun secara mandiri, CerminKu bukan sekadar safe
                        space digital. Lebih dari itu, CerminKu ingin menjadi
                        rumah kedua dan tempat yang bisa menemani proses tumbuh,
                        bercerita, merencanakan perubahan, dan memahami diri
                        sendiri, satu langkah kecil setiap harinya.
                    </p>

                    <Link
                        href={"/register"}
                        className="mt-4 bg-secondary-100 text-primary-800 px-6 py-3 rounded-full hover:bg-primary-100 transition"
                    >
                        Mulai Bertumbuh
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                    <div className="p-6 bg-primary-800 shadow transition rounded-xl text-white flex flex-col items-center justify-start gap-4">
                        <h1 className="text-2xl text-center font-bold leading-tight">
                            Visi
                        </h1>

                        <p className="text-center text-neutral-100">
                            Menjadi generasi muda yang tidak hanya mengenal
                            fisik saja, tetapi juga memahami jati diri secara
                            utuh mulai dari pikiran, perasaan, hingga arah hidup
                            yang ingin dicapai.
                        </p>
                    </div>

                    <div className="p-6 bg-secondary-800 shadow transition rounded-xl text-white flex flex-col items-start justify-start gap-4">
                        <h1 className="text-2xl text-left font-bold leading-tight">
                            Kenapa CerminKu Ada?
                        </h1>
                        <p className="text-neutral-100">
                            Banyak anak muda merasa sendirian dengan pikiran
                            mereka sendiri. Gak tahu harus cerita ke siapa, gak
                            tahu harus mulai dari mana, dan sering merasa stuck
                            di tempat yang sama. Kami paham rasanya.
                        </p>
                    </div>
                </div>
                <div className="p-6 bg-primary-800 shadow rounded-xl text-white flex flex-col items-center justify-center gap-4">
                    <h1 className="text-2xl text-center font-bold leading-tight">
                        Misi
                    </h1>

                    <ul className="flex flex-col items-start text-left gap-2">
                        <li className="flex items-center gap-3 text-neutral-100">
                            <HiOutlineShieldCheck className="text-white text-2xl" />
                            Menyediakan ruang aman untuk curhat dan cerita tanpa
                            takut dihakimi.
                        </li>

                        <li className="flex items-center gap-3 text-neutral-100">
                            <FiTarget className="text-white text-2xl" />
                            Membantu pengguna menyusun target perubahan yang
                            realistis dan pasti.
                        </li>

                        <li className="flex items-center gap-3 text-neutral-100">
                            <HiOutlineLightBulb className="text-white text-2xl" />
                            Menumbuhkan kebiasaan refleksi diri dan meningkatkan
                            pola pikir (growth mindset).
                        </li>

                        <li className="flex items-center gap-3 text-neutral-100">
                            <HiOutlineUserGroup className="text-white text-2xl" />
                            Membuat pengguna merasa didengar, dipahami, dan
                            ditemani dalam setiap prosesnya.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 justify-items-center">
                <p className="flex flex-col gap-2 items-center justify-center px-6 py-4 bg-primary-800 shadow transition rounded-xl text-white w-full text-center">
                    <MdOutlinePrivacyTip className="text-2xl" /> Rahasia
                </p>
                <p className="flex flex-col gap-2 items-center justify-center px-6 py-4 bg-secondary-800 shadow transition rounded-xl text-white w-full text-center">
                    <GiMirrorMirror className="text-2xl" /> Refleksi
                </p>
                <p className="flex flex-col gap-2 items-center justify-center px-6 py-4 bg-primary-800 shadow transition rounded-xl text-white w-full text-center">
                    <TbGrowth className="text-2xl" /> Growth
                </p>
                <p className="flex flex-col gap-2 items-center justify-center px-6 py-4 bg-secondary-800 shadow transition rounded-xl text-white w-full text-center">
                    <MdAllInclusive className="text-2xl" /> Inklusif
                </p>
                <p className="flex flex-col gap-2 items-center justify-center px-6 py-4 bg-primary-800 shadow transition rounded-xl text-white w-full text-center">
                    <FaUserPlus className="text-2xl" /> Empati
                </p>
                <p className="flex flex-col gap-2 items-center justify-center px-6 py-4 bg-primary-800 shadow transition rounded-xl text-white w-full text-center">
                    <FaHeart className="text-2xl" /> Dari Hati
                </p>
            </div>
        </section>
    );
}
