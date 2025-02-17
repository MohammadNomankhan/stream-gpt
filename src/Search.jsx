import { Input } from "@/components/ui/input";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { SearchIcon } from "lucide-react";


const Search = () => {
    return (
        <form className="relative">
            <Input
                id='search'
                type='search'
                placeholder="search for movie or show"
                className='w-full mt-4 py-2 px-4 border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-rose-400 focus:ring-rose-400 focus:ring-2 outline-none'
            />
            <TooltipProvider>
                <label htmlFor="search" className="absolute right-2 top-2">
                    <Tooltip>
                        <TooltipTrigger><SearchIcon className="text-white" /></TooltipTrigger>
                        <TooltipContent>
                            <p className="text-white text-sm p-1">Search movies & Shows</p>
                        </TooltipContent>
                    </Tooltip>
                </label>
            </TooltipProvider>

        </form>
    )
}

export default Search;