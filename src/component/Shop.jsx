import React, { useEffect, useState } from "react";
import "../App.css";
import Alerts from "./Alerts";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { HiLink } from "react-icons/hi";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import productOne from "../images/product1-706x783.jpg";
import productTwo from "../images/product2-706x783.jpg";
import productThree from "../images/product3-706x783.jpg";
import productFour from "../images/product4-706x783 (1).jpg";
import productFive from "../images/product5-555x615.jpg";
import productSix from "../images/product6-555x615.jpg";
import { useNavigate } from "react-router-dom";
import dividers from "../images/divider_title.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../action/cartActions";
import { showAlert } from "../action/alertActions";


const products = [
  { id: "1", title: "Flower Decor", price: 55, className: "card-sImgOne", image: productOne,rewardPoints:20 },
  { id: "2", title: "Wedding Arch", price: 65, className: "card-sImgTwo", image: productTwo ,rewardPoints:10},
  { id: "3", title: "Table Centerpiece", price: 87, className: "card-sImgThree", image: productThree,rewardPoints:30 },
  { id: "4", title: "Wedding Bouquet", price: 112, className: "card-sImgFour", image: productFour,rewardPoints:12 },
  { id: "5", title: "Wedding Candles", price: 45, className: "card-sImgFive", image: productFive,rewardPoints:10 },
  { id: "6", title: "Wedding Lighted Signs", price: 130, className: "card-sImgSix", image: productSix,rewardPoints:23}
];

function Shop() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  // State to store fetched products
  const [fetchedProducts, setFetchedProducts] = useState([]);

  // Fetch products from MongoDB on component mount
  useEffect(() => {
    fetch("http://localhost:8000/get-products")
      .then((res) => res.json())
      // .then((data) => setFetchedProducts(data.products)) // Assuming the response contains a `products` array
      .then((data) => {
        const normalized = data.products.map((prod) => ({
          ...prod,
          id: prod._id // Add this line so id is available
        }));
        setFetchedProducts(normalized);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Function to add product to the cart
  const handleAddToCart = (product) => {
    if (!product.id) return alert("Error: Missing product ID!");

    dispatch(addToCart(product));
    dispatch(showAlert(product.title));
  };

  // Function to handle order placement
  const handleAddOrder = async (product) => {
    if (!loggedInUser || !loggedInUser._id) {
      return; // User must be logged in
    }

    try {
      const response = await fetch('http://localhost:8000/add-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: loggedInUser._id,
          productId: product.id,
          title: product.title,
          quantity: 1,
          price: product.price
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        alert("Order placed successfully!");
        navigate("/OrderSummary");
      } else {
        alert(result.error || "Failed to place order.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("An error occurred while placing the order.");
    }
  };

  return (
    <Container fluid>
      <Row className="justify-content-md-center shop">
        <Col lg={10} md={11} sm={9} xs={9} className="shop-main">
          <Row className="shop-head">
            <Col className="wel-one">Shop Our Latest Styles</Col>
          </Row>
          <Row className="w-para">
            <Col className="wel-two">Shop</Col>
          </Row>
          <Row className="w-divider">
            <Col className="d-flex justify-content-center align-items-center">
              <img className="d-images" src={dividers} alt="divider-title" />
            </Col>
          </Row>

          {/* Render Hardcoded Products */}
          {[0, 3].map((startIndex) => (
            <Row className="shop-boxOne" key={startIndex}>
              {products.slice(startIndex, startIndex + 3).map((product) => (
                <Col key={product.id} className="d-flex justify-content-center" lg={4} md={4} sm={4}>
                  <Card className="card-sWhite">
                    <div className={`card-sImg ${product.className}`}>
                      <div className='shopHover'>
                        <HiLink className="shopIcon" />
                      </div>
                    </div>
                    <Card.Body>
                      <Card.Title className="card-Shead">{product.title}</Card.Title>
                      <Card.Text className="card-price">${product.price}.00</Card.Text>
                      <Button
                        className="card-shopbtn"
                        variant="primary"
                        onClick={() => {
                          handleAddToCart(product);
                          handleAddOrder(product);
                        }}
                      >
                        ADD TO CART
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          ))}

          {/* Render Fetched Products */}
          {fetchedProducts.length > 0 && (
            <Row className="shop-boxOne">
              {fetchedProducts.map((product) => (
                <Col key={product._id} className="d-flex justify-content-center" lg={4} md={4} sm={4}>
                  <Card className="card-sWhite position-relative">
                    <div className="card-sImg position-relative">
                      <img src={product.imageUrl} alt={product.title} className="shop-product-img" />
                      {product.status === "disabled" && (
                        <div className="out-of-stock-text-overlay">
                          OUT OF STOCK
                        </div>
                      )}
                    </div>
                    <Card.Body className={product.status === "disabled" ? "muted-card" : ""}>
                      <Card.Title className="card-Shead">{product.title}</Card.Title>
                      <Card.Text className="card-price">${product.price}.00</Card.Text>
                      <Button
                        className="card-shopbtn"
                        variant="primary"
                        onClick={() => {
                          handleAddToCart(product);
                          handleAddOrder(product);
                        }}
                        disabled={product.status === "disabled"}
                      >
                        ADD TO CART
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}

            </Row>
          )}
        </Col>
      </Row>
      <Alerts />
    </Container>
  );
}

export default Shop;







