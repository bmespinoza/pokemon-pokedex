import axios from "axios"
import { useEffect, useState } from "react";
import { pokemon, pokemonResponse, rawPokemon } from "../interface/pokemon";

interface pokemons {
    data: pokemon[];
    isLoaded: boolean;
    error: error | null
}

export const usePokemons = (limit: number, offset: number): pokemons => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = () => {
          axios
          .get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
          .then(async (response) => {
                const pokemonUrl = response.data.results.map((p: any) => {
                  return axios.get(p.url).then(r => r.data)
                })
                await Promise.all(pokemonUrl).then(
                    (r: any) => setData(r)
                )
                    
                setIsLoaded(true);
                // setData(pokemonUrl)
            })
            .catch(error => {
                setError(error);
            });
        };
        fetchData();
      }, []);
  
    return { data, error, isLoaded};
}

interface pokemonDetail {
    data: pokemon | null;
    isLoaded: boolean;
    error: error | null
}

interface error {
    response: { data: string}
}

export const usePokemonDetail = (name: string | undefined): pokemonDetail => {
    const [data, setData] = useState<pokemon|null>(null);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [error, setError] = useState<error|null>(null);
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    useEffect(() => {
        fetchPokemon(url)
        .then((response: pokemonResponse) => response.data)
        .then((result: pokemon) => setData(result))
        .then(() => setIsLoaded(true))
        .catch((error) => {
            if (error.response.data === 'Not Found') {
                setError({response: {data: 'Pokemon no encontrado'}})
            } else {
                setError(error)
            }
            setIsLoaded(true)
        })
      }, [url]);
  
    return { data, isLoaded, error };

}

export const fetchPokemon = async(url: string): Promise<pokemonResponse> => { 
    const response =  await axios.get(url)
    return response
}

export const getPokemons = async (limit: number, offset: number): Promise<pokemon[]> => { 
    const res = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)

    const pokePromises: Promise<pokemon>[] = res.data.results.map((p: rawPokemon) => {
        return axios.get(p.url).then((r: pokemonResponse) => r.data)
    }) 
    const pokemons = await Promise.all(pokePromises)
    return pokemons
};  


