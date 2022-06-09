import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { pokemon } from '../../interface/pokemon';
import { usePokemonDetail } from '../../services/pokemon';
import { getPokemonId } from '../../utils/pokemonId';
import './Detail.css';

const Detail = () => {
  const params = useParams()
  const [pokemon, setPokemon] = useState<pokemon|undefined>(undefined)
  const { data, isLoaded, error } = usePokemonDetail(params.name)

  useEffect(()=> {
    if(data) setPokemon(data)
  }, [data, isLoaded, error])


  return (
    <div className="Container">
      {!isLoaded && (<p>Cargando</p>)}
      {error && (<p>Error: {error.response.data}</p>)}
      {pokemon && (
        <div className='Pokemon-container'>
            <div className='Label-container'>
              <div className='Title-label'>
                {pokemon.name}
              </div>
              <div className='Label-id'>
                #{getPokemonId(pokemon.id)}
              </div>
            </div>
            <div className='Pokemon-body'>
              <div>
                <div className='Pokemon-image'>
                {pokemon.sprites.front_default ? 
                <img src={pokemon.sprites.front_default} height="400" width="400" alt=''/> 
                : 
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwwo7vDof8p3MZC93GBtbn6vE2JyBPg16BEw&usqp=CAU'} height="400" width="400" alt=''/>
                }
                </div>
                <div className='Pokemon-stats'>
                  <table>
                    <tbody>
                    {Array(15).fill(0).map((_, i: number) => 
                      {
                        return (
                          <tr key={i}>
                            {Array(6).fill(0).map((_, i: number) => 
                              <td key={i}></td>
                            )}
                          </tr>
                        )
                      })
                    }
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='Pokemon-details'>
              {pokemon.sprites.front_default ? 
                <img src={pokemon.sprites.front_default} height="400" width="400" alt=''/> 
                : 
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwwo7vDof8p3MZC93GBtbn6vE2JyBPg16BEw&usqp=CAU'} height="400" width="400" alt=''/>
                }
              </div>
            </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
