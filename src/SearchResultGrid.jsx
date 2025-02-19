import SearchMovieCard from "./SearchMovieCard";

const SearchResultGrid = ({searchResults}) => {
    console.log(searchResults)
    return (
        <>{searchResults.map(result => <SearchMovieCard key={result.id} movie={result} />)}</>
    )
}

export default SearchResultGrid;