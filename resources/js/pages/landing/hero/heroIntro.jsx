import Button from "../../../components/atom/button";

export default function HeroIntro() {
    return (
        <div className="flex-center flex-col gap-4 w-full">
            <h1 className="text-5xl md:text-6xl font-black text-center leading-tight text-primary-800">
                YOU ARE <span className="text-secondary-800">NOT</span> ALONE
            </h1>
            <p className="text-secondary-800 text-base text-center w-xl max-sm:w-full">
                CerminKu hadir sebagai teman virtual yang mendengarkan. Kami
                percaya, kadang kamu hanya butuh ruang untuk bicara. Yuk, mulai
                perjalanan healing kamu hari ini.
            </p>

            <Button as="link" href={"/register"}>Mulai Sekarang</Button>
        </div>
    );
}
