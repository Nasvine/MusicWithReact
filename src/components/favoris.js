import React, { useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";

const Favoris = ({favoris, DeleteFavoris}) =>{
    useEffect(()=>{
        console.log(favoris);
    })
    return(
        <>
           <div  className="col-md-3 mb-5">
            <div className="card">
            <img src={favoris.artworkUrl100} className="card-img-top" alt="..." />
            <div className="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{favoris.artistName}</li>
                    <li class="list-group-item">{favoris.collectionCensoredName}</li>
                    <button className="btn btn-primary mb-4" onClick={() => DeleteFavoris(favoris)}>Supprimer des favoris</button>
                    <li class="list-group-item">
                        <ReactAudioPlayer
                        src={favoris.previewUrl}
                       /*  autoPlay */
                        controls className="col-md-12 text-center"
                        />
                    </li>
                    {/* <li class="list-group-item">
                    <audio controls autoplay muted>
                        <source src={music.previewUrl} type="audio/ogg" />
                        <source src={music.previewUrl} type="audio/mpeg" />
                    </audio>
                    </li> */}
                </ul>
            </div>
            </div>
       </div>
        </>
    )
}

export default Favoris;