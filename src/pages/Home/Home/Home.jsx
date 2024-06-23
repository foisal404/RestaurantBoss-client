import TitleComponent from "../../Shared/Componentes/TitleComponent";
import Banner from "../Banner/Banner";
import { Category } from "../Category/Category";

const Home = () => {
  return (
    <div>
      <TitleComponent />
      <Banner />
      <Category />
    </div>
  );
};

export default Home;
