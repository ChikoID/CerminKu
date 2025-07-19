import DashboardAside from "../components/shared/dashboard-aside";

export default function DashboardLayout({children, ...props}) {
    return (
        <>
            <DashboardAside />
            
            <main {...props}>{children}</main>
        </>
    );
}
