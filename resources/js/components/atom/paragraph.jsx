export default function Paragraph({ children }) {
    return (
        <p className="text-secondary-800 text-sm md:text-base text-center w-full max-w-lg mx-auto mt-4">
            {children}
        </p>
    );
}
