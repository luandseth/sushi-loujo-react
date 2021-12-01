import React from 'react';
import styled from 'styled-components';

const BoxContainer = styled.div`
  width: 100%;
`

const StyledLi = styled.li`
    border: 1px inset #000;
    list-style: none;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 15px;
    padding: 15px;
`

const Description = styled.p`
    padding: 0 60px;
`

const StyledImage = styled.img`
    width: 250px;
    height: 250px;
`




function Item({ key, title, description,price, image, imageDescription, stock }) {

    return (
        <>
            <StyledLi key={key}>
                <h2>{title}</h2>
                <Description>{description}</Description>
                <StyledImage alt={imageDescription} src={image} />
                <p>{price}</p>
                <button>Ver más</button>
            </StyledLi> 
        </>
    )
}

export default Item;
