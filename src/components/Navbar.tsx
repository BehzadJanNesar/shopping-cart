import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { UseShoppingContext } from "../context/shoppingContext";
export default function Navbar() {
   const { openCart, closeCart, cartQuantity } = UseShoppingContext();

   return (
      <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
         <Container>
            <Nav>
               <Nav.Link to="/" as={NavLink}>
                  Home
               </Nav.Link>
               <Nav.Link to="/store" as={NavLink}>
                  Store
               </Nav.Link>
               <Nav.Link to="/about" as={NavLink}>
                  About
               </Nav.Link>
            </Nav>
            <Button
               onClick={openCart}
               variant="outline-primary"
               style={{ width: "3rem", height: "3rem", position: "relative" }}
               className="rounded-circle d-flex justify-content-center align-items-center">
               <MdShoppingCart style={{ fontSize: "2rem" }} />
               {cartQuantity > 0 && (
                  <div
                     className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                     style={{
                        color: "white",
                        width: "1.5rem",
                        height: "1.5rem",
                        position: "absolute",
                        bottom: "0",
                        right: "0",
                        transform: "translate(25% , 30%)",
                     }}>
                     {cartQuantity}
                  </div>
               )}
            </Button>
         </Container>
      </NavbarBs>
   );
}
