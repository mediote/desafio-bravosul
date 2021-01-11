import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import {
  Product,
  Container,
  Content,
  Header,
  HeaderContent,
  Section,
  HeaderLinks,
} from './styles';

import logoImg from '../../assets/logo-bravosul.svg';

interface Product {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
}

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get<Product[]>('products').then(response => {
      const productList = response.data;

      const productActived = productList
        .filter(productEnabled => productEnabled.enabled === true)
        .map(productEnabled => {
          return productEnabled;
        });

      setProducts(productActived);
    });
  }, []);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="BravoSul" />
          <HeaderLinks>
            <a
              href="https://github.com/mediote/desafio-bravosul"
              target="blank"
            >
              Sobre
            </a>
            <Link to="/signin">
              <strong>Login</strong>
            </Link>
          </HeaderLinks>
        </HeaderContent>
      </Header>
      <Content>
        <Section>
          {products.map(product => (
            <Product key={product.id}>
              <div>
                <p>{product.name}</p>
                <p>{product.description}</p>
              </div>
            </Product>
          ))}
        </Section>
      </Content>
    </Container>
  );
};
export default HomePage;
