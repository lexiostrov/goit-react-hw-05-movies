import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../servises/Api';
import Notiflix from 'notiflix';
import { Link } from 'react-router-dom';

const Home = () => {
  const [dailyMovies, setDailyMovies] = useState([]);

  useEffect(() => {
    async function getDailyMovie() {
      try {
        const response = await getTrendingMovies();
        const movieArr = response.map(({ title, id }) => ({
          title,
          id,
        }));
        setDailyMovies(movieArr);
      } catch (error) {
        Notiflix.Notify.failure(
          'Sorry, something went wrong, please try again later'
        );
      }
    }
    getDailyMovie();
  }, []);

  return (
    <main>
      <section>
        <h1>Trending today</h1>
        <ul>
          {dailyMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};
export default Home;
