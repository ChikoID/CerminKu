import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaTiktok } from "react-icons/fa6";

export default function MainFooter() {
    return (
        <>
            <footer className="grid grid-cols-3 mt-12 p-6 from-primary-800 to-secondary-800 bg-gradient-to-b z-10">
                <div className="flex flex-col items-start gap-4 z-10">
                    <div className="flex items-center gap-2">
                        <img
                            src="/icon/cerminku_white.svg"
                            width={40}
                            alt="CerminKu logo white"
                        />
                        <h1 className="font-bold text-2xl text-white hover:text-secondary-100">
                            CerminKu
                        </h1>
                    </div>

                    <p className="text-white">
                        Tempat refleksi diri digital untuk Gen Z & Gen Alpha.
                        Aman, privat, dan penuh makna. Bukan sekadar nulis ini
                        perjalanan jadi versi terbaik dari dirimu.
                    </p>

                    <div className="flex items-start gap-2 mt-2"></div>
                </div>

                <div className="flex flex-col gap-2 z-10 text-white ml-auto">
                    <h2 className="font-semibold text-xl mb-2">Navigasi</h2>
                    <a
                        href="#about"
                        className="hover:text-secondary-200 transition"
                    >
                        Tentang Kami
                    </a>
                    <a
                        href="#feature"
                        className="hover:text-secondary-200 transition"
                    >
                        Fitur
                    </a>
                    <a
                        href="#faq"
                        className="hover:text-secondary-200 transition"
                    >
                        FAQ
                    </a>
                    <a
                        href="#login"
                        className="hover:text-secondary-200 transition"
                    >
                        Masuk
                    </a>
                </div>

                <div className="flex flex-col gap-2 text-white z-10 ml-auto">
                    <h2 className="font-semibold text-lg mb-2">Hubungi Kami</h2>
                    <div className="flex gap-3 mt-2 items-center justify-end">
                        <a
                            href="https://instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram className="hover:scale-110 transition text-xl" />
                        </a>
                        <a
                            href="https://tiktok.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTiktok className="hover:scale-110 transition text-xl" />
                        </a>
                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BsTwitterX className="hover:scale-110 transition text-xl" />
                        </a>
                    </div>
                </div>

                <div className="col-span-full border-t border-white/20 mt-8 pt-4 text-sm text-center text-gray-300 z-10">
                    &copy; {new Date().getFullYear()} CerminKu. All rights
                    reserved.
                </div>
            </footer>
        </>
    );
}
