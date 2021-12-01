import React from "react";
import styled from "styled-components";
import Item from "./Item";

const BoxContainer = styled.div`
  width: 100%;
  display: flex; 
  justify-content: center;
`

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  padding: 30px 0;
`




function ItemList({ items }) {
  return (
    <BoxContainer>
      <StyledUl>
        {items.map((item) => 
        <Item
            key={item.id}
            title={item.name}
            description={item.description}
            price={item.price}
            image={item.img_url}
            imageDescription={item.img_description}
            stock={item.stock}
          />
        )}
      </StyledUl>
    </BoxContainer>
  );
}

export default ItemList;
