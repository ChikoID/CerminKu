export default function Input({ className, type, name, ...props }) {
    return (
        <input
            type={type}
            name={name}
            id={name}
            autoComplete={name}
            data-slot="input"
            className={`${className} border border-primary-800 outline-none rounded-xl focus:ring-0 px-4 py-2 text-primary-800 w-full`}
            {...props}
        />
    );
}
