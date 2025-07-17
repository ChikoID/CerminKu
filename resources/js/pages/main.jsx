import { Head } from "@inertiajs/react";
import AppLayout from "../layout/app-layout";
import Hero from "./main/hero";
import About from "./main/about";
import Feature from "./main/feature";
import FAQ from "./main/faq";

export default function Welcome() {
    return (
        <AppLayout className="relative pt-[5rem] px-6 z-10">
            <Head title="Home" />

            <Hero />
            <About />
            <Feature />
            <FAQ/>
        </AppLayout>
    );
}
