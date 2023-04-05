import styled from "styled-components";
import { Input, Button } from "antd";

export const ButtonCreate = styled(Button)` 
    display: flex;
    background: gray; 
    
    &:hover {
        background: orange;
        color: #fff;
        border-color: #fff

    }
    &:active, &:focus {
        background: #gray ;
        color: #gray;
        border-color: #fff;
    }
`
export const SearchContainer = styled.div`
    background-image
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
   justify-content: space-between;
   margin-bottom: 1.25rem;

`
export const SearchBox = styled(Input.Search)`
    width: 30%;
`

