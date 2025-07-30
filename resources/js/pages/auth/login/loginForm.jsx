import Button from "../../../components/atom/button";
import Input from "../../../components/atom/input";

export default function LoginForm({ handleSubmit, data, setData, process }) {
    return (
        <form
            onSubmit={handleSubmit}
            className="flex-center flex-col gap-4 w-full"
        >
            <Input
                type="email"
                name="email"
                value={data.email}
                disabled={process}
                onChange={(e) => setData("email", e.target.value)}
                placeholder="Your Email"
                required
            />

            <Input
                type="password"
                name="password"
                value={data.password}
                disabled={process}
                onChange={(e) => setData("password", e.target.value)}
                placeholder="Your Password"
                required
            />

            <Button type="submit" className="!px-8">Kirim</Button>
        </form>
    );
}
