import { getFeaturedMovies } from '@/api/requests';
import Image from 'next/image';

export default async function Header() {
  const data = await getFeaturedMovies();

  const movie = data.results[0];

  return (
    <div className='relative'>
      <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} width={1920} height={1080} />

      <div className=''></div>
    </div>
  );
}
