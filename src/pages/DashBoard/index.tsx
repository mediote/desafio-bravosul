import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import {
  Product,
  Container,
  Content,
  Header,
  HeaderContent,
  Profile,
  Section,
  ButtonsContainer,
} from './styles';
import { AuthContext } from '../../hooks/AuthContext';
import logoImg from '../../assets/logo-bravosul.svg';

import api from '../../services/api';

interface Product {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
}

const DashBoard: React.FC = () => {
  const { user, signOut } = useContext(AuthContext);
  const [products, setProducts] = useState<Product[]>([]);
  const history = useHistory();

  useEffect(() => {
    api.get<Product[]>('products').then(response => {
      setProducts(response.data);
    });
  }, [products]);

  function handleEditProduct(id: string) {
    history.push(`/teste/${id}`);
  }

  async function handleDeleteProduct(id: string) {
    await api.delete(`products/${id}`);
  }

  function handleAddProduct() {
    history.push(`/teste/${0}`);
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="BravoSul" />

          <Profile>
            <div>
              <span>Bem vindo!</span>
              <Link to="/products">
                <strong>{user.username}</strong>
              </Link>
              <Button onClick={signOut} startIcon={<ExitToAppIcon />}>
                Sair
              </Button>
            </div>
          </Profile>
        </HeaderContent>
      </Header>

      <Content>
        <Section>
          <Fab onClick={() => handleAddProduct()} aria-label="add">
            <AddIcon />
          </Fab>
          {products.map(product => (
            <Product key={product.id}>
              <div>
                <strong>{product.name}</strong>
                <strong>{product.description}</strong>
              </div>
              <ButtonsContainer>
                <div>
                  <Button
                    startIcon={<EditIcon />}
                    onClick={() => handleEditProduct(product.id)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    onClick={() => {
                      if (
                        window.confirm('Deseja realmente deletar esse produto?')
                      )
                        handleDeleteProduct(product.id);
                    }}
                  >
                    Deletar
                  </Button>
                </div>
              </ButtonsContainer>
            </Product>
          ))}
        </Section>
      </Content>
    </Container>
  );
};
export default DashBoard;
