import React, { useEffect, useState } from "react";
import "../css/Admin.css";
import {
    Container, Row, Col, Table, Card, Button, Form, Dropdown, Modal
} from "react-bootstrap";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { FaTrashAlt } from "react-icons/fa";
import Pagination from 'react-bootstrap/Pagination';


function Order() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedOrders, setSelectedOrders] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [viewOrder, setViewOrder] = useState(null);

    const ordersPerPage = 5;

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await fetch("http://localhost:8000/get-orders");
            const data = await response.json();
            if (response.ok) {
                // setOrders(data.orders);

                // Sort orders in descending order by date
                const sortedOrders = data.orders.sort(
                    (a, b) => new Date(b.orderDate) - new Date(a.orderDate)
                );
                setOrders(sortedOrders);
            } else {
                console.error("Error fetching orders:", data.error);
            }
        } catch (err) {
            console.error("Error fetching orders:", err);
        } finally {
            setLoading(false);
        }
    };

    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
    const totalPages = Math.ceil(orders.length / ordersPerPage);

    const toggleSelectAll = () => {
        const currentIds = currentOrders.map(order => order._id);
        if (selectAll) {
            setSelectedOrders(prev => prev.filter(id => !currentIds.includes(id)));
        } else {
            setSelectedOrders(prev => [...new Set([...prev, ...currentIds])]);
        }
        setSelectAll(!selectAll);
    };

    const handleCheckboxChange = (id) => {
        setSelectedOrders(prev =>
            prev.includes(id) ? prev.filter(orderId => orderId !== id) : [...prev, id]
        );
    };

    const handleExport = (format) => {
        if (selectedOrders.length === 0) {
            alert("Please select at least one order to download.");
            return;
        }

        const exportOrders = orders.filter(order => selectedOrders.includes(order._id));
        const exportData = exportOrders.map(({ _id, email, orderDate }) => ({
            "Order ID": _id,
            "Email": email,
            "Date": new Date(orderDate).toLocaleString()
        }));

        if (format === "csv") {
            const csvContent = [
                Object.keys(exportData[0]).join(","),
                ...exportData.map(row => Object.values(row).join(","))
            ].join("\n");
            const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
            saveAs(blob, "orders.csv");

        } else if (format === "excel") {
            const worksheet = XLSX.utils.json_to_sheet(exportData);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Orders");
            XLSX.writeFile(workbook, "orders.xlsx");

        } else if (format === "pdf") {
            const doc = new jsPDF();
            doc.text("Order Details", 14, 15);
            autoTable(doc, {
                head: [Object.keys(exportData[0])],
                body: exportData.map(row => Object.values(row)),
                startY: 20,
            });
            doc.save("orders.pdf");
        }

        setSelectedOrders([]);
        setSelectAll(false);
    };

    const handleView = (order) => {
        setViewOrder(order);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        if (!selectedOrders.includes(id)) {
            alert("Please select this order by checkbox before deleting.");
            return;
        }

        if (!window.confirm("Are you sure you want to delete this order?")) return;

        try {
            const response = await fetch(`http://localhost:8000/delete-order/${id}`, {
                method: "DELETE"
            });
            const data = await response.json();

            if (response.ok) {
                alert("Order deleted successfully!");
                fetchOrders();
                setSelectedOrders(prev => prev.filter(orderId => orderId !== id));
            } else {
                alert("Error deleting order: " + data.error);
            }
        } catch (err) {
            console.error("Delete error:", err);
            alert("An error occurred while deleting the order.");
        }
    };

    const handleBulkDelete = async () => {
        if (selectedOrders.length === 0) {
            alert("Please select at least one order to delete.");
            return;
        }

        if (!window.confirm("Are you sure you want to delete selected orders?")) return;

        try {
            for (const id of selectedOrders) {
                await fetch(`http://localhost:8000/delete-order/${id}`, {
                    method: "DELETE"
                });
            }

            alert("Selected orders deleted successfully!");
            setSelectedOrders([]);
            setSelectAll(false);
            fetchOrders();
        } catch (err) {
            console.error("Bulk delete error:", err);
            alert("An error occurred while deleting selected orders.");
        }
    };

    if (loading) return <div>Loading orders...</div>;

    return (
        <Container fluid>
            <Row className="justify-content-md-center user-main">
                <Col xs lg={12} className="user-in">
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-center mb-4">Order Details</Card.Title>

                            <div className="d-flex justify-content-end mb-3">
                                <Button variant="danger" className="me-2" onClick={handleBulkDelete}>
                                    <FaTrashAlt className="me-1" /> Delete Selected
                                </Button>
                                <Dropdown>
                                    <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                        Download
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu style={{ backgroundColor: "#cbb9a6" }}>
                                        <Dropdown.Item onClick={() => handleExport("csv")}>Export as CSV</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleExport("excel")}>Export as Excel</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleExport("pdf")}>Export as PDF</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                            <Table bordered responsive hover>
                                <thead>
                                    <tr>
                                        <th>
                                            <Form.Check
                                                type="checkbox"
                                                checked={currentOrders.every(order => selectedOrders.includes(order._id))}
                                                onChange={toggleSelectAll}
                                                label="Select All"
                                            />
                                        </th>
                                        <th>Order ID</th>
                                        <th>Email</th>
                                        <th>Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentOrders.map(order => (
                                        <tr key={order._id}>
                                            <td>
                                                <Form.Check
                                                    type="checkbox"
                                                    checked={selectedOrders.includes(order._id)}
                                                    onChange={() => handleCheckboxChange(order._id)}
                                                />
                                            </td>
                                            <td>{order._id}</td>
                                            <td>{order.email}</td>
                                            <td>{new Date(order.orderDate).toLocaleString()}</td>
                                            <td>
                                                <Button variant="info" size="sm" className="me-1" onClick={() => handleView(order)}>
                                                    View
                                                </Button>
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    onClick={() => handleDelete(order._id)}
                                                >
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>

                            {/* {totalPages > 1 && ( */}
                            <div className="text-center mt-4">
                                <Pagination className="justify-content-center">
                                    <Pagination.Prev
                                        disabled={currentPage === 1}
                                        onClick={() => setCurrentPage(currentPage - 1)}
                                    />
                                    {Array.from({ length: totalPages }, (_, i) => (
                                        <Pagination.Item
                                            key={i + 1}
                                            active={i + 1 === currentPage}
                                            onClick={() => setCurrentPage(i + 1)}
                                        >
                                            {i + 1}
                                        </Pagination.Item>
                                    ))}
                                    <Pagination.Next
                                        disabled={currentPage === totalPages}
                                        onClick={() => setCurrentPage(currentPage + 1)}
                                    />
                                </Pagination>
                            </div>
                            {/* )} */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Order Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {viewOrder && (
                        <>
                            <p><strong>Order ID:</strong> {viewOrder._id}</p>
                            <p><strong>Email:</strong> {viewOrder.email}</p>
                            <p><strong>Date:</strong> {new Date(viewOrder.orderDate).toLocaleString()}</p>
                            <hr />
                            <h6>Products:</h6>
                            <ul>
                                {viewOrder.products.map((product, index) => {
                                    console.log("Product structure:", product);  // Log the structure here
                                    return (
                                        <li key={index}>
                                            <strong>Title:</strong> {product.title} | <strong>Qty:</strong> {product.quantity} | <strong>Price:</strong> ${product.price}
                                        </li>
                                    );
                                })}
                            </ul>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default Order;







