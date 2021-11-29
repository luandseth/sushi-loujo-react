import React from 'react'
import styled from 'styled-components'
import ItemCount from './ItemCount'

function ItemListContainer({greetings}) {

    const StyledText = styled.p`
        color: #000;
    `
    return (
        <div className="mx-auto p-3" style={{width: "400px"}}> 
            <h1>Sushi Loujo</h1>
            <StyledText>{greetings}</StyledText>
            <ItemCount stock={5} initial={0} />
        </div>
    )
}

export default ItemListContainer
