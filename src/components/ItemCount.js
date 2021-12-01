import React, {useState} from 'react';
import styled from 'styled-components';


const BoxContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;  
    align-items: center;

    padding: 10px 5px;

    border: 1px solid gray;
`

const CounterText = styled.p`
    font-size: 26px
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
            <buton onClick={() => subCounter()}><img src={`https://icongr.am/entypo/minus.svg?size=30&color=000000`} alt="resta-icono" /></buton>
            <CounterText>{number}</CounterText>
            <buton onClick={() => addCounter()}><img src={`https://icongr.am/clarity/add.svg?size=30&color=000000`} alt="suma-icono"/></buton>
        </BoxContainer>
    )
}

export default ItemCount
