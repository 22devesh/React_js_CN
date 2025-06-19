import "./styles.css";
// Create a object name "styles" to store all the styles.

export default function App() {
  return (
    <div className="App">
     
      <form style={styles.form}>
       
        <h3 style={styles.h3}>Sign Up</h3>
      
        <input placeholder="Username" style={styles.input}/>
       
        <input placeholder="Email" style={styles.input}/>
       
        <input placeholder="Password" style={styles.input} />
       
        <div style={styles.action}>
         
          <button style={styles.button}>Cancel</button>
          
          <button style={styles.button}>Login</button>
        </div>
      </form>
    </div>
  );
}

const styles={
  form:{
    width: "60%",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },

  h3:{
    fontSize: "2rem",
    letterSpacing: "2px"
  },

  input:{
    padding: "10px"
  },

  action:{
    display: "flex",
    justifyContent: "center",
    gap: "20px"
  },

  button:{
    outline: "none",
    paddingBlock: "5px",
    width: "100px",
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  }

}
