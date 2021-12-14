import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ItemDetail from './ItemDetail';
import {getItem} from '../items';


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

    const {id} = useParams();
    
    console.log("ID", id)

    useEffect(() => {
        const item = getItem(id)
        
        item.then(data => {
            setProductDetail(data);
        })
    }, [id]);

    console.log("PRODUCT", productDetail)

    return (
        <ItemBoxContainer>
            <ItemDetail productDetail={productDetail} />
        </ItemBoxContainer>
    )
}

export default ItemDetailContainer;
