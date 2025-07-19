export default function InputError({message, className = '', ...props}) {
    return message ? (
        <p className={`${className} text-sm text-red-600`} {...props}>{message}</p>
    ) : null
}