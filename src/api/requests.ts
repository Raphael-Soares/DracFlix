import { IMovieApiResponse } from '@/types/Movies';

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

export async function getFeaturedMovies() {
  const response = await fetch(`${API_URL}/movie/now_playing?api_key=${API_KEY}&language=pt-BR&page=1`);
  const data = await response.json();
  return data as IMovieApiResponse;
}

export async function getMovieDetails(id: string | undefined) {
  const response = await fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR`);
  const data = await response.json();
  return data as IMovieApiResponse;
}
