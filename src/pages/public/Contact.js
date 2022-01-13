import { Favourite } from "../../components/Favourite";
import { FavouriteRegistry } from "../../components/FavouriteRegistry";
const Contact = () => {
  return (
    <div>
      <h1>This is the contact page</h1>
      <Favourite selectPage="contact" />

      <FavouriteRegistry />
    </div>
  );
};

export default Contact;
