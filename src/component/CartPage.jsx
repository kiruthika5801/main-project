import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../action/cartActions";
import { Button, Container, Row, Col, Card, Table } from "react-bootstrap";
import Header from '../component/Header';
import HeaderNav from '../component/HeaderNav';
import Thank from './Thank';
// import { FaRegTimesCircle } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import "../css/CartPage.css";

function CartPage() {
  const cartItems = useSelector((state) => state.cartSummary.cartItems);
  const navigate = useNavigate(); // Create navigate function
  const dispatch = useDispatch();


  const handledNavigate = (e) => {
    e.preventDefault(); // Prevent any default form behavior
    navigate("/");
  };
  const handleCheckout = (e) => {
    e.preventDefault();
    navigate("/login");
  };


  const totalRewardPoints = cartItems.reduce(
    (total, item) => total + (item.rewardPoints * (item.quantity || 1)),
    0
  );

  const totalPrice = cartItems.reduce((total, item) => {
    if (!item.price) return total; // Prevent null/undefined values
    const price = typeof item.price === "string" ? item.price.replace("$", "") : item.price;
    return total + (parseFloat(price) * (item.quantity || 1));
  }, 0);

  return (
    <div>
      <Header />
      <HeaderNav />

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
                        {/* <img className="cartImg" src={item.image} alt={item.title} /> */}
                        <img className="cartImg" src={item.image || item.imageUrl} alt={item.title} />

                        {/* <Card.Img className="cartImg" src={item.image} alt={item.title} /> */}
                      </Col>

                      {/* Description Section */}
                      <Col lg={7}>
                        <Card.Body>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>
                            <p>Price: <span className="cartPrice">{item.price}</span></p>
                            <p>Quantity: <span className="cartQuantity">{item.quantity}</span></p>
                            <p>Total: <span className="cartTotal">
                              ${(parseFloat(typeof item.price === "string" ? item.price.replace("$", "") : item.price) * item.quantity).toFixed(2)}
                            </span></p>
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
                          <ImBin className="removeBtn" />
                        </Button>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* Continue Shopping Button */}
            <Row className="mb-3">
              <Col>
                <Button variant="primary" onClick={handledNavigate}>Continue Shopping</Button>
              </Col>
            </Row>

            {/* Total Amount Section */}
            <Row>
              <Col lg={8} xs={12} md={6}></Col>
              <Col lg={4} xs={12} sm={12} md={6}>
                <Table bordered>
                  <tbody>
                    <tr>
                      <td className="text-right"><strong>Sub-Total:</strong></td>
                      <td className="text-right">${totalPrice.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className="text-right"><strong>Total:</strong></td>
                      <td className="text-right">${totalPrice.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </Table>
                <Button variant="success" onClick={handleCheckout}>Checkout</Button>
              </Col>
            </Row>



          </>
        ) : (
          <h5 className="text-center mt-4">Your cart is empty</h5>
        )}
      </Container>
      <Thank />

    </div>


  );
}

export default CartPage;

