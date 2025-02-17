import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Loader } from "lucide-react"
import { useState } from "react"


const LoginForm = ({ className, onFormChange }) => {
    const [formState, setFormState] = useState({ status: "idle", error: null });
    const { status, error } = formState;

    const handleLogin = (e) => {
        e.preventDefault();
        const { username, password } = e.target.elements;
        try {
            setFormState({ status: "loading" });
            console.log(username.value.trim)
            if (!username.value.trim() || !password.value.trim()) {
                throw new Error("Enter valid credentials")
            }
            console.log(username.value, password.value);
            setTimeout(() => setFormState({ status: "resolved" }), 2000)
        } catch (error) {
            console.log(error)
            setFormState({ status: "rejected", error: error })
        }
    }
    return (
        <>
            <form onSubmit={handleLogin} className={cn("grid gap-4", className)}>
                <div className="space-y-2">
                    <Label htmlFor="username">Email</Label>
                    <Input
                        className="bg-gray-800 border border-neutral-600 p-2 text-white focus:outline-none focus:ring focus:ring-rose-500"
                        type="email"
                        id="username"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        className="bg-gray-800 border border-neutral-600 p-2 text-white focus:outline-none focus:ring focus:ring-rose-500"
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                    />
                    <p className="mt-1 text-sm text-rose-400 hover:underline cursor-pointer">
                        Forgot your password?
                    </p>
                </div>
                <Button type="submit" className="w-full p-3 bg-rose-500 hover:bg-rose-600 transition flex items-center gap-2">
                    <span>Login</span>
                    {status == "loading" && <Loader size={18} className="animate-spin" />}
                </Button>
            </form>
            <p className="text-sm px-4 text-amber-500 mt-2">{error?.message}</p>
            <p className="text-center text-sm px-4 mt-4">
                Don't have a BINGE account yet?{" "}
                <span className="text-rose-400 hover:underline cursor-pointer" onClick={() => onFormChange("register")}>Register now</span>
            </p>
        </>
    )
}

export default LoginForm;