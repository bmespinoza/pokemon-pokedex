import { Link } from 'react-router-dom';
import { pokemon, type } from '../../interface/pokemon';
import { getPokemonId } from '../../utils/pokemonId';
import Tag from '../Tag/Tag';
import './Card.css';

interface CardProps {
    pokemon: pokemon
}

const Card = ({pokemon}: CardProps) => {

  return (
    <div className='Poke-card'>
        <div className='Image-card'>
            <Link to={`/${pokemon.name}`}>
                {pokemon.sprites.front_default ? 
                <img src={pokemon.sprites.front_default} height="200" width="200" alt=''/> 
                : 
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwwo7vDof8p3MZC93GBtbn6vE2JyBPg16BEw&usqp=CAU'} height="200" width="200" alt=''/>
                }
            </Link>
        </div>
        <div className='Card-info'>
            <div className='Id-label'>
                #{getPokemonId(pokemon.id)}
            </div>
            <div className='Name-label'>
                {pokemon.name}
            </div>
            <div className='Tag-container'>
                {pokemon.types.map((t: type, index: number) => {
                    return <Tag key={index} tag={t.type.name}/>
                })}
            </div>
        </div>
    </div>
  );
}

export default Card;
