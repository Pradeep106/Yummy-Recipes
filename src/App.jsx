import { Outlet } from "react-router-dom";
import Header from "./constants/Header";
import Footer from "./constants/Footer";

function App() {
  return (
   <>
    <Header/>
    <Outlet/>
    <Footer/>
   </>
  );
}

export default App;
