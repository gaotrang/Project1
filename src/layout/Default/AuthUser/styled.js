import styled from "styled-components";

export const User = styled.div`
    display: grid;
    grid-template-columns: 3rem 1fr;
    grid-gap: 0.5rem;
    cursor: pointer;
    
    position: relative;
    animation: mymove1 5s 1;
    }
    @keyframes mymove1 {
    from {right: 200px;}
    to {right: 0px;}

    
`;
export const Image = styled.div`
    background-image: url(${props => props.src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    padding-top: 100%;
`;

export const Role = styled.div`
font-size: 1rem;
margin-bottom: 0.25rem;

`;
export const Name = styled.h6`
font-size: 1rem;
margin: 0;
`;
