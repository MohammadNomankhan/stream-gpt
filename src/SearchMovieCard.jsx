import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { BookmarkPlus} from "lucide-react";

const SearchMovieCard = ({ movie }) => {
    return (
        <Card className="relative flex flex-col gap-4 border-none">
            <CardHeader className="flex-shrink-0 p-0">
                <img
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : `https://dummyjson.com/image/400x600/ffa1ad/000?text=${movie.title || movie.name}&fontSize=40`}
                    alt={movie.title}
                    className="w-full h-auto object-cover rounded-lg"
                    onError={e => e.target.src = `https://dummyjson.com/image/400x600/ffa1ad/000?text=${movie.title || movie.name}&fontSize=40`}
                />
            </CardHeader>
            <CardContent className="p-0">
                <CardTitle className="text-white text-lg font-semibold truncate max-w-[45vw] sm:max-w-[25vw]">{movie.title || movie.name}</CardTitle>
                <CardDescription>
                    <p className="text-gray-400 text-sm">Romance, Drama</p>
                    <Button variant='secondary' size='lg' className="py-2 flex text-rose-400">
                        <BookmarkPlus size={18} />
                        <p>Binge List</p>
                    </Button>
                </CardDescription>
            </CardContent>
        </Card>
    );
};

export default SearchMovieCard;
