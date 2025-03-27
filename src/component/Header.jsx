import { Container, Row, Col } from "react-bootstrap";
import logo from '../images/mains.png'
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { showCartSummary,hideCartSummary } from "../action/cartSummaryActions";
import CartSummary from "./CartSummary";

function Header() {
  const cartCount = useSelector((state) => state.cart.cartCount);
    const showCart = useSelector((state) => state.cartSummary.show); 
    const dispatch = useDispatch();
  return (
    <div>
      <Container fluid>
        <Row className="h-auto " >
          <Col sm={4} className=" one ">
            <Row className="left w-auto me-5">

              <Col className="text-end w-auto" lg={9}>
                <Row><span className="span" >Call Us</span></Row>
                <Row><span >800-123-4567</span></Row>

              </Col>
              <Col className="w-auto">
                <Row className="image">

                  <FiPhone className="phone mt-3" />
                </Row>

              </Col>

            </Row>

          </Col>
          <Col className="text-center  two"><img className="logo" src={logo} alt="tie-tales" /></Col>
          <Col className=" three">
            <Row className="left ms-5 w-auto">


              <Col lg={3} className=" w-auto">
                <Row className="image">
                  <HiOutlineShoppingBag className="bag mt-3" 
                  onClick={() => dispatch(showCart ? hideCartSummary() : showCartSummary())}  
                  style={{ cursor: "pointer" }}  
              />
                </Row>

              </Col>
              <Col className="w-auto" lg={9}>

                <Row><span className="span" >your cart:</span></Row>
                <Row><span className="span-text">{cartCount} items</span></Row>
              </Col>

            </Row>


          </Col>
        </Row>

      </Container>
       {/* ✅ Render CartSummary only if `showCart` is true */}
       {showCart && <CartSummary />}
    </div>

  )
};
export default Header;