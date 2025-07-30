import HeroEmailForm from "./hero/HeroEmailForm";
import HeroIntro from "./hero/heroIntro";
import HeroQuote from "./hero/HeroQuote";

export default function Hero() {
    return (
        <>
            <div className="gradient-blob bg-primary-800 w-80 h-80 -top-10 -left-10 animate-float"></div>
            <div className="gradient-blob bg-primary-800 w-80 h-80 bottom-0 -right-10 animate-float"></div>
            <div className="gradient-blob bg-secondary-800 w-80 h-80 bottom-0 -left-10 animate-float"></div>

            <section
                id="home"
                className="scroll-mt-20 flex-center flex-col w-full px-6 gap-4"
            >
                <HeroIntro />

                <div className="grid grid-cols-5 max-md:grid-cols-1 justify-items-center items-center">
                    <HeroQuote />

                    <img
                        src="/icon/illustration_2.svg"
                        alt="Illustration Icon For CerminKu"
                        className="w-md col-span-3 max-md:col-span-1"
                    />

                    <HeroEmailForm/>
                </div>
            </section>
        </>
    );
}
