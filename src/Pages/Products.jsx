import React from 'react'
import styled from "styled-components";

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
    color: white;
`;
const ItemInfo = styled.div`
    font-size: 16px;
    color: white;
`;
const PriceContainer = styled.div`
    font-size: 18px;
    color: white;
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

function Products() {
    return (
        <Container className="hero-image">
            <Wrapper>
                <ImageContainer>
                    <Image src="https://images.unsplash.com/photo-1644661458456-d8ad35f5c9a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHNwb3J0cyUyMGhvb2RpZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Zip Windbreaker</Title>
                    <ItemInfo>
                        Flexible material.
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