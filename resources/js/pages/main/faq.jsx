import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const faqs = [
    {
        question: "Apakah CerminKu aman dan rahasia?",
        answer: "Tenang aja, semua yang kamu tulis dan ceritakan di CerminKu nggak bisa dilihat orang lain kecuali kamu sendiri yang share. Data kamu dienkripsi, dan akun kamu punya pengaturan privasi penuh. Ini tempatnya buat jujur ke diri sendiri, bukan dipajang buat orang lain.",
    },
    {
        question: "Emang kenapa sih penting refleksi diri?",
        answer: "Karena refleksi itu kayak ngaca, tapi buat pikiran. Kamu jadi ngerti kenapa kamu ngerasa gini, maunya apa, dan pelan-pelan bisa ambil kendali atas hidupmu sendiri. Gak semua orang tahu apa yang mereka rasain dan itu gak apa-apa. Di sinilah kamu bisa mulai.",
    },
    {
        question: "Aku harus nulis setiap hari?",
        answer: "Gak harus. Tapi semakin sering kamu refleksi, semakin kamu kenal sama dirimu sendiri. Kamu bisa nulis kapan aja, semau kamu. CerminKu ngikutin ritmemu, bukan maksa kamu ngikutin sistem.",
    },
    {
        question: "Emang bisa curhat ke AI? Terus dia beneran ngerti?",
        answer: "Yup! Di CerminKu kamu bisa ngobrol sama AI yang aku buat khusus buat nemenin kamu curhat, deep talk, atau sekadar cerita ringan. Dia gak bakal nge-judge, gak bakal bales “lah kamu aja yang salah” tapi bakal bantu kamu mikir, refleksi, dan nemuin jalan keluar dengan tenang.",
    },
    {
        question: "Apa bedanya CerminKu sama aplikasi journaling biasa?",
        answer: "CerminKu lebih dari sekadar tempat nulis. Di sini kamu bisa melakukan Tracking perubahan dirimu, Bikin target perubahan, Dapat achievement kalau konsisten, Ngobrol sama AI, Share cerita secara anonim dan dapet dukungan, Intinya Ini rumah digital buat kamu yang pengen berubah tanpa harus perfect dulu.",
    },
    {
        question: "CerminKu bisa diakses lewat HP atau cuma laptop?",
        answer: "Bisa dua-duanya! CerminKu responsive, jadi bisa kamu buka di HP, tablet, laptop, bahkan di kamar gelap sambil merenung",
    },
    {
        question: "Bisa connect sama orang lain?",
        answer: "Bisa, tapi tetap aman. Kamu bisa share cerita secara anonim, ngasih reaksi atau dukungan ke cerita orang lain — tapi tanpa identitas. Jadi gak ada drama, gak ada kompetisi. Cuma saling support.",
    },
    {
        question: "Aku gapunya pengalaman nulis, cocok gak?",
        answer: "Cocok banget. Kamu gak perlu jago nulis. Di CerminKu, kamu nulis buat diri sendiri, bukan buat dapet likes. Nggak ada aturan, nggak ada standar. Yang penting kamu jujur sama diri sendiri.",
    },
];

export default function FAQ() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleFAQ(index) {
        setIsOpen((prev) => (prev === index ? null : index));
    }

    return (
        <>
            <section id="faq" className="relative flex flex-col gap-4 mt-12">
                <div className="gradient-blob bg-black/20 w-80 h-80 -top-10 -left-10 animate-float"></div>
                <div className="gradient-blob bg-primary-800 w-80 h-80 bottom-0 -right-10 animate-float"></div>

                <div className="grid grid-cols-2 gap-4 items-center">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl text-primary-800 font-bold leading-tight">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-secondary-800">
                            Bertanya karena tidak tahu itu wajar dan penting.
                            Yuk, cari tahu lebih banyak tentang CerminKu.
                        </p>
                    </div>

                    <img
                        src="/icon/faq.svg"
                        className="w-md ml-auto"
                        alt="FAQ icon image"
                    />
                </div>

                <div className="scroll-mt-20 grid md:grid-cols-2 grid-cols-1 gap-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="w-full">
                            <div
                                onClick={() => toggleFAQ(index)}
                                className={`flex items-center justify-between w-full p-4 ${(index % 4 === 1 || index % 4 === 2) ? "bg-primary-800" : "bg-secondary-800"} text-white rounded-xl shadow cursor-pointer transition duration-300 ${
                                    isOpen === index ? "rounded-b-none" : ""
                                }`}
                            >
                                <p className="text-base font-medium text-white">
                                    {faq.question}
                                </p>
                                {isOpen === index ? (
                                    <FaMinus className="w-4 h-4 text-white" />
                                ) : (
                                    <FaPlus className="w-4 h-4 text-white" />
                                )}
                            </div>

                            <div
                                className={`${(index % 4 === 1 || index % 4 === 2) ? "bg-primary-800" : "bg-secondary-800"} text-white shadow rounded-b-xl overflow-hidden transition-all duration-300 ease-in-out ${
                                    isOpen === index
                                        ? "max-h-96 opacity-100 p-4"
                                        : "max-h-0 opacity-0 p-0"
                                }`}
                            >
                                <p className="text-white text-base">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
