import React from "react";
import ReactAudioPlayer from "react-audio-player";


const Music = ({music, AddFavoris}) => {
     


   return(
    <>
   
       <div  className="col-md-3 mb-5">
            <div className="card">
            <img src={music.artworkUrl100} className="card-img-top" alt="..." />
            <div className="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{music.artistName}</li>
                    <li class="list-group-item">{music.collectionCensoredName}</li>
                    <button className="btn btn-primary" onClick={() => AddFavoris(music)}>Ajouter comme favoris</button>
                    <li class="list-group-item">
                        <ReactAudioPlayer
                        src={music.previewUrl}
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

export default Music;