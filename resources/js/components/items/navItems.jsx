import { useEffect, useState } from "react";
import NavLink from "../atom/navLink";

const navbars = [
    { label: "Beranda", href: "#home" },
    { label: "Tentang", href: "#about" },
    { label: "Fitur", href: "#feature" },
    { label: "FAQ", href: "#faq" },
];

export default function NavItems() {
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

    return (
        <ul className="flex-center max-sm:hidden gap-4">
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
    );
}
