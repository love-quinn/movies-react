import { Movie } from "@/types/movie";
import StarRating from "./star-rating";

export interface Props {
  movie: Movie;
}

const MovieCard = (props: Props) => {
  return (
    <li key={props.movie.id} className="text-white group overflow-hidden">
      <div className="relative">
        <img
          className="w-full opacity-100 group-hover:opacity-50 transition-opacity duration-300 h-full object-cover rounded-lg"
          src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}
          alt={props.movie.title}
        />
        <div className="absolute bottom-0 h-60 w-full flex flex-col p-2 justify-end bg-gradient-to-t from-black to-transparent pt-8 pb-2 px-2">
          <p className="text-gray-100 font-medium text-sm">
            {props.movie.title}
          </p>
          <StarRating rating={props.movie.vote_average} />

          <div className={`mt-2 h-0 opacity-0 ${props.movie.overview ? 'group-hover:h-32' : 'group-hover:h-10'} group-hover:opacity-100 transition-all duration-300 overflow-hidden`}>
            {props.movie.overview ? (
              <p className="text-gray-100 text-sm">
                {props.movie.overview.length > 100
                  ? props.movie.overview.substring(0, 90) + "..."
                  : props.movie.overview}
              </p>
            ) : null}

            <button className="w-full cursor-pointer text-gray-100 my-2 bg-purple-800 px-2 py-1 rounded text-sm">Ver mais</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MovieCard;
