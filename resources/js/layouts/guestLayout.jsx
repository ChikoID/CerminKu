import Navbar from "../components/navigations/navbar";

export default function GuestLayout({ children, ...props }) {
    return (
        <div className="relative w-full overflow-x-hidden">
            <Navbar />

            <main {...props}>{children}</main>

            {/* <MainFooter /> */}
        </div>
    );
}
