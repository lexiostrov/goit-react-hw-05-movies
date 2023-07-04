import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getMovies } from '../servises/Api';
import Notiflix from 'notiflix';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') ?? '';
  const [movies, setMovies] = useState([]);

  const handleChange = e => {
    e.preventDefault();
    const value = e.target.search.value.trim();

    setSearchParams({ filter: value });
  };

  useEffect(() => {
    if (filter === '') return;
    async function getMoviesList() {
      try {
        const response = await getMovies(filter);
        const arr = response.map(
          ({ id, original_title, poster_path, vote_average, vote_count }) => ({
            id,
            original_title,
            poster_path,
            vote_average,
            vote_count,
          })
        );
        if (arr && arr.length > 0) {
          setMovies(arr);
        }
        if (arr.length === 0) {
          return Notiflix.Notify.info(
            'Sorry, the movie you requested was not found. Please try again.'
          );
        }
      } catch (error) {
        Notiflix.Notify.failure(
          'Sorry, something went wrong, please try again later'
        );
      }
    }
    getMoviesList();
  }, [filter]);

  return (
    <div>
      <form onSubmit={handleChange}>
        <input
          name="search"
          type="search"
          placeholder="Search movies..."
          autoComplete="off"
          autoFocus
        />
        <button type="submit">SEARCH</button>
      </form>
      <ul>
        {movies.map(
          ({ poster_path, original_title, name, id, vote_average }) => (
            <li key={id}>
              <Link
                to={`/movies/${id}`}
                state={{ from: `/movies?filter=${filter}` }}
              >
                <div>
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                      alt={original_title}
                    />
                    <div></div>
                  </div>
                  <div>
                    <div>{original_title || name}</div>
                  </div>
                </div>
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Movies;
