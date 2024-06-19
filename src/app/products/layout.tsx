'use client'
// import { Metadata } from "next";
import Link from "next/link";
import { useState } from "react";

// export const metadata: Metadata = {
//     title: {
//         default: "Product List",
//         absolute: '',
//         template: 'Product %s | Next App',
//     }
// }

export default function ProductListLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [ name, setName ] = useState('');
    const itemStyle = "p-4 mt-2 rounded-md hover:bg-blue-600 hover:text-white"
  return (
    <div className="flex w-full h-[80vh]">
        <aside className="flex flex-col h-full w-[250px] p-4 bg-blue-500">
            <h1 className={itemStyle}>Sort A-Z</h1>
            <h1 className={itemStyle}>Search</h1>
            <h1 className={itemStyle}>Filter</h1>
            <Link className={itemStyle} href={'/products/1'}>Product 1</Link>
            <Link className={itemStyle} href={'/products/2'}>Product 2</Link>
            <input 
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </aside>
        {children}
    </div>
  )
}
