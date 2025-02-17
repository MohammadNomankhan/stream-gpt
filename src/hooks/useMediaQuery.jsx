import { useEffect, useState } from "react";


export const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const listner = e => setMatches(e.matches)
        mediaQueryList.addEventListener('change', listner);
        return () => mediaQueryList.removeEventListener('change', listner);
    }, [query]);

    return matches;
}
