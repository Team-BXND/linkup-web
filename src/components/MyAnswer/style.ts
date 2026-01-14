import styled from "styled-components";

export const MyAnswer=styled.div`
    width:100%;
    max-width:692px;
    height:100%;
    max-height:387px;
    padding:32px;
    gap:24px;

    display:flex;
    flex-direction:column;
    box-shadow: 0px 2px 4px -1px #0c0c0d1a, 0px 2px 4px -1px #0c0c0d0d;
`

export const TitleCover=styled.div`
    width:100%;
    max-width:628px;

    display:flex;
    align-items:flex-start;
    justify-content:space-between;
`

export const More=styled.div`
    color:${({ theme })=>theme.color.main.mainColor};
`


export const DetailCover=styled.div`
    width:100%;
    max-width:628px;
    height:100%;
    max-height:261px;

    display:flex;
    flex-direction:column;
    gap:12px;
`