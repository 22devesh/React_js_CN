// Create Skill component here to display your skills
// In this component there should be a list with each listitem as your skill.
import { Component } from "react";
import "./styles.css"
class Skills extends Component{
    render(){
        return(
            <div className="skill">
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node</li>
                </ul>
            </div>
        );
    }
}
export default Skills;