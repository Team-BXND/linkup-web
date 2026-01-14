import styled from "styled-components";

export const MyAnswerItem=styled.div`
    width:100%;3
    max-width:628px;
    padding:12px;
    gap:12px;

    display:flex;
    flex-direction:column;
    align-items:flex-start;

    border-radius:12px;
    border:1px solid ${({ theme })=>theme.color.line.light};
`

export const QuestionCover=styled.div`
    padding:8px;
    gap:8px;
    display:flex;
    border-radius:12px;
    border:1px solid ${({ theme })=>theme.color.line.light};
`

export const QuestionTitle=styled.div`
    color:${({ theme })=>theme.color.text.secondary};
`

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