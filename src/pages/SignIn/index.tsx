import React, { useCallback, useContext } from 'react';
import { FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import { Form } from '@unform/web';
import { AuthContext } from '../../hooks/AuthContext';
import { AnimationContainer, Container, Content } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/logo-bravosul.svg';

interface SignInFormData {
  identifier: string;
  password: string;
}

const SignIn: React.FC = () => {
  const { signIn } = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      await signIn({
        identifier: data.identifier,
        password: data.password,
      });

      history.push('/products');
    },
    [signIn, history],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="BravoSul" />

          <Form onSubmit={handleSubmit}>
            <h1>Faça seu login</h1>
            <Input name="identifier" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Entrar</Button>
          </Form>
          <Link to="/">
            <FiArrowLeft />
            Voltar
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default SignIn;
