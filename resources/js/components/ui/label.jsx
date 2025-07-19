export default function Label({ className, children, ...props }) {
    return (
        <label {...props} className={`${className} text-primary-800 leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50`}>{children}</label>
    )
}
