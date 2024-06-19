'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
    {
        href: "/login",
        label: "Login",
    },
    {
        href: "/register",
        label: "Register",
    },
    {
        href: "/forgot-password",
        label: "Forgot Password",
    }
]

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname()
    const active = "text-bold text-black"
    const inActive = "text-blue text-underline"
    return (
        <div className="h-[96vh] w-screen border-2 border-red-400 rounded">
            <h1>Auth Layout</h1>
            <div className="flex justify-evenly">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link className={isActive ? active : inActive} key={link.href} href={link.href}>
                            {link.label}
                        </Link>
                    )
                })}  
            </div>
            {children}
        </div>
    );
}