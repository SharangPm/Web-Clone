import Followings from "../components/home/Followings";
import ForYou from "../components/home/ForYou";
import Header from "../components/home/Header";
import Post from "../components/home/Post";



const Home = () => {
  return (
    <section className="header-layout">
      <Header />
      <Post />
      <ForYou />
      <Followings />
    </section>
  );
};

export default Home;
