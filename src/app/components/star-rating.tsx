import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

export interface Props {
  rating: number;
}

const StarRating = (props: Props) => {
  const numStars = Math.round(props.rating);

  const fullStars = [];
  const emptyStars = [];

  for (let i = 0; i < 5; i++) {
    if (i < numStars) {
      fullStars.push(<span key={i}>★</span>);
    } else {
      emptyStars.push(<span key={i}>☆</span>);
    }
  }

  return (
    <p className="flex text-amber-300">
      {fullStars.map((star, i) => (
        <FaStar key={`full-${i}`} />
      ))}
      {emptyStars.map((star, i) => (
        <FaRegStar key={`empty-${i}`} />
      ))}
    </p>
  );
};

export default StarRating;
