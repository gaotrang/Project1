import styled from "styled-components";
import { Input, Button } from "antd";

export const ButtonCreate = styled(Button)` 
    display: block;
    background: gray;

    &:hover {
        background: orange;
        color: #eeeeee;
        border-color: #fff

    }
    &:active, &:focus {
        background: ;
        color: #000000;
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

