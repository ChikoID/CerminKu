import { Link } from "@inertiajs/react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

export default function HeroQuote() {
    return (
        <div className="flex-center flex-col gap-4 w-full max-md:hidden">
            <h3 className="text-secondary-800 font-bold text-2xl mr-auto p-3 rounded-full border border-primary-800">
                <BiSolidQuoteAltLeft />
            </h3>

            <p className="text-primary-800 font-normal text-base text-justify leading-relaxed">
                Kadang, diam bukan berarti gak peduli tapi karena hati lagi
                belajar bicara dengan cara yang beda. Di saat seperti itu,
                kehadiran CerminKu yang hangat bisa lebih kuat dari seribu kata.
            </p>

            <p className="mt-2 text-secondary-800 leading-relaxed">
                <span>Masih bingung? </span>
                <Link
                    href="#about"
                    className="underline hover:text-primary-800"
                >
                    Pelajari lebih lanjut
                </Link>
            </p>
        </div>
    );
}
