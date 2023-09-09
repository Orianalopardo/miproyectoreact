import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

import Navbar from "./components/NavBar/";
import Footer from "./components/Footer";
import Home from "./Pages/Home/";
import Cart from "./Pages/Cart/Cart";
import Categories from "./Pages/Categories";
import Form from "./Pages/Form/";
import cartContext from "./Contexts/cartContext";

function App() {
  const [cart, setCart] = useState([]);
  const [qnt, setQnt] = useState(0);

  const greeting = "Sport Store";

  return (
    <div>
      <cartContext.Provider value={{ cart, setCart, qnt, setQnt }}>
        <Router> 
          <CssBaseline>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Home greeting={greeting} />
              </Route>
              <Route path="/form">
                <Form />
              </Route>
              <Route path="/item/:id">
                {/* <ItemDetailPage/> */}
              </Route>
              <Route path="/categories/:categoryId">
                <Categories />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
            </Switch>
            <Footer />
          </CssBaseline>
        </Router> 
      </cartContext.Provider>
    </div>
  );
}

export default App;
