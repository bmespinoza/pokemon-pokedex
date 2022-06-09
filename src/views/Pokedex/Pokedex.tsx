import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import LoadMore from '../../components/Button/loadMore';
import { usePokemons } from '../../services/pokemon';
import './Pokedex.css';
import { pokemon } from '../../interface/pokemon';

const Pokedex = () => {
    const [limit, setLimit] = useState<number>(12)
    const [pokemons, setPokemons] = useState<pokemon[]>([])
    const {data, isLoaded, error} = usePokemons( limit, 0);
    useEffect(()=> {
        setPokemons(data)
    }, [data])
    if (error !== null) return <p>Error</p>
    if (!isLoaded) return <p>Cargando...</p>

  return (
    <div className="Container">
        <div className='Pokemon-list'>
            <div className='Card-container'>
                { 
                pokemons.map((pokemon) => {
                    return <Card key={pokemon.id} pokemon={pokemon} />
                })
                }
            </div>
            <LoadMore limit={limit} setPokemons={setPokemons} setLimit={setLimit}/>
        </div>
    </div>
  );
}

export default Pokedex;
