import "./index.css";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import Home from "./Home/Home";
import Rating from "./Rating/Rating";
import TrendingApps from "./TrendingApps/TrendingApps";

function App() {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <Rating></Rating>
      <TrendingApps></TrendingApps>
      <Footer></Footer>
    </>
  );
}

export default App;
