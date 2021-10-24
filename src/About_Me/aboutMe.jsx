import "./AboutMe.css";
import MyPic from "../images/mypic.jpeg"
const AboutMe = () => {
    return ( 
        <div className="about-holder">
<div className="about-me">
    <div className="about-me-img">
       <img src={MyPic} alt="my-img" /> 
    </div>
    <div className="my-summary">
    <p>My Name is Elham, I am a Front-End web developer who seeks to learn more every day... for now I am working in one of the greatest telecome companies in my home country Iran but who knows about the future...</p>
    </div>
</div>
<div className="my-cv">     
<button className="btn mx-auto">My CV</button>
</div>
        </div>
     );
}
 
export default AboutMe;