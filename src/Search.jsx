import { Input } from "@/components/ui/input";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Loader, SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";


const Search = ({onSearch}) => {

    const [query, setQuery] = useState("");
    const [status, setStatus] = useState("idle");

    useEffect(() => {
        const fetchResults = async () => {
            if (!query.trim()) return;
            setStatus("pending");
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjFjMTZkZGJkOTZjZjNiNzU3YWE1ZWYwM2YxZmZkMCIsIm5iZiI6MTczNDYyNzkzNC45MzI5OTk4LCJzdWIiOiI2NzY0NTI1ZTg0YzkzZmU4NjhhZTFkNTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.43_cGxhOHlOmJe9nOB0Q6xVwh-8eJnFsX0CCIQcIfYU'
                    }
                };

                const res = await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`, options);
                const data = await res.json();
                console.log(data)
                setStatus("resolved");
            } catch (err) {
                console.log(err);
                setStatus("rejected")
            } 
        }

        fetchResults();
    }, [query]);

    const handleSearch = (e) => {
        e.preventDefault();
        // setQuery(e.target.elements.search.value);
        onSearch(e.target.elements.search.value)
    }

    return (
        <form onSubmit={handleSearch} className="relative">
            <Input
                id='search'
                type='text'
                placeholder="search for movie or show"
                className='w-full mt-4 py-2 px-4 border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-rose-400 focus:ring-rose-400 focus:bg-gray-800 focus:ring-2 outline-none'
            />
            <TooltipProvider>
                <label htmlFor="search" className="absolute right-3 top-3">
                    <Tooltip>
                        <TooltipTrigger>{status == 'pending' ? <Loader size={18} className="animate-spin text-white" /> : <SearchIcon size={18} className="text-white" />}</TooltipTrigger>
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

// https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg