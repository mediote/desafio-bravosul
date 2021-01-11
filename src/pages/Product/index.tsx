/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';

import { Form } from '@unform/web';
import { AnimationContainer, Container, Content } from './styles';

import Input from '../../components/Input';
import TextArea from '../../components/Textarea';

import api from '../../services/api';
import Button from '../../components/Button';

interface ProductsParams {
  id: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
}

const Product: React.FC = () => {
  const { params } = useRouteMatch<ProductsParams>();
  const history = useHistory();

  const [product, setProduct] = useState<Product>();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (params) {
      api.get<Product>(`products/${params.id}`).then(response => {
        setProduct(response.data);
      });
    }
  }, [params]);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setEnabled(product.enabled);
    }
  }, [product]);

  function handleCreateProduct() {
    if (!product) {
      api
        .post('products', {
          name,
          description,
          enabled,
        })
        .then(() => {
          alert('Cadastro realizado com sucesso!');

          history.push('/products');
        })
        .catch(() => {
          alert('Erro no cadastro.');
        });
    } else {
      api.put(`products/${product.id}`, {
        name,
        description,
        enabled,
      });
      history.push('/products');
    }
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Form onSubmit={handleCreateProduct}>
            <h1>Dados do produto</h1>
            <Input
              name="name"
              value={name}
              placeholder="Nome do produto"
              onChange={e => {
                setName(e.target.value);
              }}
            />
            <TextArea
              name="description"
              placeholder="Descrição do produto"
              value={description}
              onChange={e => {
                setDescription(e.target.value);
              }}
            />
            <Button type="submit">Gravar</Button>
          </Form>
          <Link to="/products">
            <FiArrowLeft />
            Voltar
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default Product;
