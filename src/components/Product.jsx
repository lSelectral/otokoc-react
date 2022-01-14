import styled from "styled-components"
import { Add, Remove } from "@material-ui/icons"
import React from 'react'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 80px;
    width: 100%;
    justify-content: space-between;

    border: 3px solid black;

`

const Image = styled.img`
    padding: 10px;
    flex: 1;
    object-fit: contain;
`

const Item = styled.div`
    flex: 1;
    padding: 22px 0px;
    text-align:center;
    font-size: 19px;
    font-weight: 500;
`

const Product = ({item}) => {
    return (
        <Container>
            <Image src={item.image}/>
            <Item>{item.partNo}</Item>
            <Item>{item.partName}</Item>
            <Item>{item.price}</Item>
            <Item>
                <input style={{flex: "1", width: 150}} type="number"></input>
                <Add style={{flex: "1"}}/>
                <Remove style={{flex: "1"}}/>
            </Item>
        </Container>
    )
}

export default Product

/*

        <Container>
            <Image src={item.image}/>
            <Item>{item.partNo}</Item>
            <Item>{item.partName}</Item>
            <Item>{item.price}</Item>
            <Item>
                <input style={{flex: "1", width: 150}} type="number"></input>
                <Add style={{flex: "1"}}/>
                <Remove style={{flex: "1"}}/>
            </Item>
        </Container>

*/