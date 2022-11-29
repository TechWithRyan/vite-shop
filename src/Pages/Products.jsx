import React from 'react'
import styled from "styled-components";
import A4 from '../../images/A4.jpg'

const Container = styled.div`
    
`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    margin: 40px;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`;
const ImageContainer = styled.div`
    flex: 1;
`;
const Title = styled.h1`
    font-size: 20px;
`;
const ItemInfo = styled.div`
    font-size: 16px;
`;
const PriceContainer = styled.div`
    font-size: 18px;
`;
const SizeContainer = styled.select`
    margin-left: 10px;
    padding: 5px;
`;
const SizeTitle = styled.span`
    padding: 10px;
    margin: auto;
    justify-content: center;
    color: #fff;
    background-color: black;
    display: flex;
    font-size: 24px;
    width: auto;

`;
const Size = styled.option`


`;

const Button = styled.button`
    padding: 10px;
    border: 2px solid black;
    margin-left: 10px;
    cursor: pointer;
`;

const Image = styled.img`
  width: 70%;
  height: 100%;
  object-fit: contain;

`;
// <img src={A4} alt="shoes"></img>
function Products() {
  return (
    <Container>
        <Wrapper>
            <ImageContainer> 
                <Image src="https://m.media-amazon.com/images/I/9121sOnPM3L._AC_UY606_.jpg" />
            </ImageContainer>
                <InfoContainer>
                    <Title>Jul tröja</Title>
                    <ItemInfo>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
                    </ItemInfo>
                    <PriceContainer>Price 699 kr</PriceContainer>
                    <SizeContainer>
                        <SizeTitle>Find your size</SizeTitle>
                        <Size>37</Size>
                        <Size>38</Size>
                        <Size>39</Size>
                        <Size>40</Size>
                        <Size>41</Size>
                        <Size>42</Size>
                        <Size>43</Size>
                        <Size>44</Size>
                        <Size>45</Size>
                           
                    </SizeContainer>
                    <Button>Lägg till i kundvagn</Button>
                </InfoContainer>
            
        </Wrapper>
    </Container>
  )
}

export default Products