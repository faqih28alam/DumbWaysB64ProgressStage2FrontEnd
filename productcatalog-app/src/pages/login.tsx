// login.tsx

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react"
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ errorMsg, setErrorMsg ] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: handle login logic
        if (username === 'admin' && password === 'kosong123') {
            login('token_abc');
            navigate("/products");
            // TODO: redirect to home page
        } else {
            setErrorMsg('Invalid username or password');
        }
    }   

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <form onSubmit={handleLogin} className="w-full max-w-sm bg-white dark:bg-zinc-900 p-6 rounded shadow space-y-4">
                <h1 className="text-4xl mb-4 font-bold">Login</h1>
                <div className="">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="mt-4">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                {errorMsg && (<p className="text-red-500">{errorMsg}</p>)}
                <Button type="submit" className="w-full">Login</Button>
            </form>
        </div>
    )
}