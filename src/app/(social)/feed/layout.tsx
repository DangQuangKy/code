export default function FeedLayout({
    children,
    modal,
}: {
    children: React.ReactNode;
    modal: React.ReactNode | null;
}) {
    return (
        <div className="flex w-full">
            {modal ? modal : null}
            <aside className="shadow flex-1 p-4 mr-1 bg-slate-300 sticky top-[50px] h-[94vh]">
                <h1>left bar</h1>
            </aside>
            {children}
            <aside className="shadow flex-1 p-4 ml-1 bg-slate-300 sticky top-[50px] h-[94vh]">
                <h1>right bar</h1>
            </aside>
        </div>
    );
}