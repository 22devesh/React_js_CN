import { Component } from "react";
import AnimeCard from "./AnimeCard";

// Complete the AnimeList Component
class AnimeList extends Component {
  render() {
    return( 
    <div className="anime-list">
      {this.props.anime.map((animeItem)=>(
        <AnimeCard anime={animeItem} />
      ))}
      {/* Map the anime list recieved through props and pass the details to the Animecard component*/}
    </div>
    );
  }
}

export default AnimeList;
