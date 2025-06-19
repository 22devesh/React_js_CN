// import Student from "./Student";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
function App(){
  return(
    <>
    {/* <h1>Movie-App</h1> */}
    
    {/* <MovieCard/> */}
    <Navbar/>
    <MovieList/>
    {/* <Student stuname="Alexa" marks={80} />
    <Student stuname="Siri" marks={70}/>
    <Student stuname="Google" marks={90}/>
    <Student  /> */}
    </>
  ); 
}

// Student.defaultProps = {
//   stuname:"Student",
//   marks: "N.A."
// }


export default App;