"use client"
import Card from "@/components/Card";
import Link from "next/link";

// const getRandom = (num: number): number => {
//     return Math.floor(Math.random() * num);
// }

function NotificationPage() {
    // const random = getRandom(2); // 0 - 1
    // if (random === 1) {
    //     throw new Error ('Can not get notifications')
    // }
    return ( 
        <Card>
            <h1>Notifications Page</h1>
            <Link href='/dashboard/archived'>link</Link>
        </Card>
     );
}

export default NotificationPage;