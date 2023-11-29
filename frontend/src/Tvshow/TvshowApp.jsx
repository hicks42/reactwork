import { useEffect, useState } from "react";
import s from "./style.module.css";
import { TVShowAPI } from "./API/TVShowAPI";
import { BACKDROP_BASE_URL } from "./API/config";
import { Logo } from "./components/Logo/Logo";
import logo from "../assests/images/logo.png";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { TVShowRecoList } from "./components/TVShowList/TVShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";

export default function TvshowApp() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState();

  async function fetchPopulars() {
    const populars = await TVShowAPI.fetchTMDBPopulars();
    if (populars.length > 0) {
      setCurrentTVShow(populars[0]);
    }
  }

  async function fetchRecomendations(tvShowId) {
    const recommendations = await TVShowAPI.fetchTMDBRecommended(tvShowId);
    if (recommendations.length > 0) {
      setRecommendationList(recommendations.slice(0, 10));
    }
  }

  async function searchTVshow(tvShowName) {
    const result = await TVShowAPI.fetchByTitle(tvShowName);
    if (result.length > 0) {
      setCurrentTVShow(result[0]);
    }
  }

  function bacgroundImageUrl(currentTVShow) {
    return `url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}")`;
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecomendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  return (
    <div className="demo_space">
      <div
        className={s.main_container}
        style={{
          background: currentTVShow
            ? bacgroundImageUrl(currentTVShow)
            : "black",
        }}
      >
        <div className={s.header}>
          <div className="row">
            <div className="col-4">
              <Logo
                image={logo}
                titre="KoiVoir"
                sousTitre="Ta prochaine série préférée."
              />
            </div>
            <div className="col-sm-12 col-md-4">
              <SearchBar onSubmit={searchTVshow} />
            </div>
          </div>
        </div>
        <div className={s.tv_show_detail}>
          {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
        </div>
        <div className={s.recommandations}>
          {recommendationList && recommendationList.length > 0 && (
            <TVShowRecoList
              tvShowList={recommendationList}
              onClickItem={setCurrentTVShow}
            />
          )}
        </div>
      </div>
    </div>
  );
}
