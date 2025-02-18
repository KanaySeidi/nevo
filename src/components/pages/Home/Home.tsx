import Banner from "../../organisms/Banner/Banner";
import Case from "../../organisms/Case/Case";
import Elite from "../../organisms/Elite/Elite";
import Footer from "../../organisms/Footer/Footer";
import Header from "../../organisms/Header/Header";
import Services from "../../organisms/Service/Services";

const Home = () => {
  return (
    <div className="w-full h-full bg-black">
      <Header />
      <Banner />
      <Elite />
      <Services />
      <Case />
      <Footer />
    </div>
  );
};

export default Home;
