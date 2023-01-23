import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
  width: 20%;
  margin: 0 auto;
  margin-top: 20px ;
  height: 30px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px;
  height: 40px;
    `;

const Wrapper = styled.div`
  padding: 40px;
  height: 50%;
  margin: 0 auto;
  margin-top: 20px;
`;

const Container = styled.div`

  height: 100vh;
  background-size: cover;
  display: flex;
  align-item: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 300;
  color: #fff;
  padding: 30px;
`;

const Link = styled.a`
    margin: 30px;
    font-size: 16px;
    text-decoration: none;
    cursor: pointer;
`;

const Login = () => {
  return (
    <Container className='hero-image'>
      <Wrapper>
        <Title>Login</Title>
        <Form className='form'>
          <Input placeholder="Username" className="email" />
          <Input placeholder="Password" type="password" />
          <Link>Forgot Password?</Link>
          <Button className='submit-btn'>Go</Button>
          <Link>New Account</Link>
        </Form>
      </Wrapper>
    </Container>

  );
};

export default Login


