import React, {useEffect, useState, useContext} from 'react';
import { RoutesContext } from '../App';
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

    const { value, setValue} = useContext(RoutesContext);

    console.log("detail V", value)
    useEffect(() => {
        const list = getItem(value)
        
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

export default ItemDetailContainer;
