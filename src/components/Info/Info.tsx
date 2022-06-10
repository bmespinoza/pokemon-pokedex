import { ability, pokemon } from '../../interface/pokemon';
import './Info.css';
import { convertDmtoFt, convertHgtoLb } from '../../utils/unitConversion';

interface InfoProps {
    pokemon: pokemon;
}

const Info = ({pokemon}: InfoProps) => {

  return (
    <div className="Info-container">
        <div className='Left-column'>
            <div>
                Height
            </div>
            <div className='Value-label'>
                {convertDmtoFt(pokemon.height)}
            </div>
            <div>
                Weight
            </div>
            <div className='Value-label'>
                {convertHgtoLb(pokemon.weight)} lbs
            </div>
            <div>
                Gender
            </div>
            <div className='Value-label'>
                simbolos
            </div>
        </div>
        <div className='Right-column'>
            <div>
                Category
            </div>
            <div className='Value-label'>
                {convertHgtoLb(pokemon.weight)} lbs
            </div>
            <div>
                Abilities
            </div>
            {pokemon.abilities.map((ability: ability) => {
                if (!ability.is_hidden) {
                    return (<div key={ability.ability.name} className='Ability-label'>{ability.ability.name}</div>)
                }
            })}
        </div>
    </div>
  );
}

export default Info;
