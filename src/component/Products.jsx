import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Circle = styled.div`
    width: 100px;
    height: 100px;
    background-color: pink;
    border-radius: 50%;
    position: absolute;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: green;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover{
        background-color: black;
        transform: scale(1.1);

    }
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;

`;

const Info = styled.div`
    width: auto;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    text-align: center;
    cursor: pointer;
    justify-content: center;
    transition: all 0.5s ease;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 300px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    position: relative;
    &:hover${Info} {
        opacity: 1;
    }
`;


const Products = ({item}) => {
    return(
    <Container>
        <Circle />
        <Image src={item.img} />
            <Info>
                <Icon>
                    <AddShoppingCartIcon />
                </Icon>
                <Icon>
                    <SearchIcon />
                </Icon>
                <Icon>
                    <FavoriteBorderIcon />
                </Icon>
            </Info>
    </Container>
        );
};


export default Products;