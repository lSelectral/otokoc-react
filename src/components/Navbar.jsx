import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"
import { AccountCircle } from '@material-ui/icons'

const Container = styled.div`
    height: 70px;
    ${mobile({height: "50px"})};
    
    background-color: #ececebec;
`

const Wrapper = styled.div`
    display: flex;

`

const Left = styled.div`
    flex:1;
    margin: 10px;
`
const Right = styled.div`
    flex:1;
    text-align: right;
`

const navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    < AccountCircle/>
                </Left>
                <Right>
                    <h1>OTOKOÇ OTOMOTİV</h1>                    
                </Right>
            </Wrapper>
        </Container>


)
}

export default navbar
