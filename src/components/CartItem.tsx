import { Button, Stack } from "react-bootstrap";
import { UseShoppingContext } from "../context/shoppingContext";
import StoreItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCorrency";

type CartItemProps = {
   id: number;
   quantity: number;
};

export default function CartItem({ id, quantity }: CartItemProps) {
   const { removeFromCart } = UseShoppingContext();
   const item = StoreItems.find((i) => i.id === id);
   if (item == null) return;
   return (
      <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
         <img src={item.imgUrl} style={{ width: "125px", height: "75px", objectFit: "cover" }} />
         <div className="me-auto">
            <div>
               {item.name} {"  "}
               {quantity > 1 && (
                  <span className="text-muted" style={{ fontSize: ".75rem" }}>
                     x{quantity}
                  </span>
               )}
            </div>
            <div className="text-muted" style={{ fontSize: ".8rem" }}>
               {formatCurrency(item.price)}
            </div>
         </div>
         <div>{formatCurrency(item.price * quantity)}</div>
         <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>
            &times;
         </Button>
      </Stack>
   );
}
