import React from "react";
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
    <BoxContainer>
      <Image src={productDetail[0].img_url} alt={productDetail[0].img_description}/>
      <StyledHeading>{productDetail[0].name}</StyledHeading>
      <StyledParagraph>{productDetail[0].price}</StyledParagraph>
      <StyledParagraph>8 piezas de sushi en formato roll (arroz por fuera alga nori por dentro).</StyledParagraph>
      <ItemCount stock={productDetail[0].stock} initial={0} />
      <StyledButton>Volver</StyledButton>
      <StyledParagraphBox> {`${productDetail[0].stock} unidades restantes`}</StyledParagraphBox>
    </BoxContainer>
  );
}

export default ItemDetail;
