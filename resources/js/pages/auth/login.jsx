import { Head, useForm } from "@inertiajs/react";
import Paragraph from "../../components/atom/paragraph";
import Title from "../../components/atom/title";
import AuthLayout from "../../layouts/authLayout";
import OutlineButton from "../../components/atom/outlineButton";
import DividerWithText from "../../components/items/DividerWithText";
import LoginForm from "./login/loginForm";

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
        <AuthLayout>
            <Head title="Login" />

            <header className="flex-center flex-col mt-10">
                <Title>Masuk Sekarang</Title>
                <Paragraph>
                    Masuk untuk melanjutkan perjalanan healing kamu bersama
                    CerminKu. Kami di sini untuk mendengarkan dan menemanimu.
                </Paragraph>
            </header>

            <section className="flex-center flex-col gap-4 mx-auto max-w-lg mt-10">
                <OutlineButton
                    className="flex-center gap-2 w-full"
                    as="link"
                    href={"/auth/google"}
                >
                    <img
                        src="/icon/google.svg"
                        alt="Google Icon"
                        width={20}
                        height={20}
                    />
                    Login with Google
                </OutlineButton>

                <DividerWithText />

                <LoginForm
                    handleSubmit={handleSubmit}
                    data={data}
                    setData={setData}
                    process={processing}
                />
            </section>
        </AuthLayout>
    );
}
