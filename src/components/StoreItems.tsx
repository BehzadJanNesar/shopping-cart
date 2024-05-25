import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCorrency";
import { UseShoppingContext } from "../context/shoppingContext";

type StoreItemsProps = {
   id: number;
   name: string;
   price: number;
   imgUrl: string;
};

export default function StoreItems({ id, name, price, imgUrl }: StoreItemsProps) {
   const { increaseCartQuantity, getQuantity, decreaseCartQuantity, removeFromCart } =
      UseShoppingContext();
   const quantity = getQuantity(id);
   return (
      <>
         <Card className="h-100">
            <Card.Img variant="top" src={imgUrl} height="200px" style={{ objectFit: "cover" }} />
            <Card.Body className="d-flex flex-column">
               <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                  <span className="fs-4">{name}</span>
                  <span className="ms-2 text-muted">{formatCurrency(price)}</span>
               </Card.Title>
               <div>
                  {quantity === 0 ? (
                     <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
                        Add to cart
                     </Button>
                  ) : (
                     <div className="d-flex align-items-center flex-column">
                        <div
                           className="d-flex justify-content-center align-items-center"
                           style={{ gap: ".5rem" }}>
                           <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                           <div>
                              <span className="fs-4">{quantity}</span> in cart
                           </div>
                           <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                        </div>
                        <Button
                           onClick={() => removeFromCart(id)}
                           variant="danger"
                           size="sm"
                           className="mt-3">
                           Remove
                        </Button>
                     </div>
                  )}
               </div>
            </Card.Body>
         </Card>
      </>
   );
}
