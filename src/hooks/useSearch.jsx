import { useEffect, useState } from "react";
import { client } from "../utils";

export const useSearch = (query) => {
    
    const [status, setStatus] = useState("idle");
    const [searchResults, setSearchResults] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSearchResults = async () => {
            if (!query.trim()) return;
            setStatus("pending");
            setError(null);
            try {
                const results = await client(`/search/multi?query=${query}&include_adult=false&language=en-US&page=1`)
                console.log(results)
                setSearchResults(results)
                setStatus("resolved");
            } catch (err) {
                setError(err);
                console.log(err.status_message)
                setStatus("rejected")
            } 
        }

        fetchSearchResults();
    }, [query]);

    return [status, searchResults, error]
}
