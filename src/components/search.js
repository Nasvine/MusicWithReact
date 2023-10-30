import React, { useEffect, useState } from "react";
import apiClient from "../services/api"; 
import Music from "./music";
import Favoris from "./favoris";



/**
 * The `Search` function is a React component that allows users to search for music, add music items to
 * their favorites, and delete music items from their favorites.
 * @returns The Search component is returning a JSX fragment containing a form for searching music, a
 * list of favorited music items, and a list of search results.
 */
const  Search = () =>{
    useEffect(() => {
     console.log(favoris)
    })

    const [favoris, setFavoris] = useState([]);

   /**
    * The AddFavoris function adds a music item to the favoris array.
    * @param music - The `music` parameter is the item that you want to add to the `favoris` array.
    */
    const AddFavoris = (music) => {
        setFavoris([...favoris, music])
      ///  console.log(favoris)
    }

    const DeleteFavoris = (delete_favoris) => {

        setFavoris(favoris.filter((t) => t.trackId !== delete_favoris.trackId))
        console.log(delete_favoris, "DeleteFavoris")
    }

    const [name, setName] = useState("")
    const [list, setList] = useState([]);

    function handleSubmit(e){
        e.preventDefault();

        apiClient.get('?term='+ name + "&limit=25").then(
            (response) => {
                setList(response.data.results)
            }
        )
    }

    return(
        <>
        
        <div className="container mb-5">
            <p>Recherche d'une musique</p> 
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-4">
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Entrer le nom de votre artiste" />
                    </div>
                    <div className="col-lg-4">
                        <button className="btn btn-primary">Rechercher</button>
                    </div>

                </div>
            </form>
        </div>
        <div className="container">
            <div className="row">
                {
                    favoris.map((item, key) =>  <Favoris favoris = {item} DeleteFavoris = {DeleteFavoris}/>)
                }
               
            </div>
        </div>
        <div className="container">
            <div className="row">
                {
                    list.map((item, index) => <Music 
                      /* info = {{ artistName: item.artistName, country: item.country }} */
                      music = {item}  AddFavoris = {AddFavoris}
                    
                    />
                    )
                
                }
            </div>
        </div>

        </>
    )
}

export default Search;
