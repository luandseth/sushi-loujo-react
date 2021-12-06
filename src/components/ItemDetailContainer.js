import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import ItemDetail from './ItemDetail';
import getItems from '../items';


const ItemBoxContainer = styled.article`
        margin: 0 auto;
        padding: 20px 50px;
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
`


function ItemDetailContainer() {

    const [productDetail, setProductDetail] = useState([]);

    useEffect(() => {
        const list = getItems()

        list.then(response => {
            setProductDetail(response);
        })
    }, [])

    return (
        <ItemBoxContainer>
            <ItemDetail productDetail={productDetail} />
        </ItemBoxContainer>
    )
}

export default ItemDetailContainer
