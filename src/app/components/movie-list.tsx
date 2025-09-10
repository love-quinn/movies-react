"use client";

import { useEffect, useState } from "react";
import MovieCard from "./movie-card";
import { Movie } from "@/types/movie";
import { AiOutlineLoading } from "react-icons/ai";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    setIsLoading(true);
    await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });

    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <AiOutlineLoading size={32} className="animate-spin text-purple-800" />
      </div>
    );
  }

  return (
    <ul className="movie-list p-4 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
