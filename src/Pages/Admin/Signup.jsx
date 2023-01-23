import styled from 'styled-components';
import "./Signup.css"
import { Link } from '@mui/material';

const Agreement = styled.span`
  font-size:18px;
  margin: 20px;
`;

const Button = styled.button`
  
`;

const Input = styled.input`
  
    `;

const Wrapper = styled.div`

`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  display: flex;
  align-item: center;
  justify-content: center;
`;

const Form = styled.form`
  
`;

const Title = styled.h1`
  font-weight: 300;
  color: #fff;
  padding: 30px;
`;

const Signup = () => {
  return (
    <section className="hero-image">
      <Container>
        <Wrapper>
          <Title className='heading'>Register</Title>
          <Form className='form'>
            <Input placeholder="Name" type="text" autocomplete="off" className="name" required />
            <Input placeholder="Username" type="email" autocomplete="off" className="email" required />
            <Input placeholder="Password" type="password" required />
            <button className='submit-btn'>Register</button>
            <Link>Already a member? Login here</Link>
            <Agreement className='heading'>By creating account I consent to the processing of my personal information!</Agreement>
          </Form>
        </Wrapper>
      </Container>
    </section>

  );
};

export default Signup