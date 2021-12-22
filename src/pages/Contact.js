import { Link } from "react-router-dom";

const Contact = () => {
    return (
      <div>
        <h1>This is the contact page</h1>
        <ul>
        <li>
          <Link to="about">Click to view our about page</Link>
        </li>
        <li>
          <Link to="/">Click to view our home page</Link>
        </li>
      </ul>
      </div>
    );
  };
  
  export default Contact;
  