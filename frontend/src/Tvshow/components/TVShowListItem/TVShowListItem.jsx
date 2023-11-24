import { SMALL_IMAGE_BASE_URL } from "../../API/config";
import s from "./style.module.css";
import placeholder from "../../../assests/images/placeholder.webp";

export function TVShowListItem({ onClick, tvShow }) {
  let img_src = "";
  if (
    tvShow.backdrop_path
      ? (img_src = `${SMALL_IMAGE_BASE_URL}${tvShow.backdrop_path}`)
      : (img_src = placeholder)
  );
  return (
    <div onClick={() => onClick(tvShow)} className={s.container}>
      <img alt={tvShow.name} className={s.img} src={img_src} />
      <div className={s.titre}>{tvShow.name}</div>
    </div>
  );
}
