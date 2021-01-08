/* eslint-disable no-alert */
import React, { FormEvent, useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/ExitToApp';

import { AnimationContainer, Container, Content } from './styles';

import FormInput from '../../components/FormInput';

import Textarea from '../../components/Textarea';
import api from '../../services/api';

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

  function handleCreateProduct(e: FormEvent) {
    if (!product) {
      e.preventDefault();

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
          <form onSubmit={handleCreateProduct}>
            <legend>Dados do Produto</legend>
            <FormInput
              name="name"
              label="Nome"
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
            />
            <Textarea
              name="description"
              label="Descricao"
              value={description}
              onChange={e => {
                setDescription(e.target.value);
              }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SaveIcon />}
            >
              Gravar
            </Button>
          </form>
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
