import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';


export default class Profile extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }


    componentDidMount() {
        if (window.location.pathname === '/profile') {
            if (!localStorage.getItem('users')) {
                window.location.pathname = '/'
            } else {
                let data = JSON.parse(localStorage.getItem('users'))
                this.setState({ data: data })
            }
        }

    }

    Logout = () => {
        localStorage.removeItem('users')
        window.location.pathname = '/'
    }


    render() {
        return (
            <Container>
                <Row className='bg-light mt-5'>
                    <Col></Col>
                    <Col>
                        <h2>this is profile page</h2>
                        <Button variant="primary" onClick={() => this.Logout()} style={{ marginRight: '10px' }}  >Logout</Button>

                        {
                            this.state.data.map((user, key) => {
                                return
                                <div key={key}>
                                    <h2>{user.username}</h2>
                                    <h2>{user.fullName}</h2>
                                    <h2>{user.email}</h2>
                                    <h2>{user.password}</h2>
                                </div>

                            })
                        }
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}
