import AnimateBackground from "../components/animate-background";
import MainFooter from "../components/shared/main-footer";
import MainHeader from "../components/shared/main-header";

export default function AppLayout({ children, ...props }) {
    return (
        <>
            <AnimateBackground />
            <MainHeader />

            <main {...props}>{children}</main>

            <MainFooter />
        </>
    );
}
