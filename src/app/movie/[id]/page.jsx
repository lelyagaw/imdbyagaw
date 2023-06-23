import React from 'react'
async function getMovie(movieId) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);
    return await res.json();
}
export default async function MoviePage({params}) {
  const movieId = params.id;
  const movie = await getMovie(movieId);
  return (
    <div className='w-full'>
        <div className='p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6 '>
            <img className='rounded-lg shadow-md group-hover:opacity-80 transition-opacity duration-200 ' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt='Moive Poster'/>
            <div className="div">
                <h1 className='text-lg mb-3 font-bold'>{movie.title || movie.name}</h1>
                <p><span className='font-semibold mr-1'>Overview :</span>
                {movie.overview}
                </p>
                <p className='mb-3'><span className='font-semibold mr-1'>Date Released:</span>
                {movie.release_date || movie.first_air_date}
                </p>
                <p className='mb-3'>
                    <span className='font-semibold mr-1'>Rating:</span>
                    {movie.vote_count}
                </p>
            </div>
        </div>

    </div>
  )
}
