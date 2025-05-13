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

function User() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [viewUser, setViewUser] = useState(null);

    const usersPerPage = 5;

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:8000/get-users');
            const data = await response.json();
            if (response.ok) {
                setUsers(data.users);
            } else {
                console.error('Error fetching users:', data.error);
            }
        } catch (err) {
            console.error('Error fetching users:', err);
        } finally {
            setLoading(false);
        }
    };

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(users.length / usersPerPage);

    const toggleSelectAll = () => {
        if (selectAll) {
            setSelectedUsers(prev => prev.filter(id => !currentUsers.map(user => user._id).includes(id)));
        } else {
            const currentUserIds = currentUsers.map(user => user._id);
            setSelectedUsers(prev => [...new Set([...prev, ...currentUserIds])]);
        }
        setSelectAll(!selectAll);
    };

    const handleCheckboxChange = (id) => {
        setSelectedUsers(prev =>
            prev.includes(id) ? prev.filter(userId => userId !== id) : [...prev, id]
        );
    };

    const handleExport = (format) => {
        if (selectedUsers.length === 0) {
            alert("Please select at least one user to download.");
            return;
        }

        const exportUsers = users.filter(user => selectedUsers.includes(user._id));
        const exportData = exportUsers.map(({ _id, firstName, lastName, email, telephone, city }) => ({
            "User ID": _id,
            "First Name": firstName,
            "Last Name": lastName,
            "Email": email,
            "Phone": telephone,
            "City": city,
        }));

        if (format === "csv") {
            const csvContent = [
                Object.keys(exportData[0]).join(","),
                ...exportData.map(row => Object.values(row).join(","))
            ].join("\n");
            const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
            saveAs(blob, "users.csv");

        } else if (format === "excel") {
            const worksheet = XLSX.utils.json_to_sheet(exportData);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
            XLSX.writeFile(workbook, "users.xlsx");

        } else if (format === "pdf") {
            const doc = new jsPDF();
            doc.text("User Details", 14, 15);
            autoTable(doc, {
                head: [Object.keys(exportData[0])],
                body: exportData.map(row => Object.values(row)),
                startY: 20,
            });
            doc.save("users.pdf");
        }

        setSelectedUsers([]);
        setSelectAll(false);
    };

    const handleView = (user) => {
        setViewUser(user);
        setShowModal(true);
    };

    const handleDelete = async (id) => {
        const isSelected = selectedUsers.includes(id);

        if (!isSelected) {
            alert("Please select this user by checkbox before deleting.");
            return;
        }

        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (!confirmDelete) return;

        try {
            const response = await fetch(`http://localhost:8000/delete-user/${id}`, {
                method: "DELETE"
            });
            const data = await response.json();

            if (response.ok) {
                alert("User deleted successfully!");
                fetchUsers();
                setSelectedUsers(prev => prev.filter(userId => userId !== id));
            } else {
                alert("Error deleting user: " + data.error);
            }
        } catch (err) {
            console.error("Delete error:", err);
            alert("An error occurred while deleting the user.");
        }
    };

    const handleBulkDelete = async () => {
        if (selectedUsers.length === 0) {
            alert("Please select at least one user to delete.");
            return;
        }

        const confirmDelete = window.confirm("Are you sure you want to delete selected users?");
        if (!confirmDelete) return;

        try {
            for (const id of selectedUsers) {
                await fetch(`http://localhost:8000/delete-user/${id}`, {
                    method: "DELETE"
                });
            }

            alert("Selected users deleted successfully!");
            setSelectedUsers([]);
            setSelectAll(false);
            fetchUsers();
        } catch (err) {
            console.error("Bulk delete error:", err);
            alert("An error occurred while deleting selected users.");
        }
    };

    if (loading) return <div>Loading users...</div>;

    return (
        <Container fluid>
            <Row className="justify-content-md-center user-main">
                <Col xs lg={12} className="user-in">
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-center mb-4">User Details</Card.Title>

                            <div className="d-flex justify-content-end mb-3">
                                <Button
                                    variant="danger"
                                    className="me-2"
                                    onClick={handleBulkDelete}
                                >
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
                                                checked={currentUsers.every(user => selectedUsers.includes(user._id))}
                                                onChange={toggleSelectAll}
                                                label="Select All"
                                            />
                                        </th>
                                        <th>User ID</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>City</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentUsers.map(user => (
                                        <tr key={user._id}>
                                            <td>
                                                <Form.Check
                                                    type="checkbox"
                                                    checked={selectedUsers.includes(user._id)}
                                                    onChange={() => handleCheckboxChange(user._id)}
                                                />
                                            </td>
                                            <td>{user._id}</td>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.email}</td>
                                            <td>{user.telephone}</td>
                                            <td>{user.city}</td>
                                            <td>
                                                <Button variant="info" size="sm" className="me-1" onClick={() => handleView(user)}>
                                                    View
                                                </Button>
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    onClick={() => handleDelete(user._id)}
                                                >
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>

                            {/* {totalPages > 1 && ( */}
                            <div className="pagination-controls text-center mt-3">
                                <Button
                                    disabled={currentPage === 1}
                                    onClick={() => setCurrentPage(currentPage - 1)}
                                    className="me-2"
                                >
                                    Previous
                                </Button>
                                <span>Page {currentPage} of {totalPages}</span>
                                <Button
                                    disabled={currentPage === totalPages}
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                    className="ms-2"
                                >
                                    Next
                                </Button>
                            </div>
                            {/* )}   */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>User Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {viewUser && (
                        <>
                            <p><strong>User ID:</strong> {viewUser._id}</p>
                            <p><strong>Name:</strong> {viewUser.firstName} {viewUser.lastName}</p>
                            <p><strong>Email:</strong> {viewUser.email}</p>
                            <p><strong>Phone:</strong> {viewUser.telephone}</p>
                            <p><strong>City:</strong> {viewUser.city}</p>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default User;
