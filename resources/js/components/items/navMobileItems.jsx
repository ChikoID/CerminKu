import { useEffect, useState } from "react";
import NavLink from "../atom/navLink";

const navbars = [
    { label: "Beranda", href: "#home" },
    { label: "Tentang", href: "#about" },
    { label: "Fitur", href: "#feature" },
    { label: "FAQ", href: "#faq" },
];

export default function NavMobileMenu({ isOpen, setIsOpen }) {
    const [activeLink, setActiveLink] = useState("#home");

    const handleClick = (e, href) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
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

    return (
        <>
            <div
                className={`fixed top-0 left-0 right-0 z-50 bg-white transition-transform duration-300 ease-in-out sm:hidden ${
                    isOpen ? "translate-y-20" : "-translate-y-full"
                }`}
            >
                <ul className="flex flex-col items-center gap-4 px-6 py-8">
                    {navbars.map((item, idx) => (
                        <NavLink
                            key={idx}
                            href={item.href}
                            active={item.href === activeLink}
                            onClick={(e) => handleClick(e, item.href)}
                            className="text-primary-800 text-lg font-semibold hover:text-secondary-800"
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </ul>
            </div>
        </>
    );
}
