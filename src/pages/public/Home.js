import { Favourite } from "../../components/Favourite";
import { FavouriteRegistry } from "../../components/FavouriteRegistry";
const Home = () => {
  return (
    <div>
      <h1>This is the home page</h1>
      <Favourite selectPage="home" />

      <FavouriteRegistry />
    </div>
  );
};

export default Home;
