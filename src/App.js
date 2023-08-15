
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar"

import { BrowserRouter, Routes, Route } from "react-router-dom" 
import Form from "./components/Form/Form"
import Cart from "./components/Cart/Cart"


function App() {

  return (
    <BrowserRouter>
      <NavBar />
    
      <Routes>
        <Route path="/" element={<ItemListContainer />}/> 

        <Route path="/Category/:CategoryName" element={<ItemListContainer/>}/>

        <Route path="/Category" element={<ItemListContainer/>}/>

        <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />

        <Route path="/Checkout" element={ <Form/> } />

        <Route path="/Cart" element={<Cart/>} />
      
        <Route path="*" element={<h1>Lo siento, esta URL n existe.</h1>} />
      </Routes>
    
    </BrowserRouter>
  );
  
}

export default App;