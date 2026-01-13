import styled from 'styled-components';

export const RankItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:8px;

`

export const RankItemDetail=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:4px;
    min-width:180px;
`

export const Rank=styled.div<{rank:number}>`
    color: ${({rank, theme})=> rank === 1 ? theme.color.main.mainColor : theme.color.text.primary};
`

export const Username=styled.div<{rank:number}>`
    color: ${({rank, theme})=> rank === 1 ? theme.color.main.mainColor : theme.color.text.primary};
`