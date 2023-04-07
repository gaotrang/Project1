import styled from "styled-components";

export const Layout = styled.div`
    display: grid;
    background-color: #fff;
    grid-template-columns: 17.5rem 1fr;
    animation-name: example;
    animation-duration: 5s;
    animation-iteration-count: 1;
    @keyframes example {
    from {background-color: #3c6382;}
    to {background-color: #fff;}

`
export const Sidebar = styled.div`
background-color: #bdc3c7;



    a {
        display: block;
    }

`
export const MenuItem = styled.div`
    display: flex;
    background-color: #fff;
    align-items: start;
    color: #171e2d;
    font-weight: 900;
    padding: 1rem 1rem;
    border: 1px solid;
    border-radius: 0.5rem;
    padding: 5px;
    box-shadow: 0.3rem 5px #888888;
    width:70%;
    
    {
    position: relative;
    animation: mymove 5s 1;

    @keyframes mymove {
    from {bottom: -200px;}
    to {bottom: 0px;}
    };
    &:hover {
        background-color: #1118271a;
    }
    &:active {
        background-color: #e2e4e7;
    }
    .anticon {
        font-size: 1.5rem;
        margin-right: 1rem;
    }
    span {
        display: inline-block;
        line-height: 1.5rem;
        text-aligh
    }

`
export const Content = styled.div`
    padding: 1rem;

`

export const Header = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    background-color: #fff;
    animation-name: example;
    animation-duration: 5s;
    animation-iteration-count: 1;
    @keyframes example {
    from {background-color: #3c6382;}
    to {background-color: #fff;};
    
    padding: 1rem;
    margin-bottom: 1rem;

`
export const Logo = styled.a`
    
    font-size: 1.75rem;
    font-weight:700;
    line-height: 4rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-bottom: 1rem;
`

export const Main = styled.main`
    min-height: calc(100vh - 9.5rem );
    padding: 1rem;
    overflow-y: auto;
`

export const Footer = styled.footer`
    background-color: #ffffff;
    text-align: center;
    padding: 1rem;
    margin-top: 1rem;

`
