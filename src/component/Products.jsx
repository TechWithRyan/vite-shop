import styled from "styled-components";
import { products } from '../data';
import Store from './store';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
    return (
        <Container>

        {products.map((item) => (
            <Store item={item} key={item.id} />
        ))}
        </Container>
    );
};

export default Products;