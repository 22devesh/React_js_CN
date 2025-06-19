import React from "react"; 

class MovieCard extends React.Component{

    render(){
      
        const {movies,addStars,decStars,togleFav,togleCart} = this.props;
        // const {movies: data} = this.props;
        // console.log(data);
        const {title,plot,poster,price,rating,stars,fav,cart} = this.props.movies;


                return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="poster" src={poster}/>
                        </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot} </div>
                        <div className="price">Rs. {price} </div>
                       

                        <div className="footer">
                            <div className="rating">{rating} </div>
                            <div className="star-dis">
                                <img className="str-btn" 
                                    alt="decrease"
                                    src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                                    onClick={() =>{decStars(movies)}} />

                                <img alt="star"
                                     src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" 
                                     className="stars" /> 

                                <img className="str-btn" 
                                    alt="increase"
                                    src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
                                    onClick={()=>{addStars(movies)}} />

                                <span className="starCount">{stars} </span>
                                
                            </div>
                            {

                            // fav? <button className="unfavourite-btn" onClick={this.handleFav}>Un-favourite</button>:
                            //  <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>
                            }
                            
                            <button className={fav? "unfavourite-btn": "favourite-btn"}
                             onClick={()=>{togleFav(movies)}} >
                                {fav? "unfavourite": "favourite"}</button>

                            <button className={cart? "cart-btn": "remove-btn"}
                            onClick={()=>{togleCart(movies)}} >
                                {cart? "Add To Cart":"Remove from Cart"}
                                </button>
                        </div>

                    </div>
            </div>
            </div>
        )

    }
}

export default MovieCard;