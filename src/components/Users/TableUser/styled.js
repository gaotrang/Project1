import { Button } from "antd";
import styled from "styled-components";
//voi nhung the HTML truyen thong nhu div, input, span, ..
// styled.tenthe
export const Actions = styled.div`
    button{
        margin-right: 20px;
    }
`;
export const ButtonEdit = styled(Button)`
background: #fff;
color: #000000;
border-color: #000000

&:hover {
    background: #fff;
    color: #eb2f06;
    border-color: #000000

}
&:active, &:focus {
    background: #eb2f06;
    color: #000000;
    border-color: #eb2f06;
}
`;
export const ButtonDelete = styled(Button)`
background: #eb2f06;
color: #000000;
border-color: #000000

&:hover {
    background: #eb2f06;
    color: #eeeeee;
    border-color: #000000

}
&:active, &:focus {
    background: ;
    color: #000000;
    border-color: blued;
}
`;
export const User = styled.div`
    display: grid;
    grid-template-columns: 3rem 1fr;
    gap: 1rem;

    h6 {
        font-size: 1rem;
        margin: 0;
    }
`
export const Image = styled.div`
    background-image: url(${props => props.src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    padding-top: 100%;
`;