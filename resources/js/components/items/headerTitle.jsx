export default function HeaderTitle() {
    return (
        <div className="flex items-center gap-4">
            <img
                src="/icon/cerminku.svg"
                alt="CerminKu Logo"
                className="w-10"
            />

            <h1 className="font-bold text-2xl text-primary-800 hover:text-secondary-800 block group ease-in-out transition-all max-sm:hidden">
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
    );
}
