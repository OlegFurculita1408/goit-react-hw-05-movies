import axios from "axios";


const AXIOS = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
      api_key: 'a010b57bedb6745043b753314a3effd1',
      language: 'en-US',
    },
  });

export async function GetInTrendMovies() {
    const res = await AXIOS.get(`trending/all/day`);
    return res.data;
  }
  
export async function GetSearchMovies(query) {
    const res = await AXIOS.get(`search/movie?&query=${query}&page=1`);
    return res.data;
  }
  
export async function GetAboutMovie(movieId) {
    const res = await AXIOS.get(`movie/${movieId}?`);
    return res.data;
  }
  
export async function GetActors(movieId) {
    const res = await AXIOS.get(`movie/${movieId}/credits?`);
    return res.data.cast;
  }
  
export async function GetReviews(movieId) {
    const res = await AXIOS.get(`movie/${movieId}/reviews?`);
    return res.data.results;
  }