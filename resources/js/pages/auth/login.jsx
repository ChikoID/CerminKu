import { Head, useForm } from "@inertiajs/react";
import AuthLayout from "../../layout/auth-layout";
import InputError from "../../components/input-error";
import Input from "../../components/ui/input";
import { route } from "ziggy-js";

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post("/login", {
            onFinish: () => reset("password"),
        });
    }

    return (
        <>
            <AuthLayout className="relative px-6">
                <Head title="Login" />

                <header className="mt-10 mx-auto max-w-lg">
                    <div className="flex flex-col items-center justify-center gap-4 w-full">
                        <h1 className="text-5xl font-black text-center leading-tight text-primary-800">
                            Login
                        </h1>
                        <p className="text-secondary-800 text-sm md:text-base text-center w-full">
                            Masuk untuk melanjutkan perjalanan healing kamu
                            bersama CerminKu. Kami di sini untuk mendengarkan
                            dan menemanimu.
                        </p>
                    </div>
                </header>

                <section className="my-10 mx-auto max-w-lg flex flex-col items-center justify-center gap-4 w-full z-10">
                    <a
                        href="/auth/google"
                        className="w-full flex items-center justify-center gap-2 rounded-xl border border-neutral-300 px-4 py-2 text-neutral-600 bg-white/50 hover:bg-primary-50 hover:text-neutral-800"
                    >
                        <img
                            src="/icon/google.svg"
                            alt="Google Icon"
                            width={20}
                            height={20}
                        />{" "}
                        Register with Google
                    </a>

                    <div className="flex w-full items-center gap-4">
                        <span className="h-[1px] w-full rounded-xl bg-neutral-400" />
                        or
                        <span className="h-[1px] w-full rounded-xl bg-neutral-400" />
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4 w-full"
                    >
                        <div className="grid gap-2">
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                required
                                tabIndex={1}
                                autoComplete="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                disabled={processing}
                                placeholder="Your Email"
                            />
                            <InputError>{errors.name}</InputError>
                        </div>
                        <div className="grid gap-2">
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                required
                                tabIndex={1}
                                autoComplete="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                disabled={processing}
                                placeholder="Password"
                            />
                            <InputError>{errors.name}</InputError>
                        </div>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-gradient-to-r from-primary-800 to-secondary-800 hover:bg-primary-900 cursor-pointer text-white font-semibold rounded-xl w-64 mx-auto"
                        >
                            Kirim
                        </button>
                    </form>
                </section>
            </AuthLayout>
        </>
    );
}
