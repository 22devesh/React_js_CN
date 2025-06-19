// Create component here to display the Basic information such as 
// Name: Email: Phone: Address:
// Make sure to include these in your code with semicolon

import { Component } from "react";
import "./styles.css"
class Hero extends Component{
    render() {
        return(
            <div className="Hero">

                <p><strong>Name:Pranav Sharad Yeolo</strong></p>
                <p>Email: paranv@google.com</p>
                <p>Phone: 8546465544</p>
                <p>Address: ABC, xyz street.</p>
            </div>
        );
    }
}

export default Hero;