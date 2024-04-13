import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="px-10 py-5 font-inter">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
