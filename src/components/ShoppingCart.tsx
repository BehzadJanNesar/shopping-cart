import { Offcanvas, Stack } from "react-bootstrap";
import { UseShoppingContext } from "../context/shoppingContext";
import CartItem from "./CartItem";
import { formatCurrency } from "../utilities/formatCorrency";
import StoreItems from "../data/items.json";

type ShoppingCartProps = {
   isOpen: boolean;
};

export default function ShoppingCart({ isOpen }: ShoppingCartProps) {
   const { closeCart, cartItems, cartQuantity } = UseShoppingContext();
   return (
      <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
         <Offcanvas.Header closeButton>
            <Offcanvas.Title>header</Offcanvas.Title>
         </Offcanvas.Header>
         <Offcanvas.Body>
            {cartQuantity > 0 ? (
               <Stack gap={3}>
                  {cartItems.map((item) => (
                     <CartItem key={item.id} {...item} />
                  ))}
                  <div className="me-auto fw-bold fs-5">
                     Total :{" "}
                     {formatCurrency(
                        cartItems.reduce((total, cartItem) => {
                           const item = StoreItems.find((i) => i.id === cartItem.id);
                           return total + (item?.price || 0) * cartItem.quantity;
                        }, 0)
                     )}
                  </div>
               </Stack>
            ) : (
               <Stack>
                  <h1 className="fs-4">Dont have any carts!</h1>
               </Stack>
            )}
         </Offcanvas.Body>
      </Offcanvas>
   );
}
