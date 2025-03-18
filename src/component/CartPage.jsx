import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../action/cartActions";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
// import { FaRegTimesCircle } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import "../css/CartPage.css";

function CartPage() {
  const cartItems = useSelector((state) => state.cartSummary.cartItems);
  const dispatch = useDispatch();

  const totalRewardPoints = cartItems.reduce(
    (total, item) => total + (item.rewardPoints * (item.quantity || 1)),
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + (parseFloat(item.price.replace('$', '')) * (item.quantity || 1)),
    0
  );

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <>
          <Row>
            {cartItems.map((item) => (
              <Col lg={12} key={item.id} className="mb-4">
                <Card className="cartCard p-3">
                  <Row className="align-items-center">
                    {/* Image Section */}
                    <Col lg={2} className="text-center">
                    <img className="cartImg" src={item.image} alt={item.title} />
                      {/* <Card.Img className="cartImg" src={item.image} alt={item.title} /> */}
                    </Col>

                    {/* Description Section */}
                    <Col lg={7}>
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                          <p>Price: <span className="cartPrice">{item.price}</span></p>
                          <p>Quantity: <span className="cartQuantity">{item.quantity}</span></p>
                          <p>Total: <span className="cartTotal">${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</span></p>
                          <p>Reward Points: <span className="cartReward">{item.rewardPoints * item.quantity} Points</span></p>
                        </Card.Text>
                      </Card.Body>
                    </Col>

                    {/* Remove Button */}
                    <Col lg={3} className="text-end">
                      <Button 
                        variant="danger" 
                        onClick={() => dispatch(removeFromCart(item.id))} 
                      >
                        {/* <FaRegTimesCircle className="removeBtn" /> */}
                        <ImBin  className="removeBtn"/>
                      </Button>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <h5 className="text-center mt-4">Your cart is empty</h5>
      )}
    </Container>
  );
}

export default CartPage;

