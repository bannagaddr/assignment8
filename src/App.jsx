import "./index.css";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";

function App() {
  const navigation = useNavigation();
  return (
    <>
      <Header></Header>
      {navigation.state === "loading" ? <LoadingSpinner /> : <Outlet></Outlet>}

      <Footer></Footer>
    </>
  );
}

export default App;
