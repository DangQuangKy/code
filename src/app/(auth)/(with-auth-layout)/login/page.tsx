'use client' // !dùng hook thì bắt buộc phải có 
import { useRouter } from "next/navigation";
export default function Login() {
  const nav = useRouter()
  const handleLogout = () => {
    // xử lí logout
    // call logout api
    // xóa token
    // redirect về trang home
    nav.replace('/');
    // nav.back();
    // nav.forward();
    // nav.refresh();
    }
    const handleSubmit = async (e : any) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const username = formData.get('username');
      const password = formData.get('password');
      const response = await fetch('/login/api ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      })
      const data = await response.json();
      console.log('data', data);
      

      
    }  
    return (
      <main className="flex h-full w-full flex-col items-center justify-between p-24">
        <h1>Login page</h1>
        <form onSubmit={handleSubmit} >
          <input className="relative block w-full px-3 py-2 my-4 border border-gray-300 rounded-t-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" type="text" name="username"  />
          <input className="relative block w-full px-3 py-2 my-4 border border-gray-300 rounded-t-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" type="password" name="password"/>
          <button type="submit">Login</button>
        </form>
        <button onClick={handleLogout}>Logout</button>
      </main>
    );
  }