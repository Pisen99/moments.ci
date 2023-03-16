import React from 'react';
import styles from '../styles/LandingPage.module.css'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const LandingPage = () => {
    return (
        <Container>
            <h1>Try it out here <i class="fa-solid fa-arrow-down"></i></h1>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Add</Button>
                <Button variant="secondary">Delete</Button>
            </ButtonGroup>
            <p>To get full access please login or signup</p>
        </Container>
    )
}

export default LandingPage