// authProvider.tsx
import { useState } from "react";
import { AuthContext } from "./authContext";

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'));

    const login = (token: string) => {
        // TODO: handle login logic
        localStorage.setItem('token', token)
        setToken(token)
    }

    const logout = () => {
        // TODO: handle logout logic
        localStorage.removeItem('token')
        setToken(null)
    }

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}