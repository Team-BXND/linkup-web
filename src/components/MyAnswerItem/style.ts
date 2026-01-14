import styled from "styled-components";

export const MyAnswerItem=styled.div`
    width:100%;
    max-width:628px;
    padding:12px;
    gap:12px;

    display:flex;
    flex-direction:column;
    align-items:flex-start;

    border-radius:12px;
    border:1px solid ${({ theme })=>theme.color.line.light};
    &:hover{
        border-color:${({ theme })=>theme.color.main.mainColor};
    }
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