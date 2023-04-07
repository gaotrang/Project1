import styled from "styled-components";
import { Input, Button } from "antd";

export const ButtonCreate = styled(Button)` 
    display: block;
    background: #fff;
    border-color: #3c6382;

    &:hover {
        background-color: #fff;
        color: #eeeeee;
        border-color: #fff;

    }
    &:active, &:focus {
       
        color: #3c6382;
        border-color: #fff;
    }
`
export const SearchContainer = styled.div`
    display: flex;
   justify-content: space-between;
   margin-bottom: 1.25rem;

`
export const SearchBox = styled(Input.Search)`
    width: 30%;
    opacity: 1;
    
`

