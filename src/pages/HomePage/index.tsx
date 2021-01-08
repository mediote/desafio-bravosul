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
        // eslint-disable-next-line array-callback-return
        .map(productEnabled => {
          return productEnabled;
        });
      console.log(productActived);
      setProducts(productActived);
    });
  }, []);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="BravoSul" />
          <HeaderLinks>
            <Link to="/profile">
              <strong>Sobre</strong>
            </Link>

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
                <strong>{product.name}</strong>
                <strong>{product.description}</strong>
              </div>
            </Product>
          ))}
        </Section>
      </Content>
    </Container>
  );
};
export default HomePage;
