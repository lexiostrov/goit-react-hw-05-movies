import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../servises/Api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviewsList() {
      try {
        const response = await getReviews(movieId);
        setReviews(response);
      } catch (error) {
        console.log(error);
      }
    }
    getReviewsList();
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0 && (
        <h3>We don't have any reviews for this movie.</h3>
      )}
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <div>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
