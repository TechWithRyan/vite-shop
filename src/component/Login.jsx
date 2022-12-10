import React from 'react'
import styled from 'styled-components';


const Button = styled.button`
  width: 20%;
  border: 1px solid;
  margin: 0 auto;
  margin-top: 20px ;
  height: 30px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px;
  height: 30px;
    `;

const Wrapper = styled.div`
  padding: 40px;
  background-color: gray;
  height: 300px;
  margin: 0 auto;

`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-item: center;
  justify-content: center;
  background-color: #fff;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 24px;
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
        <Form>

          <Input placeholder="Username"/>
          <Input placeholder="Password" type="password"/>
          <Link>Forgot Password?</Link>
          <Button>Go</Button>
          <Link>New Account</Link>
          
        </Form>
      </Wrapper>
    </Container>

  );
};

export default Login


