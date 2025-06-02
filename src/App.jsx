import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header";
import ProductListing from "./Pages/ProductListing";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} exact={true} element={<Home />} />
          <Route
            path={"/productListing"}
            exact={true}
            element={<ProductListing />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
