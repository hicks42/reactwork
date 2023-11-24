import s from "./style.module.css";

export function Logo({ image, titre, sousTitre }) {
  return (
    <>
      <div className={s.workspace}>
        <div className={s.container}>
          <img src={image} className={s.img} />
          <span className={s.titre}>{titre}</span>
        </div>
        <span className={s.sous_titre}>{sousTitre}</span>
      </div>
    </>
  );
}
