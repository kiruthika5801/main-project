import React, { useEffect, useState } from "react";
import "../css/Admin.css";
import { Container, Row, Col, Table, Card, Button } from "react-bootstrap";

function User() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 5;

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:7000/get-users');
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

        fetchUsers();
    }, []);

    if (loading) {
        return <div>Loading users...</div>;
    }

    // Pagination logic for when there are more than 5 users
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    // Condition to check if pagination is required (more than 5 users)
    const totalPages = Math.ceil(users.length / usersPerPage);

    return (
        <div>
            <Container fluid>
                <Row className="justify-content-md-center user-main">
                    <Col xs lg={12} className="user-in">
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center mb-4">User Details</Card.Title>
                                <Table bordered responsive>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>User ID</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Email</th>
                                            <th>Telephone</th>
                                            <th>Address</th>
                                            <th>City</th>
                                            <th>State</th>
                                            <th>Country</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.length <= 5 ? (
                                            // Display all users if there are 5 or fewer
                                            users.map((user, index) => (
                                                <tr key={user._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{user._id}</td>
                                                    <td>{user.firstName}</td>
                                                    <td>{user.lastName}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.telephone}</td>
                                                    <td>{user.address}</td>
                                                    <td>{user.city}</td>
                                                    <td>{user.state}</td>
                                                    <td>{user.country}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            // Display paginated users when there are more than 5
                                            currentUsers.map((user, index) => (
                                                <tr key={user._id}>
                                                    <td>{index + 1 + (currentPage - 1) * usersPerPage}</td>
                                                    <td>{user._id}</td>
                                                    <td>{user.firstName}</td>
                                                    <td>{user.lastName}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.telephone}</td>
                                                    <td>{user.address}</td>
                                                    <td>{user.city}</td>
                                                    <td>{user.state}</td>
                                                    <td>{user.country}</td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </Table>

                                {/* Pagination Controls (only visible when there are more than 5 users) */}
                                {users.length > 5 && (
                                    <div className="pagination-controls" >
                                        <Button
                                            disabled={currentPage === 1}
                                            onClick={() => setCurrentPage(currentPage - 1)}
                                        >
                                            Previous
                                        </Button>
                                        <span> Page {currentPage} of {totalPages} </span>
                                        <Button
                                            disabled={currentPage === totalPages}
                                            onClick={() => setCurrentPage(currentPage + 1)}
                                        >
                                            Next
                                        </Button>
                                    </div>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default User;


