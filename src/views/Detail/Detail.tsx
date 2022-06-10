import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Info from '../../components/Info/Info';
import Tag from '../../components/Tag/Tag';
import { pokemon, stat, type } from '../../interface/pokemon';
import { usePokemonDetail } from '../../services/pokemon';
import { getPokemonId } from '../../utils/pokemonId';
import { filledTable } from '../../utils/tableFill';
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
                  <div className='Stat-label'>
                    Stats
                  </div>
                  <table>
                    <tbody>
                    {Array(15).fill(0).map((_, i: number) => 
                      { 
                        const check = filledTable(pokemon.stats).map((numb: number) => {
                          if (14-numb>= i) return false
                          return true;
                        })
                        return (
                          <tr key={i}>
                            {check.map((fill: boolean, i: number) => {
                              if (fill) {
                                return (<td key={i} style={{backgroundColor: "#30a7d7"}}></td>)
                              }
                              return (<td key={i} style={{backgroundColor: "#fff"}}></td>)
                            }
                            
                            )}
                          </tr>
                        )
                      })
                    }
                    {pokemon.stats.map((stat: stat, i: number) => 
                      <td className='Stat-name' key={i}>{stat.stat.name}</td>
                    )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <Info pokemon={pokemon}/>
                <div>
                  <div className=''>
                      Type
                  </div>
                  {pokemon.types.map((t: type, index: number) => {
                      return <Tag key={index} tag={t.type.name}/>
                  })}
                </div>
                <div>
                  <div className=''>
                      Weaknesses
                  </div>
                </div>
              </div>
              
            </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
