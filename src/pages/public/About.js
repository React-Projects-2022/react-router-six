import { Favourite  } from "../../components/Favourite";
import { FavouriteRegistry } from "../../components/FavouriteRegistry";
const About = () => {
  return (
    <div>
      <h1>This is the about page</h1>
      <Favourite selectPage="about" />

      <FavouriteRegistry />
    </div>
  );
};

export default About;
