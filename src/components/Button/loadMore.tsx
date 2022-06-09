import { pokemon } from '../../interface/pokemon';
import { getPokemons } from '../../services/pokemon';
import './loadMore.css';

interface LoadProps {
  limit: number;
  setLimit: (arg: number) => void;
  setPokemons: (arg: pokemon[]) => void;
}

const LoadMore = (props: LoadProps) => {
  const loadMorePokemons = async () => {
    const result = await getPokemons(props.limit+12, 0)
    if(result) props.setPokemons(result)
    props.setLimit(props.limit + 12)
  }
  return (
    <button className="Load-more" onClick={() => loadMorePokemons()}>
        Load More Pokémon
    </button>
  );
}

export default LoadMore;
