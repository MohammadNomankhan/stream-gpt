const TMDB_BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const client = async (endpoint) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TMDB_API_KEY}`
        }
    };

    const res = await fetch(`${TMDB_BASE_URL}${endpoint}`, options);
    const data = await res.json();
    return data.results;
}