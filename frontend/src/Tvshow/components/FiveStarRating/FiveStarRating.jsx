import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
  if (rating % 1 >= 0.75) {
    rating = Math.floor(rating) + 1;
  }
  const starList = [];
  const starFillCount = Math.floor(rating);
  const isStarHalf = rating - starFillCount >= 0.3;
  const emptyStarCount = 5 - starFillCount - (isStarHalf ? 1 : 0);
  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }
  if (isStarHalf) {
    starList.push(<StarHalf key={"star-half"} />);
  }
  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<StarEmpty key={"star-empty" + i} />);
  }
  return <div>{starList}</div>;
}
