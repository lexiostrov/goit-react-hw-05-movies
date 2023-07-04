import { getOneMovie } from '../servises/Api';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import Notiflix from 'notiflix';

const MovieDetails = () => {
  const [oneMovie, setOneMovie] = useState('');

  const { movieId } = useParams();

  const location = useLocation();

  useEffect(() => {
    async function getMovie() {
      try {
        const response = await getOneMovie(movieId);
        setOneMovie(response);
      } catch (error) {
        Notiflix.Notify.failure(
          'Sorry, something went wrong, please try again later'
        );
      }
    }
    getMovie();
  }, [movieId]);

  const getMovieYear = () => {
    if (oneMovie && oneMovie.release_date) {
      return new Date(oneMovie.release_date).getFullYear();
    }
  };

  const getUserScore = () => {
    return Math.round(oneMovie.vote_average * 10);
  };

  const genresMovie = () => {
    if (oneMovie && oneMovie.genres) {
      const newgenres = oneMovie.genres.map(genre => genre.name);
      return newgenres.join(' ');
    }
  };

  const backLinkHref = location.state?.from ?? '/';

  return (
    <main>
      <div>
        <Link to={backLinkHref}>Go back</Link>
        <div>
          {oneMovie && (
            <img
              src={
                oneMovie.poster_path
                  ? `https://image.tmdb.org/t/p/w300${oneMovie.poster_path}`
                  : 'https://via.placeholder.com/300x450?text=No+foto'
              }
              alt={oneMovie.original_title}
              width="300"
              loading="lazy"
            />
          )}
          <div>
            <h1>
              {oneMovie.original_title} ({getMovieYear()})
            </h1>
            <p>User score: {getUserScore()}%</p>
            <h2>Overview</h2>
            <p>{oneMovie.overview}</p>
            <h3>Genres</h3>
            <p>{genresMovie()}</p>
          </div>
        </div>
        <div>
          <p>Additional Information</p>
          <ul>
            <li>
              <Link to="cast" state={location.state}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={location.state}>
                Reviews
              </Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading subpage...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default MovieDetails;
