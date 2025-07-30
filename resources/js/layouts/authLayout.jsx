export default function AuthLayout({ children, ...props }) {
    return (
        <div className="relative w-full">
            <main {...props}>{children}</main>
        </div>
    );
}
