import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { UseShoppingProvider } from "./context/shoppingContext";

function App() {
   return (
      <UseShoppingProvider>
         <Navbar />
         <Container>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/store" element={<Store />} />
               <Route path="/about" element={<About />} />
            </Routes>
         </Container>
      </UseShoppingProvider>
   );
}

export default App;
