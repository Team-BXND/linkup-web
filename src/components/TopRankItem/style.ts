import styled from 'styled-components';

export const RankItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:4px;
`

export const RankItemDetail=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Rank=styled.div<{rank:number}>`
    color: ${({rank, theme})=> rank === 1 ? theme.mainColor : theme.textPrimary};
`

export const Username=styled.div<{rank:number}>`
    color: ${({rank, theme})=> rank === 1 ? theme.mainColor : theme.textPrimary};
`