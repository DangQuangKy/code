function DashboardLayout({
    children,
    user,
    revenue,
    notifications,
    login,
}: {
    children: React.ReactNode;
    user: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;
    login: React.ReactNode;
}) {
    const isLoggedIn = true;
    return isLoggedIn ? ( 
        <section className="flex flex-col">
            {children}
            <div className="flex w-full gap-4">
                <aside className="flex flex-col w-[300px] h-[90vh]">
                    {user}
                    {revenue}
                </aside>
                <main className="flex flex-1">
                    {notifications}
                </main>
            </div>
        </section>
     ) : (
        <section className="flex flex-col h-[65vh]">
            {login}
        </section>
     )
}

export default DashboardLayout;