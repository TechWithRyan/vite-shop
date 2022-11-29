import styled from "styled-components";
import { products } from '../data';
import Products from './Products';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 50px;
`;

const Store = () => {
    return (
        <Container>

        {products.map((item) => (
            <Products item={item} key={item.id} />
        ))}
        </Container>
    );
};

export default Store;