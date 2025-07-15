import { Head } from "@inertiajs/react";
import AppLayout from "../layout/app-layout";
import Hero from "./main/hero";
import About from "./main/about";

export default function Welcome() {
    return (
        <AppLayout className="relative pt-[5rem] px-6">
            <Head title="Home" />

            <Hero />
            <About />
        </AppLayout>
    );
}
