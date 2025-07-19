import { Head, Link, useForm } from "@inertiajs/react";
import AuthLayout from "../../layout/auth-layout";
import Input from "../../components/ui/input";
import InputError from "../../components/input-error";
import { route } from "ziggy-js";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    function handleSubmit(e) {
        e.preventDefault();

        post("/register", {
            onFinish: () => reset("password", "password_confirmation"),
        });
    }

    return (
        <>
            <AuthLayout className="relative px-6">
                <Head title="Register" />

                <header className="mt-10 mx-auto max-w-xl">
                    <div className="flex flex-col items-center justify-center gap-4 w-full">
                        <h1 className="text-5xl font-black text-center leading-tight text-primary-800">
                            Register
                        </h1>
                        <p className="text-secondary-800 text-sm md:text-base text-center w-xl">
                            Daftar untuk memulai perjalanan healing kamu bersama
                            CerminKu. Kami di sini untuk mendengarkan dan
                            menemanimu.
                        </p>
                    </div>
                </header>

                <section className="my-10 mx-auto max-w-xl flex flex-col items-center justify-center gap-4 w-full z-10">
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
                                type="text"
                                name="name"
                                id="name"
                                required
                                tabIndex={1}
                                autoComplete="name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                disabled={processing}
                                placeholder="Full name"
                            />
                            <InputError>{errors.name}</InputError>
                        </div>
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
                            <InputError>{errors.email}</InputError>
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
                            <InputError>{errors.password}</InputError>
                        </div>
                        <div className="grid gap-2">
                            <Input
                                type="password"
                                name="password_confirmation"
                                id="password_confirmation"
                                required
                                tabIndex={1}
                                autoComplete="password_confirmation"
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                disabled={processing}
                                placeholder="Konformasi Password"
                            />
                            <InputError>
                                {errors.password_confirmation}
                            </InputError>
                        </div>

                        <button
                            type="submit"
                            className="px-4 py-2 bg-gradient-to-r from-primary-800 to-secondary-800 hover:bg-primary-900 cursor-pointer text-white font-semibold rounded-xl"
                            disabled={processing}
                        >
                            {processing ? "Loading..." : "Kirim"}
                        </button>
                    </form>
                </section>
            </AuthLayout>
        </>
    );
}
