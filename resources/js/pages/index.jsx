import { Head } from "@inertiajs/react";
import GuestLayout from "../layouts/guestLayout";
import Hero from "./landing/hero";
import About from "./landing/about";

export default function Index() {
    return (
        <GuestLayout className="relative pt-[5rem] px-6 z-10">
            <Head title="Home"/>
            
            <Hero/>
            <About/>
        </GuestLayout>
    );
}
