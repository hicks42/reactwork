import s from "./style.module.css";
import { FiveStarRating } from "../FiveStarRating/FiveStarRating";

export function TVShowDetail({ tvShow }) {
  const rating = (tvShow.vote_average / 2).toFixed(2);
  return (
    <div>
      <div className={s.title}>{tvShow.name}</div>
      <div className={s.original_title}>
        Titre original :{" "}
        <span className={s.original_span}>{tvShow.original_name}</span>
      </div>
      <div className={s.rating_container}>
        <FiveStarRating rating={rating} />
        <div className={s.rating}>{rating}</div>
      </div>
      <div className={s.overview}>{tvShow.overview}</div>
    </div>
  );
}
