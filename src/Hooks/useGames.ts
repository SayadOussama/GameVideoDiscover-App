

import useData from "./useData";
import { Genre } from "./useGenres";
import { GameQuery } from "../App";
export interface Platform{
  id:number;
  name:string;
  slug:string;

}

export interface Game {
    id: number;
    name: string;
    background_image:string ;
    // is array of object
    parent_platforms: {platform:Platform}[];
    metacritic:number;
    rating_top:number;
    
  }


 

const useGames =(gameQuery: GameQuery)=>
    useData<Game>("/games",{
      params:{genre:gameQuery.genre?.id
        ,platforms: gameQuery.platform?.id,
        ordering : gameQuery.sortOrder,
        search:gameQuery.searchText
      }},
      [gameQuery]);//[]if we are not selected
   


export default useGames;