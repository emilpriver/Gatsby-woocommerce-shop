import { Link } from 'gatsby';
import React from 'react';
import {
  Header, Row, Col, Logo,
} from './style';

const HeaderComponent = () => (
  <Header>
    <Row>
      <Col large>
        <Row>
          <Col>
            <Link to="/shop">Shop</Link>
          </Col>
          <Col>
            <Link to="/shop">Shop</Link>
          </Col>
          <Col>
            <Link to="/shop">Shop</Link>
          </Col>
          <Col>
            <Link to="/shop">Shop</Link>
          </Col>
        </Row>
      </Col>
      <Col>
        <Logo
          src="https://cdn.sanity.io/images/ua83pq8w/production/3692a9a49e0ee38a2602c2d38b6692b26d28a33f-500x150.png?h=250&fit=max"
          alt="Logo"
        />
      </Col>
      <Col large>
        <Row textAlign="right" justify="flex-end">
          <Col>Care</Col>
          <Col>Help</Col>
          <Col>Cart</Col>
        </Row>
      </Col>
    </Row>
  </Header>
);

export default HeaderComponent;
