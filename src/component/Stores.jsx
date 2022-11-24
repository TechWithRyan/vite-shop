import styled from "styled-components";
import { products } from '../data';
import Stores from './Stores';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Stores = () => {
    return (
        <Container>

        {stores.map((item) => (
            <Store item={item} key={item.id} />
        ))}
        </Container>
    );
};

export default Stores;