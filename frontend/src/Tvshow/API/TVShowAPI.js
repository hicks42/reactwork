import axios from "axios";
import { BASE_URL } from "./config";

export class TVShowAPI {
  static fetchTMDBPopulars() {
    return asyncRequest(`${BASE_URL}tv/popular?language=fr&page=1`);
  }

  static async fetchTMDBRecommended(tvShowId) {
    return asyncRequest(
      `${BASE_URL}tv/${tvShowId}/recommendations?language=fr&page=1`
    );
  }

  static async fetchByTitle(title) {
    return asyncRequest(
      `${BASE_URL}search/tv?query=${title}&language=fr&page=1`
    );
  }
}

async function asyncRequest(url) {
  const response = await axios
    .request({
      method: "GET",
      url: url,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      },
    })
    .then(function (response) {
      return response.data.results;
    })
    .catch(function (error) {
      console.error(error, error.message);
    });
  return response;
}
