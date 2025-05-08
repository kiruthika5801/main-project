import React, { useState } from "react";
import "../css/Admin.css";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

function Settings() {
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    image: null,
  });

  const handleImageChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", product.title);
    formData.append("price", product.price);
    formData.append("image", product.image);

    try {
      const response = await fetch("http://localhost:8000/add-product", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (response.ok) {
        alert("Product added successfully");
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product");
    }
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              {/* <h4 className="mb-4 text-center">Add Product</h4> */}
              <Form onSubmit={handleSubmit}>
                <Row className="align-items-end">
                  <Col md={3}>
                    <Form.Group controlId="productTitle">
                      <Form.Label>Title</Form.Label>
                      <Form.Control
                        type="text"
                        value={product.title}
                        onChange={(e) =>
                          setProduct({ ...product, title: e.target.value })
                        }
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={2}>
                    <Form.Group controlId="productPrice">
                      <Form.Label>Price</Form.Label>
                      <Form.Control
                        type="number"
                        value={product.price}
                        onChange={(e) =>
                          setProduct({ ...product, price: e.target.value })
                        }
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    <Form.Group controlId="productImage">
                      <Form.Label>Image</Form.Label>
                      <Form.Control
                        type="file"
                        onChange={handleImageChange}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={3} className="d-grid">
                    <Button type="submit" className="mt-2">
                      Add Product
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Settings;


