import { useState } from "react";
import Header from "./Header";
import SearchResultGrid from "./SearchResultGrid";
import { useSearch } from "./hooks/useSearch";
import MovieCardShimmer from "./MovieCardShimmer";

const AuthenticatedApp = () => {

    const [query, setQuery] = useState("");
    const [status, searchResults, error] = useSearch(query);
    const handleSearch = (inputSearch) => setQuery(inputSearch);
    console.log(status, searchResults, error)

    return (
        <div className="bg-gray-900 min-h-screen">
            <Header onSearch={handleSearch} />
            <main className="p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {status == "idle" && <p className="col-span-2 text-white text-lg">Start Searching for your favorite Movies and TV Shows</p>}
                {status == "resolved" && <SearchResultGrid searchResults={searchResults} />}
                {status == "pending" && Array(8).fill('*').map((e, idx) => <MovieCardShimmer key={idx} />)}
                {status == "rejected" || searchResults?.length == 0 && <p className="col-span-2 text-white text-lg text-amber-400">{error.status_message}</p>}
            </main>
        </div>
    );
}

export default AuthenticatedApp;

