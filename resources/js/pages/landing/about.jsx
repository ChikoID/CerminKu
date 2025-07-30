import { Link } from "@inertiajs/react";
import WhiteButton from "../../components/atom/whiteButton";

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

                    <WhiteButton as="link" href={""}>
                        Mulai Bertumbuh
                    </WhiteButton>
                </div>
            </div>
        </section>
    );
}
