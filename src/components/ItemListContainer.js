import React, {useEffect, useState, } from 'react';
import styled from 'styled-components';
import ItemList from './ItemList';
import getItems from '../items';


const ItemListBoxContainer = styled.div`
        margin: 0 auto;
        padding: 20px 50px;
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
`


function ItemListContainer() {

    //const {categoryId} = useParams();
    const [listProduct, setListProduct] = useState([]);


    /* ( async () => {
        if(categoryId !== undefined){
            const products = await getProductsById(categoryId);
            setListProduct(products);
        } else {
            const products = await getItems();
            setListProduct(products);
        } 
    }) */

    useEffect(() => {
        const list = getItems()

        list.then(response => {
            setListProduct(response);
        })
    }, [])


    return (
        <ItemListBoxContainer> 
            <h1>Sushi Loujo</h1>
            <ItemList items={listProduct}/>
        </ItemListBoxContainer>
    )
}

export default ItemListContainer
