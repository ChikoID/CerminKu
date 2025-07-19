import { Link, usePage } from "@inertiajs/react";
import NavLink from "../navlink";
import { useEffect, useState } from "react";
import { route } from "ziggy-js";

const navbars = [
    { label: "Beranda", href: "#home" },
    { label: "Tentang", href: "#about" },
    { label: "Fitur", href: "#feature" },
    { label: "FAQ", href: "#faq" },
];

export default function MainHeader() {
    const { auth } = usePage().props;
    const [isScrolled, setIsScrolled] = useState();

    const [activeLink, setActiveLink] = useState("#home");

    const handleClick = (e, href) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
            setActiveLink(href);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 120;

            navbars.forEach((nav) => {
                const section = document.querySelector(nav.href);

                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;

                    if (
                        scrollPosition >= sectionTop &&
                        scrollPosition < sectionBottom
                    ) {
                        setActiveLink(nav.href);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 5);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 w-full flex items-center justify-center px-6 z-50 transition-all duration-200 ${
                    isScrolled ? "backdrop-blur-lg bg-white/50" : ""
                }`}
            >
                <nav className="flex items-center justify-between w-full px-6 py-5">
                    <div className="flex items-center gap-4">
                        <img
                            src="/icon/cerminku.svg"
                            alt="CerminKu Logo"
                            className="w-10"
                        />

                        <h1 className="font-bold text-2xl text-primary-800 hover:text-secondary-800 block group ease-in-out transition-all">
                            <span className="inline-block ease-in-out translate-y-1 transition-all -rotate-12 group-hover:translate-y-0 group-hover:rotate-0">
                                C
                            </span>
                            <span className="group-hover:-rotate-45 ease-in-out transition-all">
                                ermin
                            </span>
                            <span className="inline-block ease-in-out translate-y-1 transition-all rotate-12 group-hover:translate-y-0 group-hover:rotate-0">
                                Ku
                            </span>
                        </h1>
                    </div>

                    <ul className="flex items-center gap-4">
                        {navbars.map((item, idx) => (
                            <NavLink
                                key={idx}
                                href={item.href}
                                active={item.href === activeLink}
                                onClick={(e) => handleClick(e, item.href)}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4">
                        {auth.user ? (
                            <Link
                                href={"/dashboard"}
                                className="bg-primary-800 text-white px-4 py-2 rounded-xl font-semibold text-primary text-base"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="px-4 py-2 rounded-xl font-semibold text-primary-800 hover:text-secondary-800"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    className="bg-primary-800 hover:bg-secondary-800 shadow px-4 py-2 rounded-full font-semibold text-white"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </nav>
            </header>
        </>
    );
}
