import styled from "styled-components";


export const QuestionMeta=styled.div`
    display:flex;
    gap:16px;
    margin-left:24px;
`

export const MetaItem=styled.div`
    display:flex;
    align-items:center;
    gap:6px;
`

export const Icon=styled.img`
    width:16px;
    height:16px;
`

export const Text=styled.div`
    color:${({ theme })=>theme.color.text.secondary};
`