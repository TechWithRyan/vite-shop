import styled from 'styled-components';

const Agreement = styled.span`
  font-size:18px;
  margin: 20px;
`;

const Button = styled.button`
  width: 40%;
  border: 1px solid;
  margin: 0 auto;
  margin-top: 20px ;
  height: 30px;
`;

const Input = styled.input`
  flex: 1;
  height: 30px;
  min-width: 40%;
  margin: 20px 20px 0px 0px;
    `;

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  background-color: lightgrey;
  margin-top: 40px;
  height: 70%;

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
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  color: #fff;
  padding: 30px;
`;

const Signup = () => {
  return (
    <section className="hero-image">
    <Container>
      <Wrapper>
        <Title>Signup</Title>
        <Form>
          <Input placeholder="Name"/>
          <Input placeholder="Last name"/>
          <Input placeholder="Username"/>
          <Input placeholder="Email"/>
          <Input placeholder="Password" type="password"/>
          <Input placeholder="Confirmed password" type="password"/>
          <Button>Go</Button>
          <Agreement>By creating account I consent to the processing of my personal information!</Agreement>
        </Form>
      </Wrapper>
    </Container>
 </section>
  );
};

export default Signup