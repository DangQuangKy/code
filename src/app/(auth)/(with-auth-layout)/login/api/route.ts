import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const headerList = headers();
    const header = headerList.get('Authorization');

    const cookieStore = cookies();
    const token = cookieStore.get('token');
    console.log('token:' + token);
    console.log('env:' + process.env.PRIVETE_SOME_VALUE);
    
    // headerList.set('custom-header', 'header-value');
    return Response.json({
        header: header,
        body: process.env.PRIVETE_SOME_VALUE
    })
}

export async function POST(request: Request) {
    const body = await request.json();
    console.log('body', body);
    // 
    if (body.username === 'admin' && body.password === 'admin') {
        return Response.json({
            username: 'admin',
            id: 1,
            accessToken: 'access_token-abcdef',
            refreshToken: 'access_token-abcdef'
        })
    } 
    const res = NextResponse.json({
        message: 'Invalid username or password'
    },
    {status:401})
}