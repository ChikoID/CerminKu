export default function DividerWithText({ text = "or" }) {
    return (
        <div className="flex w-full items-center gap-4">
            <span className="h-[1px] w-full rounded-xl bg-neutral-400" />
            <span className="text-sm text-neutral-600">{text}</span>
            <span className="h-[1px] w-full rounded-xl bg-neutral-400" />
        </div>
    );
}
