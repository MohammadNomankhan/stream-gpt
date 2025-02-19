import * as React from "react"
import { useMediaQuery } from "./hooks/useMediaQuery"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import BingeLogo from "./BingeLogo"
import { CircleUser, X } from "lucide-react"
import clsx from "clsx"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"
import Search from "./Search"

const Header = ({onSearch}) => {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 640px)")
    const [formType, setFormType] = React.useState("login");

    const handleFormChange = (inputFormType) => setFormType(inputFormType)

    return (
        <header className="p-4">
            <div className="flex justify-between items-center">
                <BingeLogo />
                <Drawer open={open} onOpenChange={setOpen} direction={isDesktop ? "right" : "bottom"}>
                    <DrawerTrigger asChild>
                        <Button variant="ghost">
                            <CircleUser className="w-6 h-6 text-gray-300" />
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent className={clsx("bg-gray-900 text-white p-6", isDesktop ? "h-screen rounded-l-lg right-0 max-w-[425px]" : "h-[85vh] w-full rounded-t-lg")}>
                        <DrawerHeader className="text-left">
                            <DrawerTitle className="text-xl font-semibold">
                                <span className="text-rose-500">Login</span> to your BINGE account.
                            </DrawerTitle>
                            <DrawerDescription className="leading-relaxed tracking-wide">
                                Don't lose your watchlist! Log in to save your favorites and continue where you left off.
                            </DrawerDescription>
                        </DrawerHeader>
                        {formType == "login" && <LoginForm className="px-4 pt-4" onFormChange={handleFormChange} />}
                        {formType == "register" && <RegisterForm className="px-4 pt-4" onFormChange={handleFormChange} />}
                        <DrawerClose asChild>
                            <Button
                                variant="ghost"
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-800 transition"
                            >
                                <X className="w-6 h-6" />
                            </Button>
                        </DrawerClose>
                    </DrawerContent>
                </Drawer>
            </div>
            <Search onSearch={onSearch} />
        </header>
    )
}

export default Header
