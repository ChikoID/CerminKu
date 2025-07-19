export default function Input({ className, type, ...props }) {
    return (
        <input
            type={type}
            data-slot="input"
            className={`${className} border border-primary-800 outline-none focus:ring-0 px-4 py-2 rounded-xl text-primary-800`}
            {...props}
        />
    );
}
