import React, { useEffect, useState } from "react";
import "../css/Admin.css";
import { Container, Row, Col, Table, Card } from "react-bootstrap";

function User() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

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
                                        {users.map((user, index) => (
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
                                        ))}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default User;

