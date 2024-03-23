import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Home from "./components/Home";
import Home2 from "./components/Home2";
import House from "./components/House";
import HouseList from "./components/HouseList";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
