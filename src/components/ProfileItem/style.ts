import styled from "styled-components";

export const ProfileItem=styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap:4px;
`

export const ProfileSubtitle=styled.div`
    Color:theme.color.text.secondary;
`

export const ProfileContent=styled.div<{subtitle:string}>`
    color:${({ subtitle, theme })=>subtitle=="답변자 순위" || subtitle=="포인트" ?
        theme.color.main.mainColor 
        :theme.color.text.primary };
`

