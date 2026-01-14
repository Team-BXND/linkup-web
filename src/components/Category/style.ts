import styled from "styled-components";

export const Category=styled.div`
    width:100%;
    max-width:55px;
    height:100%;
    max-height:24px;
    padding:12px 4px;

    background-color:${({ theme })=>theme.color.main.mainColor};
    opacity: 0.1;
    border-radius: inherit;

    display:flex;
    justify-content:center;
    align-items:center;
    color:${({ theme })=>theme.color.main.mainColor};
`