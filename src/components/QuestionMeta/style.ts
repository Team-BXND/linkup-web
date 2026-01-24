import styled from "styled-components";


export const QuestionMeta=styled.div`
    display:flex;
    gap:1rem;
    margin-left:1.5rem;
`

export const MetaItem=styled.div`
    display:flex;
    align-items:center;
    gap:0.375rem;
`

export const Icon=styled.img`
    width:1rem;
    height:1rem;
`

export const Text=styled.div`
    color:${({ theme })=>theme.color.text.secondary};
`