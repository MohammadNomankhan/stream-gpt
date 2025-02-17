import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"


const RegisterForm = ({ className, onFormChange }) => {
    const handleRegister = (e) => {
        e.preventDefault();
        const {name, username, password} = e.target.elements;
        console.log(name.value, username.value, password.value);
    }
    return (
        <form onSubmit={handleRegister} className={cn("grid gap-4", className)}>
            <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                    className="bg-gray-800 border border-neutral-600 p-2 text-white focus:outline-none focus:ring focus:ring-rose-500"
                    type="name"
                    id="name"
                    placeholder="Enter your name"
                />
            </div>
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
                
            </div>
            <Button type="submit" className="w-full p-3 bg-rose-500 hover:bg-rose-600 transition">
                Register
            </Button>
            <p className="text-center text-sm">
                Already have a BINGE account ?{" "}
                <span className="text-rose-400 hover:underline cursor-pointer" onClick={() => onFormChange("login")}>Login now</span>
            </p>
        
        </form>
    )
}

export default RegisterForm;