import { FC } from 'react';
import StarIco from '../image/star.svg';

interface StarRating {
  rating: number
}

const Star: FC<StarRating> = ({ rating }) => {
  // Ensure contents.rating is a positive integer
  const stars = Array.from(Array(Math.round(rating / 2)), (e, i) => (
    <StarIco key={i} style={{ width: 30 }} />
  ));

  return <>{stars}</>;
};

export default Star;
