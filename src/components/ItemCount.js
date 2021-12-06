import React, {useState} from 'react';
import styled from 'styled-components';


const BoxContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;  
    align-items: baseline;

    width: 300px;
    height: 45px;

    padding: 5px 5px;

`

const CounterText = styled.p`
    font-size: 16px
`



function ItemCount({stock,initial}) {

    const [number,setNumber] = useState(initial);

    function checkStock() {

        if (stock === 0) {
            setNumber(0);
        }
        
    }

    function addCounter() {

        checkStock()

        if (number < stock) {
            setNumber(number + 1);
        } else {
            alert("Se supero el stock.")
            return number;
        }
    }

    function subCounter() {

        checkStock()

        if (number > 0) {
            setNumber(number - 1);
        } else {
            return number;
        }
    }


    return (
        <BoxContainer>
            <button onClick={() => subCounter()}><img src={`https://icongr.am/entypo/minus.svg?size=16&color=000000`} alt="resta-icono" /></button>
            <CounterText>{number}</CounterText>
            <button onClick={() => addCounter()}><img src={`https://icongr.am/clarity/add.svg?size=16&color=000000`} alt="suma-icono"/></button>
            <button>Agregar al carrito</button>
        </BoxContainer>
    )
}

export default ItemCount
