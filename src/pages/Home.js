import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>This is the home page</h1>
      <ul>
        <li>
          <Link to="about">Click to view our about page</Link>
        </li>
        <li>
          <Link to="contact">Click to view our contact page</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
