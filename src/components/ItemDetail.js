import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ItemCount from "./ItemCount";



const BoxContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;

`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;

`

const Image = styled.img`
    width: 250px;
    height: 250px;

`

const StyledHeading = styled.h3`
    padding-top: 10px;
`

const StyledParagraph = styled.p`
    padding-top: 0;
    padding-bottom: 10px;
`

const StyledParagraphBox = styled.p``

const StyledButton = styled.button`
    margin: 10px;
`

function ItemDetail({ productDetail }) {


  return (
  <BoxContainer key={productDetail.id}>
      <Image src={productDetail.img_url} alt={productDetail.img_description}/>
      <StyledHeading>{productDetail.name}</StyledHeading>
      <StyledParagraph>{productDetail.price}</StyledParagraph>
      <StyledParagraph>{productDetail.description}</StyledParagraph>
      <ItemCount stock={productDetail.stock} initial={0} />
      <Container>
        <StyledButton>Volver</StyledButton>
        <StyledParagraph><Link to="/cart"><img src={"https://icongr.am/entypo/shopping-cart.svg?size=30&color=000000"} alt="carrito de compras"/></Link></StyledParagraph>
      </Container>
      <StyledParagraphBox> {`${productDetail.stock} unidades restantes`}</StyledParagraphBox>
    </BoxContainer> 
  );
}

export default ItemDetail;
