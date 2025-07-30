import { useEffect, useState } from "react";
import HeaderTitle from "../items/headerTitle";
import NavItems from "../items/navItems";
import Button from "../atom/button";
import OutlineButton from "../atom/outlineButton";
import BurgerMenu from "../items/burgerMenu";
import NavMobileMenu from "../items/navMobileItems";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 5);
            setIsMenuOpen(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`bg-fix flex-center px-6 max-sm:px-4 z-50 transition-all duration-200 ${
                isMenuOpen ? "!bg-white" : ""
            } ${isScrolled ? "backdrop-blur-lg bg-white/50" : ""}`}
        >
            <nav className="flex-between w-full px-6 py-5 max-sm:px-2">
                <HeaderTitle />

                <NavItems />

                <div className="flex-center gap-4">
                    <OutlineButton as="link" href={"/register"}>Daftar</OutlineButton>
                    <Button as="link" href={"/login"}>Masuk</Button>

                    <BurgerMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
                </div>
            </nav>

            <NavMobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        </header>
    );
}
