import { Link } from "react-router-dom";

const About = () => {
    return (
      <div>
        <h1>This is the about page</h1>
        <li>
          <Link to="contact">Click to view our contact page</Link>
        </li>
        <li>
          <Link to="/">Click to view our home page</Link>
        </li>
      </div>
    );
  };
  
  export default About;
  